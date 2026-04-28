import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import StepFlow from "./StepFlow";
import { getDevotionByDay, getSoapEntry } from "@/db/queries";

type Params = Promise<{ day: string }>;

export default async function DevotionalPage({ params }: { params: Params }) {
  const { day } = await params;

  if (day === "today" || day === "next") {
    redirect("/today");
  }

  const dayNumber = Number.parseInt(day, 10);
  if (!Number.isFinite(dayNumber) || dayNumber < 1) {
    notFound();
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(`/sign-in?redirect_url=/devotional/${day}`);
  }

  const devotion = await getDevotionByDay(dayNumber);
  if (!devotion) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
          Day {dayNumber}
        </p>
        <h1 className="mt-4 font-[var(--font-heading)] text-4xl text-charcoal">
          No devotion yet for Day {dayNumber}
        </h1>
        <p className="mt-6 font-[var(--font-body)] text-charcoal/70">
          Emily hasn't published Day {dayNumber} yet. Come back soon, or revisit
          a previous day from your journal.
        </p>
      </section>
    );
  }

  const entry = await getSoapEntry(userId, devotion.id);

  return (
    <>
      <header className="max-w-3xl mx-auto px-6 pt-12">
        <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
          Day {devotion.dayNumber}
        </p>
        <h1 className="mt-2 font-[var(--font-heading)] text-3xl lg:text-4xl text-charcoal">
          {devotion.theme}
        </h1>
      </header>
      <StepFlow
        devotion={devotion}
        entry={entry}
        dayNumber={devotion.dayNumber}
      />
    </>
  );
}
