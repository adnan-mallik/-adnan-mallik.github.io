import React from 'react';
import { portfolioData } from '../data/portfolio.js';

export default function WhatsAppButton() {
  const { personal, contact } = portfolioData;
  const phoneNumber = personal.whatsapp || contact.whatsapp || '+923226411283';
  const message = personal.whatsappMessage || contact.whatsappMessage || 'Hi Adnan, I would like to discuss a project with you.';

  // Strip non-numeric characters for wa.me link
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-20 h-20 sm:w-[88px] sm:h-[88px] flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]"
        aria-label="Chat on WhatsApp (+92 322 6411283)"
      >
        {/* Ambient background glow aura */}
        <span
          aria-hidden="true"
          className="absolute inset-2 rounded-full bg-emerald-500/30 blur-lg group-hover:bg-emerald-500/50 transition-all duration-300 pointer-events-none"
        />

        {/* Circular SVG Rotating Text Border ("CHAT ON WHATSAPP") */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_12s_linear_infinite] group-hover:[animation-duration:6s] motion-reduce:animate-none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {/* Subtle guide ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Path for text to wrap circularly around */}
          <path
            id="whatsappTextPath"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />

          {/* Curved Text around the circle */}
          <text className="text-[8.5px] uppercase tracking-[0.24em] font-mono font-bold fill-emerald-400 group-hover:fill-emerald-300 transition-colors">
            <textPath href="#whatsappTextPath" startOffset="0%">
              • CHAT ON WHATSAPP • CHAT ON WHATSAPP •
            </textPath>
          </text>
        </svg>

        {/* Center Circular Button with WhatsApp Icon Only */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-emerald-500 via-emerald-600 to-green-600 flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.55)] group-hover:shadow-[0_6px_28px_rgba(16,185,129,0.8)] group-hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30 z-10">
          {/* Official WhatsApp Vector Icon */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Live pulsing online beacon */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-xs" />
          </span>
        </div>
      </a>
    </aside>
  );
}
