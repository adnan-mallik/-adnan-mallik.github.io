import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
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
      {/* Premium Multi-Layer Aurora Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-blue-600/10 to-violet-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Availability Badge */}
            {personal.availableForHire && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-medium tracking-wide text-[11px] sm:text-xs">
                  {personal.availabilityBadgeText}
                </span>
              </div>
            )}

            {/* Main Headline with Metallic & Electric Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.08] text-balance">
              <span className="text-gradient-silver">Building Scalable </span>
              <br className="hidden sm:inline" />
              <span className="text-gradient-accent">
                Web Applications
              </span>
              <span className="text-gradient-silver"> &amp; Shopify Experiences.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl text-balance font-normal">
              {personal.hero.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] active:scale-98 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>{personal.hero.primaryCta.text}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/20 rounded-xl transition-all duration-300 active:scale-98 cursor-pointer backdrop-blur-md focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{personal.hero.secondaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Compact Tech Stack Display */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Production Stack</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {compactTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#0e121c]/90 border border-white/[0.07] text-slate-300 hover:text-white hover:border-indigo-500/30 font-mono transition-colors shadow-xs"
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
              {/* Outer decorative aurora aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/25 via-indigo-600/30 to-purple-600/25 rounded-3xl blur-xl opacity-80" />

              <div className="relative rounded-2xl bg-[#0c101a]/90 border border-white/[0.1] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-3 backdrop-blur-xl">
                {/* Developer Portrait Image with Fallback */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={personal.avatar}
                    alt="Adnan Malik - Senior Full-Stack & Shopify Developer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Contrast gradient at bottom of portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-80" />

                  {/* In-image title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0c101a]/90 border border-white/[0.1] backdrop-blur-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white font-display">Adnan Malik</div>
                        <div className="text-xs text-gradient-accent font-semibold">
                          Senior Full-Stack &amp; Shopify Specialist
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-mono text-indigo-300">
                        6+ YOE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle meta bar */}
                <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Shopify · Laravel · React</span>
                  </span>
                  <span className="text-slate-400">Remote Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Credibility Highlights Strip (Below the Split) */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {credibilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#0c101a]/70 border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group overflow-hidden"
              >
                {/* Subtle top specular accent line */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-cyan-400/50 transition-colors" />

                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-1.5">
                  {item.label}
                </div>
                <div className="text-2xl font-extrabold text-white font-display tracking-tight mb-1.5 tabular-nums text-gradient-silver">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-normal">
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
