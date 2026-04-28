"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { devotions, soapEntries } from "@/db/schema";

const TextField = z.string().trim().min(1).max(4000);

async function requireUserAndDevotion(dayNumber: number) {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const [devotion] = await db
    .select()
    .from(devotions)
    .where(eq(devotions.dayNumber, dayNumber))
    .limit(1);
  if (!devotion) throw new Error(`No devotion for Day ${dayNumber}`);
  return { userId, devotion };
}

async function upsertEntry(
  userId: string,
  devotionId: string,
  patch: Partial<{
    observation: string;
    application: string;
    userPrayer: string;
    aiPrayer: string;
    completedAt: Date;
  }>,
  nextStep: number,
) {
  await db
    .insert(soapEntries)
    .values({
      userId,
      devotionId,
      currentStep: nextStep,
      ...patch,
    })
    .onConflictDoUpdate({
      target: [soapEntries.userId, soapEntries.devotionId],
      set: {
        ...patch,
        currentStep: sql`GREATEST(${soapEntries.currentStep}, ${nextStep})`,
        updatedAt: sql`now()`,
      },
    });
}

export async function saveObservation(dayNumber: number, observation: string) {
  const value = TextField.parse(observation);
  const { userId, devotion } = await requireUserAndDevotion(dayNumber);
  await upsertEntry(userId, devotion.id, { observation: value }, 4);
  revalidatePath(`/devotional/${dayNumber}`);
}

export async function saveApplication(dayNumber: number, application: string) {
  const value = TextField.parse(application);
  const { userId, devotion } = await requireUserAndDevotion(dayNumber);
  await upsertEntry(userId, devotion.id, { application: value }, 6);
  revalidatePath(`/devotional/${dayNumber}`);
}

export async function saveUserPrayer(dayNumber: number, userPrayer: string) {
  const value = TextField.parse(userPrayer);
  const { userId, devotion } = await requireUserAndDevotion(dayNumber);
  await upsertEntry(userId, devotion.id, { userPrayer: value }, 7);
  revalidatePath(`/devotional/${dayNumber}`);
}

export async function commitAiPrayer(dayNumber: number, aiPrayer: string) {
  const value = TextField.parse(aiPrayer);
  const { userId, devotion } = await requireUserAndDevotion(dayNumber);
  await upsertEntry(
    userId,
    devotion.id,
    { aiPrayer: value, completedAt: new Date() },
    8,
  );
  revalidatePath(`/devotional/${dayNumber}`);
  revalidatePath(`/journal`);
  revalidatePath(`/today`);
}

export async function setCurrentStep(dayNumber: number, step: number) {
  const { userId, devotion } = await requireUserAndDevotion(dayNumber);
  await db
    .insert(soapEntries)
    .values({ userId, devotionId: devotion.id, currentStep: step })
    .onConflictDoUpdate({
      target: [soapEntries.userId, soapEntries.devotionId],
      set: {
        currentStep: sql`GREATEST(${soapEntries.currentStep}, ${step})`,
        updatedAt: sql`now()`,
      },
    });
}
