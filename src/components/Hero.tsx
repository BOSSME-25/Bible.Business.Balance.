export default function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden">
      {/* Background grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full pt-24 pb-16 lg:pt-0 lg:pb-0">
          {/* Text Side */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 lg:pr-16 animate-fade-in-up">
            {/* Decorative accent */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-terracotta" />
              <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-tan uppercase">
                Faith. Purpose. Freedom.
              </span>
            </div>

            {/* Name */}
            <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-warm-cream leading-[0.95] tracking-tight">
              Bible,
              <br />
              <span className="text-terracotta">Business</span>
              <br />
              &amp; Balance
            </h1>

            {/* Subtitle roles */}
            <p className="font-[var(--font-body)] text-[11px] sm:text-xs tracking-[0.3em] text-tan/80 uppercase">
              Author. Speaker. Podcaster. Business Owner.
            </p>

            {/* Tagline */}
            <p className="font-[var(--font-accent)] text-xl sm:text-2xl text-warm-cream/70 leading-relaxed max-w-md italic">
              Let&apos;s grow in faith, business, and balance &mdash; together.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-6 mt-2">
              <a
                href="#mission"
                className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-warm-cream font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-terracotta/80 transition-all duration-300 group"
              >
                THE MISSION
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

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative frame elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-tan/20 z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-terracotta/30 z-10" />

            {/* Photo placeholder */}
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-[#3d2e24] to-charcoal flex items-center justify-center">
                {/* Placeholder visual - elegant silhouette style */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-b from-tan/20 to-terracotta/10 flex items-center justify-center mb-6">
                    <svg className="w-24 h-24 text-tan/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <p className="font-[var(--font-accent)] text-tan/40 text-lg italic">Your Photo Here</p>
                </div>
              </div>
              {/* Dramatic overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-[var(--font-body)] text-[9px] tracking-[0.3em] text-tan/40 uppercase">
          Scroll
        </span>
        <svg className="w-4 h-4 text-tan/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
