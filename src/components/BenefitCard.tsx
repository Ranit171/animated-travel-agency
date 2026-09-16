import React from 'react';
import { Compass, ShieldCheck, Sliders, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { BrandBenefit } from '../types';

interface BenefitCardProps {
  benefit: BrandBenefit;
  index: number;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#D9C7A2]";
    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Sliders':
        return <Sliders className={iconClass} />;
      case 'Headphones':
        return <Headphones className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 rounded-2xl bg-[#111716] border border-white/10 hover:border-[#D9C7A2]/40 transition-all duration-300 relative group flex flex-col justify-between space-y-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D9C7A2]/10 group-hover:border-[#D9C7A2]/30 transition-colors">
          {renderIcon(benefit.iconName)}
        </div>
        <span className="text-2xl font-serif text-[#B8BFBB]/30 group-hover:text-[#D9C7A2]/60 transition-colors font-light">
          {benefit.number}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-serif text-white font-normal group-hover:text-[#D9C7A2] transition-colors">
          {benefit.title}
        </h3>
        <p className="text-sm text-[#B8BFBB] leading-relaxed font-light">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};
