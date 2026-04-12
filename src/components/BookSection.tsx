export default function BookSection() {
  return (
    <section id="book" className="relative bg-off-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-16 h-[1px] bg-tan" />
          <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
            The Book
          </span>
          <div className="w-16 h-[1px] bg-tan" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book cover image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-charcoal/10 rounded-sm" />
              {/* Book cover placeholder */}
              <div className="relative w-72 sm:w-80 aspect-[2/3] bg-gradient-to-b from-charcoal via-charcoal-light to-[#2a2218] flex items-center justify-center rounded-sm shadow-2xl overflow-hidden">
                <div className="text-center p-8 relative z-10">
                  <div className="w-16 h-[1px] bg-terracotta mx-auto mb-6" />
                  <p className="font-[var(--font-heading)] text-2xl text-warm-cream leading-tight mb-2">
                    Bible,
                  </p>
                  <p className="font-[var(--font-heading)] text-2xl text-terracotta leading-tight mb-2">
                    Business
                  </p>
                  <p className="font-[var(--font-heading)] text-2xl text-warm-cream leading-tight mb-6">
                    &amp; Balance
                  </p>
                  <div className="w-8 h-[1px] bg-gold-muted mx-auto mb-4" />
                  <p className="font-[var(--font-accent)] text-sm text-tan/60 italic">
                    Your book subtitle here
                  </p>
                  <div className="w-8 h-[1px] bg-gold-muted mx-auto mt-8 mb-3" />
                  <p className="font-[var(--font-body)] text-[9px] tracking-[0.3em] text-tan/40 uppercase">
                    Emily Belt
                  </p>
                </div>
                {/* Subtle texture on book */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
                }} />
              </div>
            </div>
          </div>

          {/* Book details */}
          <div className="flex flex-col gap-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              The Book That
              <br />
              <span className="text-terracotta">Changes Everything</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              This isn&apos;t just another business book. It&apos;s a blueprint for
              building a life that honors God &mdash; as an entrepreneur, a mother,
              and a woman who refuses to sacrifice her peace for productivity.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-4 my-2">
              {[
                "A faith-first framework for entrepreneurship and life",
                "Practical tools for balancing ambition, family, and rest",
                "Real stories from women navigating business and motherhood",
                "Biblical strategies for anxiety, fear, and burnout",
                "A 30-day action plan to launch with purpose and peace",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-[var(--font-body)] text-sm text-charcoal/70">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-warm-cream font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-charcoal/80 transition-all duration-300"
              >
                PREORDER NOW
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-charcoal hover:text-warm-cream transition-all duration-300"
              >
                READ A SAMPLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
