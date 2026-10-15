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
      // Fallback
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
    <section id="contact" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                {contact.subheading}
              </p>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 font-medium">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Social Network Cards */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Professional Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-850 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-900/30 text-blue-400 border border-blue-800/50">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-400">adnan-mallik</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-850 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">GitHub</div>
                        <div className="text-[11px] text-slate-400">adnan-malik</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer (Launches Default Email Client) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white font-display">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Compose Project Brief (Opens Your Default Mail App)</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-400 text-sm focus-visible:border-blue-500 focus-visible:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="inquiry-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Shopify App Project / Consultation"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-400 text-sm focus-visible:border-blue-500 focus-visible:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Details & Scope
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you're looking to build (e.g. Shopify app features, Laravel backend scope, timeline, etc.)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-400 text-sm focus-visible:border-blue-500 focus-visible:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[11px] text-slate-400">
                    No backend server needed — generates a direct email prompt to <span className="text-slate-300 font-mono">{contact.email}</span>.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/25 active:scale-95 shrink-0 cursor-pointer"
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
