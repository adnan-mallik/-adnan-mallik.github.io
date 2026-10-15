import React from 'react';
import { ShoppingBag, Server, Layout, Network, ShieldCheck, Gauge, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Services() {
  const { services } = portfolioData;

  const icons = {
    'shopify-apps': <ShoppingBag className="w-6 h-6 text-blue-400" />,
    'laravel-backend': <Server className="w-6 h-6 text-indigo-400" />,
    'full-stack-web': <Layout className="w-6 h-6 text-sky-400" />,
    'shopify-integrations': <Network className="w-6 h-6 text-emerald-400" />,
    'admin-dashboards': <ShieldCheck className="w-6 h-6 text-violet-400" />,
    'optimization-debugging': <Gauge className="w-6 h-6 text-amber-400" />,
  };

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            What I Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Specialized Development Services
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Tailored engineering services designed to turn business requirements into fast, dependable production systems.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-slate-800 transition-all">
                  {icons[service.id] || <Server className="w-6 h-6 text-blue-400" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-display mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Inquiry trigger */}
              <div className="pt-6 mt-6 border-t border-slate-800/60">
                <button
                  type="button"
                  onClick={handleContactScroll}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Discuss Project</span>
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
