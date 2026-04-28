"use client";

import { useState, useTransition, useEffect, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  saveObservation,
  saveApplication,
  saveUserPrayer,
  commitAiPrayer,
  setCurrentStep,
} from "./actions";
import type { Devotion, SoapEntry } from "@/db/schema";

type Props = {
  devotion: Devotion;
  entry: SoapEntry | null;
  dayNumber: number;
};

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function StepFlow({ devotion, entry, dayNumber }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlStep = Number(searchParams.get("step") ?? "0");
  const initial = (urlStep || entry?.currentStep || 1) as Step;
  const [step, setStep] = useState<Step>(initial);
  const [pending, startTransition] = useTransition();

  const [observation, setObservation] = useState(entry?.observation ?? "");
  const [application, setApplication] = useState(entry?.application ?? "");
  const [userPrayer, setUserPrayer] = useState(entry?.userPrayer ?? "");
  const [aiPrayer, setAiPrayer] = useState(entry?.aiPrayer ?? "");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("step", String(step));
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [step, router, searchParams]);

  function go(next: Step) {
    setStep(next);
    startTransition(() => setCurrentStep(dayNumber, next).catch(() => {}));
  }

  async function submitObservation(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await saveObservation(dayNumber, observation);
      setStep(4);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function submitApplication(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await saveApplication(dayNumber, application);
      setStep(6);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function submitUserPrayer(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await saveUserPrayer(dayNumber, userPrayer);
      setStep(7);
      void streamAiPrayer();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function streamAiPrayer() {
    setStreaming(true);
    setAiPrayer("");
    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dayNumber }),
      });
      if (!res.ok || !res.body) {
        throw new Error("Prayer service unavailable");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assembled = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assembled += chunk;
        setAiPrayer(assembled);
      }
      await commitAiPrayer(dayNumber, assembled);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
      <ProgressDots step={step} />
      {error && (
        <div className="mt-6 p-4 border border-terracotta/40 bg-terracotta/5 text-terracotta text-sm">
          {error}
        </div>
      )}

      <div className="mt-10">
        {step === 1 && (
          <Card label="Scripture" eyebrow="Step 1 of 7">
            <p className="font-[var(--font-accent)] italic text-xl text-tan">
              Today's reading
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-charcoal mt-2 leading-tight">
              {devotion.scriptureRef}
            </h2>
            {devotion.scriptureText && (
              <blockquote className="mt-8 font-[var(--font-body)] text-charcoal/85 text-lg leading-relaxed border-l-2 border-terracotta pl-6 italic">
                {devotion.scriptureText}
              </blockquote>
            )}
            <p className="mt-8 font-[var(--font-body)] text-charcoal/70 text-base">
              Take a moment to read the passage in your Bible.
            </p>
            <Continue onClick={() => go(2)}>Continue to context</Continue>
          </Card>
        )}

        {step === 2 && (
          <Card label="Context" eyebrow="Step 2 of 7">
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal">
              Context Before You Read
            </h3>
            <div className="accent-line my-6" />
            <p className="font-[var(--font-body)] text-charcoal/85 text-lg leading-relaxed">
              {devotion.contextIntro}
            </p>
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal mt-12">
              Why This Matters
            </h3>
            <div className="accent-line my-6" />
            <p className="font-[var(--font-body)] text-charcoal/85 text-lg leading-relaxed">
              {devotion.contextWhy}
            </p>
            <Continue onClick={() => go(3)}>I've read the passage</Continue>
          </Card>
        )}

        {step === 3 && (
          <Card label="Observation" eyebrow="Step 3 of 7">
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal">
              What did you notice?
            </h3>
            <p className="mt-4 font-[var(--font-body)] text-charcoal/70">
              In your own words, capture what stood out — a phrase, a word, a
              tension, a contrast. Don't aim for polish.
            </p>
            <form onSubmit={submitObservation} className="mt-6">
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="What I observe…"
                className="w-full min-h-[200px] p-5 border border-charcoal/15 bg-warm-cream/40 text-charcoal font-[var(--font-body)] text-base leading-relaxed focus:outline-none focus:border-terracotta resize-y"
                required
              />
              <div className="mt-6">
                <SubmitButton pending={pending}>Save & continue</SubmitButton>
              </div>
            </form>
          </Card>
        )}

        {step === 4 && (
          <Card label="Emily's Observation" eyebrow="Step 4 of 7">
            <p className="font-[var(--font-accent)] italic text-tan">
              Now compare with mine
            </p>
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal mt-2">
              What I noticed in this passage
            </h3>
            <div className="accent-line my-6" />
            {devotion.emilyObservation ? (
              <p className="font-[var(--font-body)] text-charcoal/85 text-lg leading-relaxed whitespace-pre-line">
                {devotion.emilyObservation}
              </p>
            ) : (
              <p className="font-[var(--font-body)] italic text-charcoal/50">
                Emily's observation for this devotion is being added soon.
              </p>
            )}
            <Continue onClick={() => go(5)}>Continue to application</Continue>
          </Card>
        )}

        {step === 5 && (
          <Card label="Application" eyebrow="Step 5 of 7">
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal">
              How does this apply to your life?
            </h3>
            <p className="mt-4 font-[var(--font-body)] text-charcoal/70">
              Be specific. What habit, decision, mindset, or relationship is
              this passage speaking into right now?
            </p>
            <form onSubmit={submitApplication} className="mt-6">
              <textarea
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                placeholder="In my life this looks like…"
                className="w-full min-h-[200px] p-5 border border-charcoal/15 bg-warm-cream/40 text-charcoal font-[var(--font-body)] text-base leading-relaxed focus:outline-none focus:border-terracotta resize-y"
                required
              />
              <div className="mt-6">
                <SubmitButton pending={pending}>Save & continue</SubmitButton>
              </div>
            </form>
          </Card>
        )}

        {step === 6 && (
          <Card label="Prayer" eyebrow="Step 6 of 7">
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal">
              Pray it back to God
            </h3>
            <p className="mt-4 font-[var(--font-body)] text-charcoal/70">
              Turn your application into a prayer. Speak directly to the Father
              about what you wrote.
            </p>
            <form onSubmit={submitUserPrayer} className="mt-6">
              <textarea
                value={userPrayer}
                onChange={(e) => setUserPrayer(e.target.value)}
                placeholder="Father, …"
                className="w-full min-h-[200px] p-5 border border-charcoal/15 bg-warm-cream/40 text-charcoal font-[var(--font-body)] text-base leading-relaxed focus:outline-none focus:border-terracotta resize-y"
                required
              />
              <div className="mt-6">
                <SubmitButton pending={pending}>
                  Save & receive prayer
                </SubmitButton>
              </div>
            </form>
          </Card>
        )}

        {step === 7 && (
          <Card label="A Prayer for You" eyebrow="Step 7 of 7">
            <p className="font-[var(--font-accent)] italic text-tan">
              Receive this scripture-grounded prayer
            </p>
            <h3 className="font-[var(--font-heading)] text-3xl text-charcoal mt-2">
              From your devotion to your day
            </h3>
            <div className="accent-line my-6" />
            <div className="font-[var(--font-body)] text-charcoal/90 text-lg leading-relaxed whitespace-pre-line min-h-[120px]">
              {aiPrayer || (
                <span className="italic text-charcoal/50">
                  {streaming ? "Praying with you…" : "Loading…"}
                </span>
              )}
              {streaming && (
                <span className="inline-block w-2 h-5 bg-terracotta ml-1 animate-pulse" />
              )}
            </div>
            <Continue onClick={() => setStep(8)} disabled={streaming || !aiPrayer}>
              See my full SOAP
            </Continue>
            {!aiPrayer && !streaming && (
              <button
                type="button"
                onClick={streamAiPrayer}
                className="mt-4 text-sm font-[var(--font-body)] text-terracotta underline hover:text-charcoal"
              >
                Try again
              </button>
            )}
          </Card>
        )}

        {step === 8 && (
          <SoapCard
            devotion={devotion}
            observation={observation}
            application={application}
            userPrayer={userPrayer}
            aiPrayer={aiPrayer}
            dayNumber={dayNumber}
          />
        )}
      </div>
    </div>
  );
}

function ProgressDots({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <div
          key={n}
          className={`h-1 flex-1 transition-colors ${
            step >= n ? "bg-terracotta" : "bg-charcoal/15"
          }`}
        />
      ))}
    </div>
  );
}

function Card({
  children,
  label,
  eyebrow,
}: {
  children: React.ReactNode;
  label: string;
  eyebrow: string;
}) {
  return (
    <article className="bg-warm-cream/40 border border-charcoal/10 p-8 lg:p-12">
      <p className="font-[var(--font-body)] text-[11px] font-semibold tracking-[0.3em] uppercase text-terracotta">
        {eyebrow} · {label}
      </p>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function Continue({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="mt-10 inline-flex items-center gap-2 bg-charcoal text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-terracotta transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

function SubmitButton({
  children,
  pending,
}: {
  children: React.ReactNode;
  pending: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 bg-terracotta text-warm-cream font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal transition-colors disabled:opacity-40"
    >
      {pending ? "Saving…" : children}
    </button>
  );
}

function SoapCard({
  devotion,
  observation,
  application,
  userPrayer,
  aiPrayer,
  dayNumber,
}: {
  devotion: Devotion;
  observation: string;
  application: string;
  userPrayer: string;
  aiPrayer: string;
  dayNumber: number;
}) {
  return (
    <article className="bg-warm-cream/60 border border-charcoal/15 p-8 lg:p-14">
      <p className="font-[var(--font-accent)] italic text-tan tracking-widest uppercase text-sm">
        Day {dayNumber}
      </p>
      <h2 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-charcoal mt-2">
        {devotion.theme}
      </h2>
      <div className="accent-line my-8" />

      <Section letter="S" label="Scripture">
        <p className="font-[var(--font-heading)] text-2xl text-charcoal">
          {devotion.scriptureRef}
        </p>
      </Section>

      <Section letter="O" label="Observation">
        <p className="whitespace-pre-line">{observation}</p>
      </Section>

      <Section letter="A" label="Application">
        <p className="whitespace-pre-line">{application}</p>
      </Section>

      <Section letter="P" label="Prayer">
        <p className="whitespace-pre-line">{userPrayer}</p>
        {aiPrayer && (
          <>
            <p className="mt-6 font-[var(--font-accent)] italic text-tan">
              And a prayer back over you:
            </p>
            <p className="mt-2 whitespace-pre-line italic">{aiPrayer}</p>
          </>
        )}
      </Section>

      <p className="mt-12 font-[var(--font-body)] text-charcoal/60 text-sm">
        Saved to your journal. Come back tomorrow.
      </p>
    </article>
  );
}

function Section({
  letter,
  label,
  children,
}: {
  letter: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex items-baseline gap-4">
        <span className="font-[var(--font-heading)] text-5xl text-terracotta leading-none">
          {letter}
        </span>
        <p className="font-[var(--font-body)] text-[11px] font-semibold tracking-[0.3em] uppercase text-charcoal/60">
          {label}
        </p>
      </div>
      <div className="mt-4 ml-16 font-[var(--font-body)] text-charcoal/85 text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
