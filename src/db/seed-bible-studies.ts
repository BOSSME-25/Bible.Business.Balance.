/**
 * Seeds the `bible_studies` table with the "None Like Him" Week 1 lessons.
 * PDFs must already exist in /public/bible-studies/.
 * Run with: npm run db:seed:studies
 */
import "dotenv/config";
import { db } from "./index";
import { bibleStudies } from "./schema";
import { sql } from "drizzle-orm";

const STUDIES = [
  { slug: "none-like-him-day-1", title: "None Like Him", week: 1, day: 1 },
  { slug: "none-like-him-day-2", title: "None Like Him", week: 1, day: 2 },
  { slug: "none-like-him-day-3", title: "None Like Him", week: 1, day: 3 },
  { slug: "none-like-him-day-4", title: "None Like Him", week: 1, day: 4 },
  { slug: "none-like-him-day-5", title: "None Like Him", week: 1, day: 5 },
  { slug: "none-like-him-day-6", title: "None Like Him", week: 1, day: 6 },
  { slug: "none-like-him-day-7", title: "None Like Him", week: 1, day: 7 },
];

async function main() {
  for (const s of STUDIES) {
    await db
      .insert(bibleStudies)
      .values({
        slug: s.slug,
        title: s.title,
        week: s.week,
        day: s.day,
        pdfPath: `/bible-studies/${s.slug}.pdf`,
      })
      .onConflictDoUpdate({
        target: bibleStudies.slug,
        set: {
          title: sql`excluded.title`,
          week: sql`excluded.week`,
          day: sql`excluded.day`,
          pdfPath: sql`excluded.pdf_path`,
        },
      });
  }
  console.log(`Seeded ${STUDIES.length} bible studies.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
