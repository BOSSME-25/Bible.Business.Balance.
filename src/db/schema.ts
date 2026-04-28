import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

export const devotions = pgTable("devotions", {
  id: uuid("id").primaryKey().defaultRandom(),
  dayNumber: integer("day_number").notNull().unique(),
  theme: text("theme").notNull(),
  scriptureRef: text("scripture_ref").notNull(),
  scriptureText: text("scripture_text"),
  contextIntro: text("context_intro").notNull(),
  contextWhy: text("context_why").notNull(),
  emilyObservation: text("emily_observation"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const soapEntries = pgTable(
  "soap_entries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").notNull(),
    devotionId: uuid("devotion_id")
      .notNull()
      .references(() => devotions.id, { onDelete: "cascade" }),
    observation: text("observation"),
    application: text("application"),
    userPrayer: text("user_prayer"),
    aiPrayer: text("ai_prayer"),
    currentStep: integer("current_step").notNull().default(1),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique("soap_user_devotion_unq").on(t.userId, t.devotionId)],
);

export const bibleStudies = pgTable("bible_studies", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  week: integer("week"),
  day: integer("day"),
  pdfPath: text("pdf_path").notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Devotion = typeof devotions.$inferSelect;
export type SoapEntry = typeof soapEntries.$inferSelect;
export type NewSoapEntry = typeof soapEntries.$inferInsert;
export type BibleStudy = typeof bibleStudies.$inferSelect;
