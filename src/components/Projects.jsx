import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'shopify', label: 'Shopify Apps' },
    { id: 'saas', label: 'Full-Stack & SaaS' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'shopify') return project.category.toLowerCase().includes('shopify');
    if (activeFilter === 'saas') return !project.category.toLowerCase().includes('shopify');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#070911]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>03 / FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
              Production Applications
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Selected Shopify applications, automated synchronization engines, and multi-tenant management systems built for commercial scale.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0c101a] rounded-2xl border border-white/[0.08] shadow-inner self-start md:self-auto shrink-0">
            {filters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0c101a]/80 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.15)] relative"
            >
              {/* Top hairline specular accent */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-cyan-400/60 transition-colors z-10" />

              <div>
                {/* Visual Preview Container with Browser Bar Chrome */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer border-b border-white/[0.06]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-70" />

                  {/* Browser decorative dots in top-right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#06080d]/80 border border-white/[0.08] backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#06080d]/85 border border-indigo-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300 shadow-sm">
                    {project.category}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] backdrop-blur-md">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white font-display mb-1.5 cursor-pointer hover:text-cyan-300 transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-indigo-300/90 font-medium mb-4 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="space-y-2 text-xs text-slate-300/90 mb-6">
                    <div>
                      <span className="text-slate-400 font-semibold">Challenge: </span>
                      <span className="line-clamp-2">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400/90 font-semibold">Solution: </span>
                      <span className="line-clamp-2">{project.solution}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-[#080b13] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-[#080b13] rounded-lg border border-white/[0.04]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/[0.06] bg-[#080b13]/60 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.sourceCodeUrl && (
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
