const navLinks = [
  { label: "HOME.", href: "#" },
  { label: "ABOUT.", href: "#about" },
  { label: "SPEAKING.", href: "#mission" },
  { label: "PODCAST.", href: "#podcast" },
  { label: "BOOK.", href: "#book" },
  { label: "BLOG.", href: "#blog" },
  { label: "CONTACT.", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="font-[var(--font-heading)] text-2xl text-warm-cream mb-2">
              Bible, Business
            </h3>
            <h3 className="font-[var(--font-heading)] text-2xl text-terracotta mb-6">
              &amp; Balance
            </h3>
            <p className="font-[var(--font-accent)] text-sm text-warm-cream/40 leading-relaxed max-w-xs">
              A faith-centered community for women entrepreneurs who are building
              Kingdom businesses with purpose, power, and balance. Word grounded.
              Gospel-driven. God-glorifying.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-1">
            <h4 className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.35em] text-tan uppercase mb-6">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[var(--font-body)] text-xs tracking-[0.15em] text-warm-cream/40 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div className="md:col-span-1">
            <h4 className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.35em] text-tan uppercase mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-warm-cream/5 flex items-center justify-center hover:bg-terracotta/20 transition-colors">
                  <svg className="w-4 h-4 text-warm-cream/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-warm-cream/5 flex items-center justify-center hover:bg-terracotta/20 transition-colors">
                  <svg className="w-4 h-4 text-warm-cream/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" aria-label="TikTok" className="w-10 h-10 bg-warm-cream/5 flex items-center justify-center hover:bg-terracotta/20 transition-colors">
                  <svg className="w-4 h-4 text-warm-cream/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48 6.3 6.3 0 001.86-4.49V8.74a8.26 8.26 0 004.72 1.48V6.79a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
              <p className="font-[var(--font-body)] text-xs text-warm-cream/30">
                msemily20@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-body)] text-[10px] tracking-[0.1em] text-warm-cream/20">
            &copy; {new Date().getFullYear()} Bible, Business &amp; Balance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-[var(--font-body)] text-[10px] tracking-[0.1em] text-warm-cream/20 hover:text-warm-cream/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-[var(--font-body)] text-[10px] tracking-[0.1em] text-warm-cream/20 hover:text-warm-cream/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
