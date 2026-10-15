import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Hero({ onOpenCv }) {
  const { personal, credibilityHighlights, compactTechStack } = portfolioData;

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glow & grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            {personal.availableForHire && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-medium tracking-wide">{personal.availabilityBadgeText}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] text-balance">
              Building Scalable{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Web Applications
              </span>{' '}
              & Shopify Experiences.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
              {personal.hero.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-98 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>{personal.hero.primaryCta.text}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 active:scale-98 cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{personal.hero.secondaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Compact Tech Stack Display */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Primary Tech Stack</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                {compactTechStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor (Developer Portrait & Architecture Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Decorative gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 to-indigo-600/20 rounded-2xl blur-lg opacity-75" />

              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 overflow-hidden shadow-2xl p-3">
                {/* Developer Portrait Image with Fallback */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={personal.avatar}
                    alt="Adnan Malik - Senior Full-Stack & Shopify Developer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle contrast gradient at bottom of portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* In-image title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                    <div className="text-sm font-bold text-white font-display">Adnan Malik</div>
                    <div className="text-xs text-blue-400 font-medium">Senior Full-Stack & Shopify Specialist</div>
                  </div>
                </div>

                {/* Subtle meta bar */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Laravel · React · Shopify</span>
                  <span className="text-slate-500">6+ YOE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Credibility Highlights Strip (Below the Split) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {credibilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700/80 transition-colors"
              >
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">
                  {item.label}
                </div>
                <div className="text-2xl font-bold text-white font-display tracking-tight mb-1 tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
