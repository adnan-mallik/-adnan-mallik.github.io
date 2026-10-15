import React from 'react';
import { ShoppingBag, Server, Layout, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function About() {
  const { about } = portfolioData;

  const icons = [
    <ShoppingBag key="shop" className="w-5 h-5 text-cyan-400" />,
    <Server key="srv" className="w-5 h-5 text-indigo-400" />,
    <Layout key="lay" className="w-5 h-5 text-violet-400" />,
    <Zap key="zap" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-20 relative bg-[#070911]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 / ABOUT ADNAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
            {about.heading}
          </h2>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300/90 font-normal">
                {p}
              </p>
            ))}

            {/* Quick Principles Checklist */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0c101a]/60 border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white">Reliable Architecture First:</strong> Avoiding quick hacks in favor of maintainable schemas and predictable service layers.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0c101a]/60 border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white">API-Driven Design:</strong> Strict contract definitions with REST & GraphQL for smooth multi-platform integration.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0c101a]/60 border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white">Merchant &amp; User Centricity:</strong> Building apps that reduce friction, automate workflows, and drive measurable revenue.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Expertise Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <span>Core Architectural Strengths</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.expertisePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c101a]/80 border border-white/[0.07] hover:border-indigo-500/35 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 w-fit rounded-xl bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 border border-white/[0.08] mb-4 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                      {icons[idx % icons.length]}
                    </div>
                    <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
