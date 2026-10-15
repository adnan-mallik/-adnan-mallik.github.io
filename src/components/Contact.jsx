import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Project Inquiry from ${name || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Adnan,\n\n${message || 'I would like to discuss a project with you.'}\n\nBest regards,\n${name || 'Client'}`
    );
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>06 / GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
                {contact.subheading}
              </p>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0c101a]/80 border border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.5)] space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct Inquiries</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to your clipboard!</span>
                </div>
              )}
            </div>

            {/* Social Network Cards */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Professional Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0c101a]/70 border border-white/[0.07] hover:border-indigo-500/40 hover:bg-[#101524] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">LinkedIn</div>
                      <div className="text-[11px] text-slate-400 font-mono">adnan-mallik</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0c101a]/70 border border-white/[0.07] hover:border-indigo-500/40 hover:bg-[#101524] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-white/[0.05] text-slate-200 border border-white/[0.08]">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">GitHub</div>
                        <div className="text-[11px] text-slate-400 font-mono">adnan-malik</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0c101a]/90 border border-white/[0.09] shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

              <div className="flex items-center gap-2 mb-6 text-sm font-bold text-white font-display">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Compose Project Brief (Opens Native Mail App)</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#080b13] border border-white/[0.08] text-white placeholder-slate-400 text-sm focus-visible:border-indigo-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="inquiry-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Shopify App Project / Consultation"
                      className="w-full px-4 py-3 rounded-xl bg-[#080b13] border border-white/[0.08] text-white placeholder-slate-400 text-sm focus-visible:border-indigo-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Scope &amp; Deliverables
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you're looking to build (e.g. Shopify app features, Laravel backend scope, timeline, etc.)..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080b13] border border-white/[0.08] text-white placeholder-slate-400 text-sm focus-visible:border-indigo-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-400">
                    Direct client dispatch to <span className="text-cyan-300 font-mono">{contact.email}</span>.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] active:scale-95 shrink-0 cursor-pointer"
                  >
                    <span>Open Email App</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
