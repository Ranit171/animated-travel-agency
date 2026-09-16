import React from 'react';
import { Sparkles } from 'lucide-react';
import { BRAND_BENEFITS, WHY_US_SECTION_DATA } from '../data/travelData';
import { BenefitCard } from './BenefitCard';

export const WhyWanderlySection: React.FC = () => {
  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-[#0B0F0E] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{WHY_US_SECTION_DATA.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            {WHY_US_SECTION_DATA.titleMain} <br className="hidden sm:inline" />
            <span className="italic">{WHY_US_SECTION_DATA.titleSub}</span>
          </h2>

          <p className="text-base sm:text-lg text-[#B8BFBB] font-light">
            {WHY_US_SECTION_DATA.description}
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.number} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
