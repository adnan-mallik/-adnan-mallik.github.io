import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>04 / CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A verified timeline of engineering mission-critical Shopify applications, high-throughput Laravel APIs, and distributed architectures.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Node Indicator with Glowing Core */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#06080d] border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.6)]">
                {idx === 0 && (
                  <span className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping opacity-75" />
                )}
              </div>

              {/* Experience Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0c101a]/80 border border-white/[0.07] hover:border-indigo-500/35 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Top specular hairline */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-cyan-400/50 transition-colors" />

                {/* Header Lockup */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display tracking-tight">
                      {item.company}
                    </h3>
                    <div className="text-sm font-semibold text-gradient-accent mt-0.5">
                      {item.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080b13] border border-white/[0.05]">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080b13] border border-white/[0.05]">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bulleted Responsibilities */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300/90 pt-4 border-t border-white/[0.06]">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
