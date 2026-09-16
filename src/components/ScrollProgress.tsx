import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollPercentage(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Scroll progress indicator"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-none"
    >
      <span className="text-[10px] font-mono tracking-widest text-[#B8BFBB]/60 -rotate-90 origin-center translate-y-3">
        {Math.round(scrollPercentage)}%
      </span>
      <div className="w-[2px] h-28 bg-white/10 rounded-full relative overflow-hidden backdrop-blur-sm">
        <div
          className="w-full bg-gradient-to-b from-[#D9C7A2] to-[#B8BFBB] rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-[#D9C7A2]/40 ring-2 ring-white/10" />
    </aside>
  );
};
