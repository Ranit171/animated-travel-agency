import React from 'react';
import { X, MapPin, Calendar, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBookDestination: (destinationName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onBookDestination,
}) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[#111716] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-white max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Hero Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111716] via-[#111716]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider glass-pill border border-white/20 mb-2">
                  {destination.categoryLabel}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
                  {destination.name}
                </h2>
                <p className="text-sm text-[#B8BFBB] flex items-center gap-1.5 pt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>{destination.location}, {destination.country}</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs">
                <Star className="w-4 h-4 text-[#D9C7A2] fill-[#D9C7A2]" />
                <span className="font-semibold">{destination.averageRating.toFixed(2)}</span>
                <span className="text-[#B8BFBB] text-[11px]">Guest rating</span>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
            {/* Tagline */}
            <p className="text-base sm:text-lg font-serif italic text-[#D9C7A2]">
              "{destination.tagline}"
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#B8BFBB] leading-relaxed font-light">
              {destination.description}
            </p>

            {/* Key Information Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>Best Season</span>
                </span>
                <p className="text-xs sm:text-sm font-medium text-white">{destination.bestTimeToVisit}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>Recommended</span>
                </span>
                <p className="text-xs sm:text-sm font-medium text-white">{destination.recommendedDuration}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB]">
                  Starting From
                </span>
                <p className="text-xs sm:text-sm font-medium text-white">
                  ${destination.startingPrice.toLocaleString()} <span className="text-[11px] text-[#B8BFBB] font-normal">/ person</span>
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
                Curated Highlights & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-[#D9C7A2] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#0B0F0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div>
              <span className="text-xs text-[#B8BFBB] block">Tailored Private Booking</span>
              <span className="text-sm font-medium text-white">Bespoke Concierge Coordination</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full glass-button text-xs font-medium text-[#B8BFBB] hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookDestination(`${destination.name}, ${destination.country}`);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#D9C7A2]/20"
              >
                <span>Plan This Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
