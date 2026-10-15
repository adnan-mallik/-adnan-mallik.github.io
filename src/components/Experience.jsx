import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A track record of engineering Shopify apps, robust Laravel backends, and maintainable full-stack products.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:scale-125 group-hover:border-blue-400 transition-all duration-200" />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                {/* Header Lockup */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {item.company}
                    </h3>
                    <div className="text-sm font-semibold text-blue-400">
                      {item.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bulleted Responsibilities */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-3 border-t border-slate-800/60">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
