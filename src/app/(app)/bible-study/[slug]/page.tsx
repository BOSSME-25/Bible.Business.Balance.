import Link from "next/link";
import { notFound } from "next/navigation";
import { getBibleStudyBySlug } from "@/db/queries";

type Params = Promise<{ slug: string }>;

export default async function BibleStudyDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const study = await getBibleStudyBySlug(slug);
  if (!study) notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
      <header className="flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <p className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.3em] uppercase text-terracotta">
            {study.week ? `Week ${study.week}` : "Lesson"}
            {study.day ? ` · Day ${study.day}` : ""}
          </p>
          <h1 className="mt-2 font-[var(--font-heading)] text-4xl lg:text-5xl text-charcoal">
            {study.title}
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bible-study"
            className="inline-flex items-center font-[var(--font-body)] text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 hover:text-terracotta"
          >
            ← All studies
          </Link>
          <a
            href={study.pdfPath}
            download
            className="inline-flex items-center bg-charcoal text-warm-cream font-[var(--font-body)] text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-terracotta transition-colors"
          >
            Download PDF
          </a>
        </div>
      </header>
      <div className="accent-line my-8" />
      <div className="bg-warm-cream/40 border border-charcoal/10">
        <object
          data={study.pdfPath}
          type="application/pdf"
          className="w-full h-[80vh]"
          aria-label={`${study.title} PDF`}
        >
          <div className="p-10 text-center">
            <p className="font-[var(--font-body)] text-charcoal/70">
              Your browser cannot display this PDF inline.
            </p>
            <a
              href={study.pdfPath}
              className="mt-4 inline-flex items-center bg-terracotta text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-6 py-3"
            >
              Download to read
            </a>
          </div>
        </object>
      </div>
    </section>
  );
}
