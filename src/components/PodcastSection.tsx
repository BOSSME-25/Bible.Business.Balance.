export default function PodcastSection() {
  return (
    <section id="podcast" className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image / Podcast Cover side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-charcoal-light via-[#2d2420] to-[#1a1510] flex items-center justify-center overflow-hidden rounded-sm">
              <div className="text-center p-8">
                {/* Podcast cover placeholder */}
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-terracotta/30 to-gold-muted/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-20 h-20 text-warm-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="font-[var(--font-heading)] text-warm-cream/40 text-xl">Bible, Business</p>
                <p className="font-[var(--font-heading)] text-terracotta/40 text-xl">&amp; Balance</p>
                <p className="font-[var(--font-body)] text-[10px] tracking-[0.3em] text-tan/30 uppercase mt-2">The Podcast</p>
              </div>
            </div>

            {/* Platform icons */}
            <div className="flex items-center justify-center gap-6 mt-8">
              {["Apple Podcasts", "Spotify", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-[var(--font-body)] text-[9px] tracking-[0.2em] text-tan/40 uppercase hover:text-terracotta transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-gold-muted" />
              <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
                Tune In
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-warm-cream leading-tight">
              The Podcast for
              <br />
              <span className="text-terracotta">Faith-Fueled Women</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-warm-cream/60 leading-relaxed">
              Each week, we dive into what it really looks like to lead by faith:
              the morning routines that protect your clarity, the business
              strategies rooted in Scripture, the wellness rhythms that fuel your
              leadership, and the honest conversations about what obedience costs
              and what it produces.
            </p>

            <div className="flex flex-col gap-3 my-2">
              {[
                "Scripture & strategy for the faith-fueled entrepreneur",
                "Wellness as leadership: juicing, rest, and body stewardship",
                "Building businesses with ordered obedience, not scattered hustle",
                "Real talk from a CEO, mom, and woman figuring it out with God",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <p className="font-[var(--font-body)] text-sm text-warm-cream/50">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-warm-cream font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-terracotta/80 transition-all duration-300 group mt-2 self-start"
            >
              LISTEN NOW
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
