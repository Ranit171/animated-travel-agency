import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingDestination } from '../types';

interface ItineraryModalProps {
  destination: FloatingDestination | null;
  onClose: () => void;
  onBookItinerary: (destinationTitle: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  destination,
  onClose,
  onBookItinerary,
}) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  if (!destination) return null;

  const { itinerary } = destination;
  const activeDay = itinerary.days[activeDayIndex] || itinerary.days[0];

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
            aria-label="Close itinerary modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={destination.heroImage || destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111716] via-[#111716]/40 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider glass-pill border border-[#D9C7A2]/40 text-[#D9C7A2] mb-2">
                  <Sparkles className="w-3 h-3 text-[#D9C7A2]" />
                  Curated Itinerary
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
                  {destination.title}
                </h2>
                <p className="text-sm text-[#B8BFBB] flex items-center gap-1.5 pt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>{destination.subtitle}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-xl glass-panel text-right">
                  <span className="text-[10px] text-[#B8BFBB] uppercase font-mono block">Starting At</span>
                  <span className="text-base font-serif text-white font-semibold">
                    ${itinerary.startingPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Route Map Flow */}
          <div className="px-6 sm:px-8 py-3 bg-white/5 border-y border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[11px] uppercase tracking-wider font-mono text-[#D9C7A2] shrink-0 mr-1">
              Route:
            </span>
            {itinerary.route.map((stop, i) => (
              <React.Fragment key={i}>
                <span className="text-xs text-white/90 whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-medium">
                  {stop}
                </span>
                {i < itinerary.route.length - 1 && (
                  <span className="text-xs text-[#D9C7A2]/60 font-mono">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>Duration</span>
                </span>
                <p className="text-sm font-medium text-white">{itinerary.duration} / {itinerary.nights}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
                  <span>Best Season</span>
                </span>
                <p className="text-sm font-medium text-white">{itinerary.bestSeason}</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8BFBB]">
                  Pace & Style
                </span>
                <p className="text-sm font-medium text-white">Private Luxury Immersion</p>
              </div>
            </div>

            {/* Day by Day Navigation Tabs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
                  Day-by-Day Expedition Plan
                </h4>
                <span className="text-xs text-[#B8BFBB] font-mono">
                  Day {activeDayIndex + 1} of {itinerary.days.length}
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {itinerary.days.map((day, idx) => (
                  <button
                    key={day.day}
                    onClick={() => setActiveDayIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all whitespace-nowrap ${
                      activeDayIndex === idx
                        ? 'bg-[#D9C7A2] text-[#0B0F0E] font-semibold shadow-md shadow-[#D9C7A2]/20'
                        : 'glass-panel text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Day {day.day}
                  </button>
                ))}
              </div>

              {/* Active Day Card */}
              <motion.div
                key={activeDay.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#D9C7A2]">
                    {activeDay.timeSlot || `Day ${activeDay.day}`}
                  </span>
                  {activeDay.highlight && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#D9C7A2]/15 text-[#D9C7A2] border border-[#D9C7A2]/30 font-medium">
                      <Sparkles className="w-3 h-3" />
                      {activeDay.highlight}
                    </span>
                  )}
                </div>

                <h5 className="text-lg font-serif text-white font-medium">
                  {activeDay.title}
                </h5>

                <p className="text-sm text-[#B8BFBB] leading-relaxed font-light">
                  {activeDay.description}
                </p>
              </motion.div>
            </div>

            {/* Key Inclusions & Perks */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
                Curated Highlights & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {itinerary.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D9C7A2] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#0B0F0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div>
              <span className="text-xs text-[#B8BFBB] block">100% Bespoke Travel Architecture</span>
              <span className="text-sm font-medium text-white">Private Concierge & Custom Dates</span>
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
                  onBookItinerary(`${destination.title} (${destination.subtitle})`);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#D9C7A2]/20"
              >
                <span>Plan This Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
