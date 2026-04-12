export default function TestimonialSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Concrete-style textured background */}
      <div className="absolute inset-0 bg-[#2a2a2a]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
      }} />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Large quote mark */}
        <div className="font-[var(--font-heading)] text-8xl sm:text-9xl text-terracotta/20 leading-none mb-4 select-none">
          &ldquo;
        </div>

        <blockquote className="font-[var(--font-accent)] text-2xl sm:text-3xl lg:text-4xl text-warm-cream/90 leading-relaxed italic -mt-12">
          Overflow isn&apos;t random. It&apos;s rooted. I don&apos;t just pray for
          growth &mdash; I prepare for it. I build from what I know, and leave
          space for what I&apos;ll learn while walking.
        </blockquote>

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="w-12 h-[1px] bg-terracotta" />
          <p className="font-[var(--font-body)] text-sm font-semibold tracking-[0.2em] text-warm-cream/70 uppercase mt-3">
            Emily Belt
          </p>
          <p className="font-[var(--font-body)] text-xs text-tan/40">
            Faith-Fueled CEO &amp; Founder, BOSS ME
          </p>
        </div>
      </div>

      {/* Decorative side elements */}
      <svg className="absolute top-12 left-8 w-24 h-24 text-tan/5" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-12 right-8 w-24 h-24 text-tan/5" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </section>
  );
}
