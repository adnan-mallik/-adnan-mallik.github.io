import React from 'react';
import { Server, Code, ShoppingCart, Database, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Skills() {
  const { skillGroups } = portfolioData;

  const groupTheme = {
    backend: {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      tagBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    },
    frontend: {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      tagBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    },
    shopify: {
      icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
      tagBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    },
    database: {
      icon: <Database className="w-5 h-5 text-violet-400" />,
      tagBg: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    },
    cloud: {
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      tagBg: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>02 / TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive breakdown of the backend frameworks, e-commerce APIs, reactive client libraries, and cloud infrastructure I engineer with daily.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const theme = groupTheme[group.id] || {
              icon: <Code className="w-5 h-5 text-indigo-400" />,
              tagBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
            };

            return (
              <div
                key={group.id}
                className="relative p-6 rounded-2xl bg-[#0c101a]/80 border border-white/[0.07] hover:border-indigo-500/35 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] group overflow-hidden"
              >
                {/* Subtle top gradient hairline */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-indigo-500/40 transition-colors" />

                <div>
                  {/* Header with Icon */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-inner group-hover:scale-105 transition-transform">
                      {theme.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.summary}
                  </p>

                  {/* Skill Items List */}
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#080b13]/80 border border-white/[0.05] hover:border-white/[0.1] text-xs transition-colors"
                      >
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                            skill.level === 'Expert'
                              ? 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300'
                              : skill.level === 'Advanced'
                              ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300'
                              : 'bg-slate-500/10 border-slate-500/20 text-slate-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
