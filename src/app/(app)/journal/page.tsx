import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getJournalForUser } from "@/db/queries";

export default async function JournalPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect_url=/journal");
  }

  const rows = await getJournalForUser(userId);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
        Your devotional history
      </p>
      <h1 className="font-[var(--font-heading)] text-5xl lg:text-6xl text-charcoal mt-4 leading-tight">
        Journal
      </h1>
      <div className="accent-line my-8" />

      {rows.length === 0 ? (
        <div className="mt-12 p-10 border border-charcoal/15 bg-warm-cream/40 text-center">
          <p className="font-[var(--font-body)] text-charcoal/70">
            You haven't completed a devotion yet.
          </p>
          <Link
            href="/today"
            className="mt-6 inline-flex items-center gap-2 bg-terracotta text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal transition-colors"
          >
            Start today's devotion
          </Link>
        </div>
      ) : (
        <ul className="mt-12 space-y-6">
          {rows.map(({ entry, devotion }) => {
            const isComplete = entry.completedAt !== null;
            return (
              <li
                key={entry.id}
                className="border border-charcoal/15 bg-warm-cream/40 hover:bg-warm-cream/60 transition-colors"
              >
                <Link
                  href={`/devotional/${devotion.dayNumber}?step=${
                    isComplete ? 8 : entry.currentStep
                  }`}
                  className="block p-6 lg:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="font-[var(--font-accent)] italic text-tan text-sm tracking-widest uppercase">
                        Day {devotion.dayNumber}
                      </p>
                      <h2 className="mt-2 font-[var(--font-heading)] text-2xl text-charcoal">
                        {devotion.theme}
                      </h2>
                      <p className="mt-1 font-[var(--font-body)] text-charcoal/60 text-sm">
                        {devotion.scriptureRef}
                      </p>
                      {entry.observation && (
                        <p className="mt-4 font-[var(--font-body)] text-charcoal/75 text-sm leading-relaxed line-clamp-2">
                          {entry.observation}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0">
                      <span
                        className={`inline-flex items-center font-[var(--font-body)] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 ${
                          isComplete
                            ? "bg-terracotta text-warm-cream"
                            : "bg-charcoal/10 text-charcoal/70"
                        }`}
                      >
                        {isComplete
                          ? "Complete"
                          : `Step ${entry.currentStep} of 7`}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
