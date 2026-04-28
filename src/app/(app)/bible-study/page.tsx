import Link from "next/link";
import { listBibleStudies } from "@/db/queries";

export default async function BibleStudyIndexPage() {
  const studies = await listBibleStudies();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
        Live Bible study
      </p>
      <h1 className="font-[var(--font-heading)] text-5xl lg:text-6xl text-charcoal mt-4 leading-tight">
        Bible Study
      </h1>
      <div className="accent-line my-8" />

      {studies.length === 0 ? (
        <div className="mt-12 p-10 border border-charcoal/15 bg-warm-cream/40 text-center">
          <p className="font-[var(--font-body)] text-charcoal/70">
            No studies have been published yet. Emily will release the next
            week's lesson soon.
          </p>
        </div>
      ) : (
        <ul className="mt-12 space-y-4">
          {studies.map((study) => (
            <li
              key={study.id}
              className="border border-charcoal/15 bg-warm-cream/40 hover:bg-warm-cream/60 transition-colors"
            >
              <Link
                href={`/bible-study/${study.slug}`}
                className="block p-6 lg:p-8"
              >
                <p className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.3em] uppercase text-terracotta">
                  {study.week ? `Week ${study.week}` : "Lesson"}
                  {study.day ? ` · Day ${study.day}` : ""}
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-2xl text-charcoal">
                  {study.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
