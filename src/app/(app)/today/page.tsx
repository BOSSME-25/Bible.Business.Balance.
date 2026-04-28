import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getNextDevotionForUser } from "@/db/queries";

export default async function TodayPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect_url=/today");
  }

  const next = await getNextDevotionForUser(userId);

  // No more devotions seeded — show "all caught up" landing.
  if (!next) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-16 lg:py-24 text-center">
        <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
          You're all caught up
        </p>
        <h1 className="font-[var(--font-heading)] text-5xl lg:text-6xl text-charcoal mt-4 leading-tight">
          Nothing new yet
        </h1>
        <div className="accent-line my-8 mx-auto" />
        <p className="font-[var(--font-body)] text-charcoal/80 text-lg leading-relaxed">
          You've finished every devotion released so far. Come back when Emily
          publishes the next day, or revisit one from your journal.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 bg-terracotta text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal transition-colors"
          >
            Open my journal
          </Link>
          <Link
            href="/bible-study"
            className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Bible study
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
        Day {next.dayNumber}
      </p>
      <h1 className="font-[var(--font-heading)] text-5xl lg:text-6xl text-charcoal mt-4 leading-tight">
        {next.theme}
      </h1>
      <p className="mt-2 font-[var(--font-body)] text-charcoal/60 text-base">
        {next.scriptureRef}
      </p>
      <div className="accent-line my-8" />
      <p className="font-[var(--font-body)] text-charcoal/80 text-lg leading-relaxed">
        Take a deep breath. Open your Bible. Let's spend a few minutes
        in scripture, observation, application, and prayer.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/devotional/${next.dayNumber}`}
          className="inline-flex items-center gap-2 bg-terracotta text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal transition-colors"
        >
          {next.dayNumber === 1
            ? "Begin Day 1"
            : `Continue with Day ${next.dayNumber}`}
        </Link>
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:border-terracotta hover:text-terracotta transition-colors"
        >
          My journal
        </Link>
        <Link
          href="/bible-study"
          className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:border-terracotta hover:text-terracotta transition-colors"
        >
          Bible study
        </Link>
      </div>
    </section>
  );
}
