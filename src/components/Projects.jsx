import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Layers, Sparkles } from 'lucide-react';
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
    <section id="projects" className="py-24 relative border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Engineered for Production
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Selected Shopify applications, high-volume data feeds, and multi-tenant management systems built with modern stacks.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed per constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800/80 self-start md:self-auto shrink-0">
            {filters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
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
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-blue-950/10"
            >
              <div>
                {/* Visual Preview Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 backdrop-blur-md text-[11px] font-mono text-blue-300">
                    {project.category}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-white bg-blue-600/90 rounded-md shadow backdrop-blur-sm">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white font-display mb-1.5 cursor-pointer hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-slate-400 font-medium mb-4 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="space-y-2 text-xs text-slate-300 mb-6">
                    <div>
                      <span className="text-slate-400 font-semibold">Challenge: </span>
                      <span className="line-clamp-2">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold">Solution: </span>
                      <span className="line-clamp-2">{project.solution}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950/80 text-slate-300 border border-slate-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Buttons shown only if URLs exist, or fallback to modal details */}
              <div className="px-6 py-4 border-t border-slate-800/70 bg-slate-950/40 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white rounded transition-colors"
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
                      className="p-1.5 text-slate-400 hover:text-white rounded transition-colors"
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
