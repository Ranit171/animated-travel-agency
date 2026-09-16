import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { FEATURED_EXPERIENCES } from '../data/travelData';

interface ExperienceSectionProps {
  onOpenPlanModal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenPlanModal }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentExp = FEATURED_EXPERIENCES[activeIdx];

  return (
    <section id="experiences" className="relative py-28 md:py-36 bg-[#111716] overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9C7A2]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Storytelling Journeys</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            Journeys Designed <br className="hidden sm:inline" />
            <span className="italic">Around You</span>
          </h2>

          <p className="text-base sm:text-lg text-[#B8BFBB] font-light max-w-2xl mx-auto">
            Travel is not merely about reaching a destination—it is how the voyage reshapes your perspective.
          </p>

          {/* Experience Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {FEATURED_EXPERIENCES.map((exp, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0B0F0E] shadow-lg shadow-white/10'
                      : 'bg-white/5 text-[#B8BFBB] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {exp.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Storytelling Showcase with Overlapping Editorial Panels */}
        <div className="relative min-h-[580px] rounded-3xl overflow-hidden border border-white/15 bg-[#0B0F0E] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full min-h-[580px] lg:min-h-[620px] flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-14"
            >
              {/* Cinematic Full-Bleed Photograph with Subtle Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  src={currentExp.image}
                  alt={currentExp.title}
                  className="w-full h-full object-cover filter brightness-[0.85]"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>

              {/* Overlapping Content Box (Desktop Left-Aligned Glass Panel) */}
              <div className="relative z-10 max-w-xl lg:max-w-2xl flex flex-col space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#D9C7A2] font-mono">
                    Featured Collection
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
                    {currentExp.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 font-serif italic">
                    "{currentExp.tagline}"
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#B8BFBB] leading-relaxed font-light">
                  {currentExp.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 pt-2">
                  {currentExp.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/95">
                      <CheckCircle2 className="w-4 h-4 text-[#D9C7A2] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Statistics Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
                  {currentExp.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xl sm:text-2xl font-serif text-white font-medium">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-[#B8BFBB] uppercase tracking-wider font-mono">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <button
                    onClick={onOpenPlanModal}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#D9C7A2] text-[#0B0F0E] text-xs sm:text-sm font-medium hover:bg-[#EFE6D2] transition-all duration-300 shadow-lg shadow-[#D9C7A2]/20 active:scale-95 cursor-pointer"
                  >
                    <span>Customize This Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
