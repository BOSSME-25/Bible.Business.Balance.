import { auth } from "@clerk/nextjs/server";
import { streamText } from "ai";
import { z } from "zod";
import { db } from "@/db";
import { devotions, soapEntries } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import {
  PRAYER_SYSTEM_PROMPT,
  buildPrayerUserMessage,
} from "@/lib/prayer-prompt";

const RequestSchema = z.object({
  dayNumber: z.number().int().min(1),
});

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response("Invalid request", { status: 400 });
  }

  const { dayNumber } = parsed.data;

  const [devotion] = await db
    .select()
    .from(devotions)
    .where(eq(devotions.dayNumber, dayNumber))
    .limit(1);
  if (!devotion) {
    return new Response("Devotion not found", { status: 404 });
  }

  const [entry] = await db
    .select()
    .from(soapEntries)
    .where(
      and(
        eq(soapEntries.userId, userId),
        eq(soapEntries.devotionId, devotion.id),
      ),
    )
    .limit(1);

  if (!entry?.observation || !entry?.application || !entry?.userPrayer) {
    return new Response(
      "Complete observation, application, and prayer first.",
      { status: 400 },
    );
  }

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6",
    system: PRAYER_SYSTEM_PROMPT,
    prompt: buildPrayerUserMessage({
      scriptureRef: devotion.scriptureRef,
      scriptureText: devotion.scriptureText,
      theme: devotion.theme,
      contextWhy: devotion.contextWhy,
      emilyObservation: devotion.emilyObservation,
      userObservation: entry.observation,
      userApplication: entry.application,
      userPrayer: entry.userPrayer,
    }),
    temperature: 0.7,
  });

  return result.toTextStreamResponse();
}
