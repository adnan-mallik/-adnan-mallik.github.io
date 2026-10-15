import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, experience, skillGroups, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `ADNAN MALIK
${personal.title}
Email: ${personal.email}
LinkedIn: ${personal.linkedin}
Location: ${personal.location}

==================================================
PROFESSIONAL SUMMARY
==================================================
${portfolioData.about.paragraphs.join('\n\n')}

==================================================
TECHNICAL COMPETENCIES
==================================================
${skillGroups
  .map(
    (g) => `${g.title.toUpperCase()}:
${g.skills.map((s) => `  - ${s.name} (${s.level})`).join('\n')}`
  )
  .join('\n\n')}

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${experience
  .map(
    (e) => `${e.company} - ${e.role}
Role Level: ${e.period} | Location: ${e.location}
Responsibilities:
${e.responsibilities.map((r) => `  * ${r}`).join('\n')}`
  )
  .join('\n\n')}

==================================================
FEATURED PROJECTS
==================================================
${projects
  .map(
    (p) => `${p.title} (${p.category})
${p.subtitle}
Stack: ${p.technologies.join(', ')}
Problem: ${p.problem}
Solution: ${p.solution}`
  )
  .join('\n\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Adnan_Malik_Senior_FullStack_Developer_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06080d]/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#0c101a] border border-white/[0.1] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/[0.08] bg-[#0c101a]/95 sticky top-0 z-20 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <h3 id="cv-modal-title" className="text-base sm:text-lg font-bold text-white font-display text-gradient-silver">
              Curriculum Vitae — Adnan Malik
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/[0.08] transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)] cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-xl transition-colors ml-2 cursor-pointer"
              aria-label="Close CV dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable CV Body */}
        <div id="printable-cv" className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 text-xs sm:text-sm bg-[#080b13]">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display text-gradient-silver">
              Adnan Malik
            </h1>
            <p className="text-sm font-semibold text-gradient-accent mt-1">
              Senior Full-Stack Developer | Shopify App Developer | Laravel &amp; React Specialist
            </p>
            <div className="mt-3.5 flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300">
                  linkedin.com/in/adnan-mallik
                </a>
              </span>
              <span>·</span>
              <span className="text-slate-300 font-medium">6+ Years Experience</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/[0.06] pb-1.5">
              Professional Summary
            </h2>
            <p className="text-slate-300/90 leading-relaxed text-xs sm:text-sm">
              Full-Stack Developer with 6+ years of experience building scalable web applications, Shopify apps, custom e-commerce solutions, and business management systems. Deep specialization in Laravel, PHP, React.js, Remix, Shopify APIs, REST APIs, GraphQL, and MySQL. Proven track record of turning complex business requirements into high-performance, fault-tolerant production digital products.
            </p>
          </section>

          {/* Technical Competencies */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/[0.06] pb-1.5">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillGroups.map((g) => (
                <div key={g.id} className="p-3.5 rounded-xl bg-[#0c101a] border border-white/[0.06]">
                  <div className="font-bold text-white mb-1">{g.title}</div>
                  <div className="text-slate-400">
                    {g.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/[0.06] pb-1.5">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white">{exp.company}</span>
                      <span className="text-cyan-400"> — {exp.role}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-xs">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300/90 pl-4 list-disc marker:text-indigo-400">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Featured Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/[0.06] pb-1.5">
              Featured Production Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#0c101a] border border-white/[0.06]">
                  <div className="font-bold text-white mb-0.5">{proj.title}</div>
                  <div className="text-slate-400 text-[11px] mb-1.5">{proj.subtitle}</div>
                  <div className="text-cyan-400 font-mono text-[11px]">
                    {proj.technologies.slice(0, 4).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
