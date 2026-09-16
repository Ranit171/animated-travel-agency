import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CTA_SECTION_DATA } from '../data/travelData';

interface CTASectionProps {
  onOpenPlanModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPlanModal }) => {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden flex items-center justify-center bg-[#0B0F0E]">
      {/* Cinematic Full-Bleed Background with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={CTA_SECTION_DATA.image}
          alt="Atmospheric mountain lake scenery at dusk"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-transparent to-[#0B0F0E]" />
        <div className="absolute inset-0 bg-[#0B0F0E]/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono uppercase tracking-widest text-[#D9C7A2]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{CTA_SECTION_DATA.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1]"
        >
          {CTA_SECTION_DATA.titleMain} <br className="hidden sm:inline" />
          <span className="italic">{CTA_SECTION_DATA.titleSub}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#B8BFBB] max-w-2xl mx-auto font-light leading-relaxed"
        >
          {CTA_SECTION_DATA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="cta-start-planning-btn"
            onClick={onOpenPlanModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-sm md:text-base font-semibold tracking-wide transition-all duration-300 shadow-2xl shadow-[#D9C7A2]/25 hover:shadow-[#D9C7A2]/40 flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
          >
            <span>{CTA_SECTION_DATA.primaryButtonText}</span>
            <ArrowRight className="w-4 h-4 text-[#0B0F0E]" />
          </button>

          <a
            href="#destinations"
            className="w-full sm:w-auto px-7 py-4 rounded-full glass-button text-sm md:text-base font-medium text-white hover:border-white/40 transition-all flex items-center justify-center"
          >
            <span>{CTA_SECTION_DATA.secondaryButtonText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
