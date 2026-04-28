import "server-only";
import { and, asc, desc, eq, isNotNull, isNull, notInArray, sql } from "drizzle-orm";
import { db } from "./index";
import { devotions, soapEntries, bibleStudies } from "./schema";

export async function getDevotionByDay(dayNumber: number) {
  const rows = await db
    .select()
    .from(devotions)
    .where(eq(devotions.dayNumber, dayNumber))
    .limit(1);
  return rows[0] ?? null;
}

export async function getSoapEntry(userId: string, devotionId: string) {
  const rows = await db
    .select()
    .from(soapEntries)
    .where(
      and(eq(soapEntries.userId, userId), eq(soapEntries.devotionId, devotionId)),
    )
    .limit(1);
  return rows[0] ?? null;
}

/**
 * Returns the user's next unfinished devotion (self-paced).
 * - If they have an in-progress entry (no completed_at), return that day.
 * - Otherwise, the lowest day_number they have not completed.
 * - Returns null if every seeded devotion is complete.
 */
export async function getNextDevotionForUser(userId: string) {
  // Step 1: in-progress entry (started, not completed)
  const inProgress = await db
    .select({
      devotion: devotions,
    })
    .from(soapEntries)
    .innerJoin(devotions, eq(devotions.id, soapEntries.devotionId))
    .where(and(eq(soapEntries.userId, userId), isNull(soapEntries.completedAt)))
    .orderBy(asc(devotions.dayNumber))
    .limit(1);
  if (inProgress[0]) return inProgress[0].devotion;

  // Step 2: lowest day_number not yet completed
  const completedDevotionIds = await db
    .select({ devotionId: soapEntries.devotionId })
    .from(soapEntries)
    .where(
      and(eq(soapEntries.userId, userId), isNotNull(soapEntries.completedAt)),
    );
  const completedIds = completedDevotionIds.map((r) => r.devotionId);

  const nextRows = await db
    .select()
    .from(devotions)
    .where(
      completedIds.length > 0
        ? notInArray(devotions.id, completedIds)
        : sql`TRUE`,
    )
    .orderBy(asc(devotions.dayNumber))
    .limit(1);
  return nextRows[0] ?? null;
}

export async function getJournalForUser(userId: string) {
  return db
    .select({
      entry: soapEntries,
      devotion: devotions,
    })
    .from(soapEntries)
    .innerJoin(devotions, eq(devotions.id, soapEntries.devotionId))
    .where(eq(soapEntries.userId, userId))
    .orderBy(desc(devotions.dayNumber));
}

export async function listBibleStudies() {
  return db
    .select()
    .from(bibleStudies)
    .orderBy(desc(bibleStudies.publishedAt));
}

export async function getBibleStudyBySlug(slug: string) {
  const rows = await db
    .select()
    .from(bibleStudies)
    .where(eq(bibleStudies.slug, slug))
    .limit(1);
  return rows[0] ?? null;
}
