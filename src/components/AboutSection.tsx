import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-warm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Large photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/emily-headshot.png"
                alt="Emily Belt"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative overlapping element */}
            <div className="absolute -bottom-6 -right-6 bg-terracotta/10 w-48 h-48 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-charcoal/10" />
          </div>

          {/* Bio text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-terracotta" />
              <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
                About
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Hi, I&apos;m
              <br />
              <span className="text-terracotta">Emily.</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              I&apos;m an operations executive with 14+ years in higher education,
              the co-founder of Crown Heirs Hair Den, the founder and lead
              consultant of BOSS ME, and the founder and CEO of OE Prints. I&apos;ve
              spent my career building teams, scaling organizations, and helping
              entrepreneurs turn vision into viable business.
            </p>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              But titles only tell part of the story. I&apos;m a Faith-Fueled CEO.
              Before the strategy, I seek Scripture. Before the marketing, I ask
              for wisdom. Before I hire, launch, post, or pivot, I pray.
              Because my success isn&apos;t rooted in hustle. It&apos;s built on
              obedience.
            </p>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              I started Bible, Business &amp; Balance because I needed a space
              where faith governed my leadership, not just guided it. Where
              wellness wasn&apos;t separate from work. Where being a mom and a CEO
              didn&apos;t mean choosing one over the other. If you&apos;re here,
              you probably needed that too. Welcome. You&apos;re right on time.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] text-terracotta uppercase hover:text-charcoal transition-colors mt-2 group"
            >
              LEARN MORE ABOUT MY STORY
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
