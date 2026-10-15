import React from 'react';

export default function SectionDivider({ accent = 'indigo' }) {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6 overflow-hidden pointer-events-none select-none"
    >
      {/* Central atmospheric soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-8 bg-gradient-to-r from-cyan-500/10 via-indigo-500/15 to-purple-500/10 blur-xl rounded-full opacity-70" />

      {/* The 1px animated gradient line */}
      <div className="relative flex items-center justify-center">
        <div className="w-full h-[1px] animated-gradient-divider" />
        
        {/* Subtle geometric jewel point in the center */}
        <div className="absolute w-2 h-2 rotate-45 bg-[#06080d] border border-indigo-400/50 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.4)]">
          <div className="w-0.5 h-0.5 rounded-full bg-cyan-300" />
        </div>
      </div>
    </div>
  );
}
