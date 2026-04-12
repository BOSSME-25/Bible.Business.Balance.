export default function AboutSection() {
  return (
    <section id="about" className="relative bg-warm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Large photo */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#e0d5c5] via-[#cfc0ac] to-[#c4b094] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full bg-white/30 flex items-center justify-center mb-6">
                  <svg className="w-20 h-20 text-charcoal/15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="font-[var(--font-accent)] text-charcoal/25 text-xl italic">Your Photo Here</p>
              </div>
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
              Hi &mdash; I&apos;m glad
              <br />
              <span className="text-terracotta">you&apos;re here.</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              I&apos;m a woman of faith, a wife, a mom, and an entrepreneur who has
              spent years trying to figure out how to do it all &mdash; and learning
              (sometimes the hard way) that &ldquo;doing it all&rdquo; isn&apos;t the
              goal. Doing what God called me to? That&apos;s the goal.
            </p>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              I started Bible, Business &amp; Balance because I couldn&apos;t find a
              space that spoke to all of who I am. I didn&apos;t want to separate my
              faith from my business. I didn&apos;t want to choose between being a
              boss and being a believer. So I created this &mdash; a community, a
              movement, a conversation for women who are done choosing and ready to
              integrate everything God has placed inside of them.
            </p>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              Whether you&apos;re here for the podcast, the book, the speaking
              engagements, or just to feel seen &mdash; welcome. You&apos;re not too
              much. You&apos;re not behind. You&apos;re right on time.
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
