import React from 'react';
import { Clock, MapPin, Star, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { TravelPackage } from '../types';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, index, onSelectPackage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#111716] border border-white/10 hover:border-[#D9C7A2]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Package Header Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111716] via-transparent to-black/30" />

        {/* Floating Badge */}
        {pkg.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#D9C7A2] text-[#0B0F0E] shadow-md">
            {pkg.badge}
          </span>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full glass-pill flex items-center gap-1.5 text-xs text-white">
          <Star className="w-3.5 h-3.5 text-[#D9C7A2] fill-[#D9C7A2]" />
          <span>{pkg.rating.toFixed(2)}</span>
          <span className="text-white/60 text-[10px]">({pkg.reviewsCount})</span>
        </div>
      </div>

      {/* Package Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-xs text-[#B8BFBB] font-mono">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D9C7A2]" />
              {pkg.duration}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D9C7A2]" />
              {pkg.country}
            </span>
          </div>

          <h3 className="text-xl font-serif text-white tracking-tight font-normal group-hover:text-[#D9C7A2] transition-colors">
            {pkg.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#B8BFBB] leading-relaxed line-clamp-2 font-light">
            {pkg.description}
          </p>
        </div>

        {/* Inclusions List Preview */}
        <div className="space-y-1.5 pt-2 border-t border-white/10">
          {pkg.included.slice(0, 2).map((inc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-white/80">
              <Check className="w-3.5 h-3.5 text-[#D9C7A2] shrink-0" />
              <span className="truncate">{inc}</span>
            </div>
          ))}
        </div>

        {/* Footer with Price & View Package Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[#B8BFBB] uppercase tracking-wider block font-mono">
              Starting from
            </span>
            <span className="text-xl font-serif font-medium text-white">
              ${pkg.price.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => onSelectPackage(pkg)}
            className="px-4 py-2 rounded-full glass-button text-xs font-medium text-white group-hover:bg-[#D9C7A2] group-hover:text-[#0B0F0E] group-hover:border-[#D9C7A2] transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Package</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
