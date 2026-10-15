import React from 'react';
import { Server, Code, ShoppingCart, Database, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Skills() {
  const { skillGroups } = portfolioData;

  const groupIcons = {
    backend: <Server className="w-5 h-5 text-indigo-400" />,
    frontend: <Code className="w-5 h-5 text-blue-400" />,
    shopify: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
    database: <Database className="w-5 h-5 text-sky-400" />,
    cloud: <Cloud className="w-5 h-5 text-violet-400" />,
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Skills & Technology Stack
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive overview of the languages, frameworks, APIs, and cloud infrastructure I use to build scalable products.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {groupIcons[group.id] || <Code className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.summary}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-[11px] font-mono text-slate-400 font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
