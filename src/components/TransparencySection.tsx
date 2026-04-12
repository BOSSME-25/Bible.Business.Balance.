export default function TransparencySection() {
  return (
    <section className="relative bg-warm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-terracotta" />
              <span className="font-[var(--font-body)] text-[10px] tracking-[0.35em] text-gold-muted uppercase">
                What to Expect
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Radical
              <br />
              <span className="text-terracotta">Transparency</span>
            </h2>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              I&apos;m not just trying to do more,I&apos;m trying to do it well,
              with peace, power, and alignment. My wellness is the foundation of
              my leadership. When I honor my temple, I honor my calling. When I
              protect my peace, I lead with purpose. When I nourish my body, I
              clear my mind.
            </p>

            <p className="font-[var(--font-accent)] text-lg text-charcoal/70 leading-relaxed">
              This is more than self-care,this is Boss Fuel. It&apos;s praying,
              stewarding, nourishing, and leading from a place of overflow, not
              empty. As the CEO of my home and my business, I&apos;ve learned: if I
              don&apos;t fuel well, I can&apos;t lead well. And I&apos;m not just
              leading for me,I&apos;m leading for legacy.
            </p>

            {/* Decorative scripture reference */}
            <div className="mt-4 pl-6 border-l-2 border-terracotta/40">
              <p className="font-[var(--font-accent)] text-base italic text-charcoal/50">
                &ldquo;The leaves of the tree are for the healing of the nations.&rdquo;
              </p>
              <p className="font-[var(--font-body)] text-[10px] tracking-[0.2em] text-gold-muted uppercase mt-2">
                Revelation 22:2
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#e8ddd0] via-[#d4c4b0] to-[#c9b99a] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/30 flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-charcoal/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="font-[var(--font-accent)] text-charcoal/30 text-lg italic">Lifestyle Photo</p>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-charcoal/10" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-terracotta/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
