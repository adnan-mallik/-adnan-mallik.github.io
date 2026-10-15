import React from 'react';
import { ShoppingBag, Server, Layout, Network, ShieldCheck, Gauge, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Services() {
  const { services } = portfolioData;

  const icons = {
    'shopify-apps': <ShoppingBag className="w-6 h-6 text-cyan-400" />,
    'laravel-backend': <Server className="w-6 h-6 text-indigo-400" />,
    'full-stack-web': <Layout className="w-6 h-6 text-violet-400" />,
    'shopify-integrations': <Network className="w-6 h-6 text-emerald-400" />,
    'admin-dashboards': <ShieldCheck className="w-6 h-6 text-sky-400" />,
    'optimization-debugging': <Gauge className="w-6 h-6 text-amber-400" />,
  };

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative bg-[#070911]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>05 / CAPABILITIES &amp; SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance text-gradient-silver">
            Specialized Engineering Services
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Tailored engineering capabilities built to convert complex technical requirements into dependable, fast production systems.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#0c101a]/80 border border-white/[0.07] hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(99,102,241,0.15)] relative overflow-hidden"
            >
              {/* Top hairline highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-400/50 transition-colors" />

              <div>
                {/* Service Icon with soft glowing aura */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all shadow-inner">
                  {icons[service.id] || <Server className="w-6 h-6 text-cyan-400" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-display mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Inquiry trigger */}
              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={handleContactScroll}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                >
                  <span>Discuss Requirements</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
