import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the Hero element height or default to 450px threshold
      const heroEl = document.getElementById('hero');
      const threshold = heroEl ? heroEl.offsetHeight - 120 : 450;
      
      // Also optionally hide if user is already right at the contact section bottom
      const contactEl = document.getElementById('contact');
      let nearContactEnd = false;
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        // If contact section is mostly in view, we can keep it or hide it; keeping it with subtle opacity is great
      }

      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Section Navigation"
      className="fixed bottom-[104px] right-6 z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      {/* Subtle pulsing outer glow ring */}
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 opacity-60 blur-md pointer-events-none" />

      <button
        type="button"
        onClick={scrollToContact}
        className="relative group flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold shadow-[0_4px_25px_rgba(99,102,241,0.5)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.7)] active:scale-95 transition-all duration-200 cursor-pointer border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        aria-label="Scroll to contact section"
      >
        {/* Glowing live beacon dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
        </span>

        <span className="tracking-wide font-medium whitespace-nowrap">Contact Me</span>

        <MessageSquare className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
      </button>
    </aside>
  );
}
