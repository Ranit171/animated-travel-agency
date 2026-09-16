import React from 'react';
import { X, Clock, MapPin, Star, Check, ArrowRight, Shield, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TravelPackage } from '../types';

interface PackageDetailModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
  onBookPackage: (packageName: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onBookPackage,
}) => {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#111716] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-white max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 transition-colors cursor-pointer"
            aria-label="Close package details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111716] via-[#111716]/30 to-transparent" />
            
            <div className="absolute bottom-5 left-6 right-6">
              <div className="flex items-center gap-3 text-xs text-[#D9C7A2] font-mono mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {pkg.destination}, {pkg.country}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                {pkg.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#D9C7A2]">
                  <Star className="w-4 h-4 fill-[#D9C7A2]" />
                  <span className="font-semibold text-white">{pkg.rating.toFixed(2)}</span>
                </div>
                <span className="text-xs text-[#B8BFBB]">({pkg.reviewsCount} verified travelers)</span>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#B8BFBB] uppercase tracking-wider block font-mono">From</span>
                <span className="text-xl font-serif text-white">${pkg.price.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-sm text-[#B8BFBB] leading-relaxed font-light">
              {pkg.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
                What's Included in This Expedition
              </h4>
              <div className="space-y-2">
                {pkg.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#D9C7A2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl glass-panel flex items-center gap-3 text-xs text-[#B8BFBB]">
              <Shield className="w-5 h-5 text-[#D9C7A2] shrink-0" />
              <span>Full flexible cancellation guarantee up to 21 days prior to departure. Private concierge available 24/7.</span>
            </div>
          </div>

          <div className="p-5 bg-[#0B0F0E] border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full glass-button text-xs text-[#B8BFBB] hover:text-white"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookPackage(`${pkg.title} (${pkg.destination})`);
              }}
              className="px-6 py-2.5 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#D9C7A2]/20"
            >
              <span>Reserve Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
