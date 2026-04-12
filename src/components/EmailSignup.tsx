"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="relative bg-terracotta py-20 lg:py-28 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto bg-warm-cream/10 rounded-full flex items-center justify-center mb-8">
          <svg className="w-8 h-8 text-warm-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>

        <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-warm-cream leading-tight mb-4">
          Get Your Free Resource
        </h2>

        <p className="font-[var(--font-accent)] text-lg text-warm-cream/80 leading-relaxed mb-4 max-w-xl mx-auto">
          Get the free &ldquo;Boss Fuel Blueprint&rdquo; &mdash; my personal
          framework for leading with prayer, plants, and purpose. Plus, weekly
          devotionals, business strategy, and wellness wisdom straight to your inbox.
        </p>

        <p className="font-[var(--font-body)] text-xs text-warm-cream/50 mb-8">
          No spam. No fluff. Just real talk and real tools.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-warm-cream/10 border border-warm-cream/20 text-warm-cream placeholder:text-warm-cream/40 font-[var(--font-body)] text-sm tracking-wide focus:outline-none focus:border-warm-cream/50 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-charcoal text-warm-cream font-[var(--font-body)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-charcoal/80 transition-all duration-300 whitespace-nowrap"
          >
            SEND IT TO ME
          </button>
        </form>

        <p className="font-[var(--font-body)] text-[10px] text-warm-cream/30 mt-4">
          By subscribing, you agree to receive emails from Bible, Business &amp; Balance.
          Unsubscribe anytime.
        </p>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-8 left-8 grid grid-cols-4 gap-2 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-warm-cream" />
        ))}
      </div>
      <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-warm-cream" />
        ))}
      </div>
    </section>
  );
}
