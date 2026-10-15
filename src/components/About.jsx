import React from 'react';
import { ShoppingBag, Server, Layout, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function About() {
  const { about } = portfolioData;

  const icons = [
    <ShoppingBag key="shop" className="w-5 h-5 text-blue-400" />,
    <Server key="srv" className="w-5 h-5 text-indigo-400" />,
    <Layout key="lay" className="w-5 h-5 text-sky-400" />,
    <Zap key="zap" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            {about.heading}
          </h2>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300">
                {p}
              </p>
            ))}

            {/* Quick Principles Checklist */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Reliable Architecture First:</strong> Avoiding quick hacks in favor of maintainable schemas and predictable service layers.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">API-Driven Design:</strong> Strict contract definitions with REST & GraphQL for smooth multi-platform integration.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Merchant & User Centricity:</strong> Building apps that reduce friction, automate workflows, and drive measurable revenue.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Expertise Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Core Engineering Focus
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.expertisePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-slate-800/80 border border-slate-700/60 mb-4 group-hover:scale-105 transition-transform">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="text-base font-semibold text-white font-display mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
