"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";

const navLinks = [
  { label: "TODAY.", href: "/today" },
  { label: "JOURNAL.", href: "/journal" },
  { label: "BIBLE STUDY.", href: "/bible-study" },
];

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-shadow duration-500 bg-charcoal ${
        scrolled ? "shadow-lg shadow-charcoal/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/today" className="flex items-center gap-3 group">
            <span className="font-[var(--font-heading)] text-2xl font-bold tracking-wider text-warm-cream">
              B.B.B
            </span>
            <span className="hidden sm:block w-px h-6 bg-tan/40" />
            <span className="hidden sm:block font-[var(--font-accent)] text-sm tracking-widest text-tan uppercase">
              Daily Devotional
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[var(--font-body)] text-[11px] font-semibold tracking-[0.2em] text-warm-cream/80 hover:text-terracotta transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            {isLoaded && isSignedIn ? (
              <UserButton />
            ) : isLoaded ? (
              <Link
                href="/sign-in"
                className="font-[var(--font-body)] text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-cream/80 hover:text-terracotta"
              >
                Sign in
              </Link>
            ) : null}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-warm-cream transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-warm-cream transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-warm-cream transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-charcoal/98 backdrop-blur-md border-t border-tan/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-[var(--font-body)] text-sm font-semibold tracking-[0.25em] text-warm-cream/80 hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
