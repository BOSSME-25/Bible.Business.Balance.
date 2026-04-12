export default function MissionSection() {
  return (
    <section id="mission" className="relative bg-off-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Decorative banner strip */}
        <div className="relative bg-charcoal py-6 px-8 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
          }} />
          <p className="relative font-[var(--font-heading)] text-lg sm:text-xl lg:text-2xl text-warm-cream text-center tracking-wide">
            Scripture &amp; Strategy. Obedience &amp; Execution. Faith &amp; Flow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-tan" />
            <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
              The Mission
            </span>
            <div className="w-12 h-[1px] bg-tan" />
          </div>

          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-8">
            Building Kingdom Businesses<br />
            <span className="text-terracotta">with Purpose &amp; Power</span>
          </h2>

          <p className="font-[var(--font-accent)] text-lg sm:text-xl text-charcoal/70 leading-relaxed mb-6">
            I don&apos;t just run my business,I lead it by faith. Before the
            strategy, I seek Scripture. Before the marketing, I ask for wisdom.
            God is not just Lord of my spiritual life. He&apos;s Lord over the
            vision, revenue, and reach of my business too. This is what it means
            to lead from the inside out.
          </p>

          <p className="font-[var(--font-accent)] text-lg sm:text-xl text-charcoal/70 leading-relaxed mb-10">
            Bible, Business &amp; Balance exists for the woman who leads with
            prayer, fuels her body with purpose, and refuses to sacrifice her
            peace for productivity. Wellness is leadership. Balance isn&apos;t a
            luxury,it&apos;s a strategy. And God doesn&apos;t bless
            scattered hustle,He blesses ordered obedience.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-charcoal hover:text-warm-cream transition-all duration-300 group"
          >
            LEARN MORE
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

      {/* Decorative botanical corners */}
      <svg className="absolute top-8 left-8 w-20 h-20 text-tan/10" viewBox="0 0 80 80" fill="none">
        <path d="M10 70 C10 30, 30 10, 70 10" stroke="currentColor" strokeWidth="1" />
        <path d="M15 65 C15 35, 35 15, 65 15" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="12" cy="68" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-20 h-20 text-tan/10 rotate-180" viewBox="0 0 80 80" fill="none">
        <path d="M10 70 C10 30, 30 10, 70 10" stroke="currentColor" strokeWidth="1" />
        <path d="M15 65 C15 35, 35 15, 65 15" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="12" cy="68" r="2" fill="currentColor" />
      </svg>
    </section>
  );
}
