export default function QuizSection() {
  return (
    <section className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal-light via-[#3d2e24] to-[#2a2420] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-terracotta/20 to-gold-muted/10 flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-tan/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="font-[var(--font-accent)] text-tan/40 text-lg italic">Lifestyle Photo</p>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/15 -z-10" />
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-gold-muted" />
              <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
                Discover Yourself
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-warm-cream leading-tight">
              What&apos;s Your
              <br />
              <span className="text-terracotta">Boss Fuel Type?</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-warm-cream/60 leading-relaxed">
              Are you leading from overflow or running on empty? Do you fuel
              before the hustle or crash after it? Discover how you&apos;re wired
              to lead &mdash; body, mind, and spirit &mdash; and what rhythms
              will help you build well without burning out.
            </p>

            <p className="font-[var(--font-body)] text-sm text-tan/60">
              Takes about 3 minutes. Completely free. Rooted in real strategy.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-warm-cream font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-terracotta/80 transition-all duration-300 group mt-4 self-start"
            >
              TAKE THE QUIZ
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
