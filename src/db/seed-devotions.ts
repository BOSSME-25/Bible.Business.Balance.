/**
 * Parses April Devotion.txt and upserts each entry into the `devotions` table.
 * Devotions are renumbered: the lowest "Day N" in the file becomes Day 1,
 * next becomes Day 2, etc. — so a new user starts at Day 1 regardless of
 * Emily's original calendar numbering.
 *
 * Run with: npm run db:seed
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { db } from "./index";
import { devotions } from "./schema";
import { sql } from "drizzle-orm";

type Parsed = {
  originalDay: number;
  theme: string;
  scriptureRef: string;
  contextIntro: string;
  contextWhy: string;
};

function parseFile(content: string): Parsed[] {
  const lines = content.split(/\r?\n/);
  const result: Parsed[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    const dayMatch = line.match(/^Day\s+(\d+)\s*[–-]/);
    if (!dayMatch) {
      i++;
      continue;
    }
    const originalDay = parseInt(dayMatch[1], 10);
    const theme = (lines[i + 1] || "").trim();
    const scriptureLine = (lines[i + 2] || "").trim();
    const scriptureRef = scriptureLine.replace(/^Scripture:\s*/i, "");

    let contextIntro = "";
    let contextWhy = "";
    let j = i + 3;
    while (j < lines.length && !/^Context Before You Read:/i.test(lines[j].trim())) {
      j++;
    }
    if (j < lines.length) {
      const intro = lines[j].trim().replace(/^Context Before You Read:\s*/i, "");
      const introParts: string[] = [intro];
      j++;
      while (
        j < lines.length &&
        !/^Why This Matters:/i.test(lines[j].trim()) &&
        !/^Day\s+\d+\s*[–-]/.test(lines[j].trim())
      ) {
        if (lines[j].trim()) introParts.push(lines[j].trim());
        j++;
      }
      contextIntro = introParts.join(" ").trim();
    }
    if (j < lines.length && /^Why This Matters:/i.test(lines[j].trim())) {
      const why = lines[j].trim().replace(/^Why This Matters:\s*/i, "");
      const whyParts: string[] = [why];
      j++;
      while (
        j < lines.length &&
        !/^Day\s+\d+\s*[–-]/.test(lines[j].trim())
      ) {
        if (lines[j].trim()) whyParts.push(lines[j].trim());
        j++;
      }
      contextWhy = whyParts.join(" ").trim();
    }

    if (theme && scriptureRef && contextIntro && contextWhy) {
      result.push({ originalDay, theme, scriptureRef, contextIntro, contextWhy });
    }
    i = j;
  }
  return result;
}

async function main() {
  const path = resolve(process.cwd(), "April Devotion.txt");
  const raw = readFileSync(path, "utf-8");
  const parsed = parseFile(raw);
  // Renumber: sort by original day so lowest source day becomes Day 1.
  parsed.sort((a, b) => a.originalDay - b.originalDay);
  console.log(`Parsed ${parsed.length} devotions`);

  let dayNumber = 1;
  for (const d of parsed) {
    await db
      .insert(devotions)
      .values({
        dayNumber,
        theme: d.theme,
        scriptureRef: d.scriptureRef,
        contextIntro: d.contextIntro,
        contextWhy: d.contextWhy,
      })
      .onConflictDoUpdate({
        target: devotions.dayNumber,
        set: {
          theme: sql`excluded.theme`,
          scriptureRef: sql`excluded.scripture_ref`,
          contextIntro: sql`excluded.context_intro`,
          contextWhy: sql`excluded.context_why`,
        },
      });
    dayNumber++;
  }

  console.log(`Seeded ${parsed.length} devotions as Days 1–${parsed.length}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
