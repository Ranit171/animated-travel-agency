import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { DestinationCard } from './DestinationCard';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onOpenDetails: (destination: Destination) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenDetails }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Destinations' },
    { id: 'coastal', label: 'Coastal & Islands' },
    { id: 'alpine', label: 'Alpine Summits' },
    { id: 'cultural', label: 'Cultural Cities' },
  ];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'coastal') return dest.category === 'coastal' || dest.category === 'island';
    if (activeFilter === 'alpine') return dest.category === 'alpine';
    if (activeFilter === 'cultural') return dest.category === 'cultural';
    return true;
  });

  return (
    <section id="destinations" className="relative py-28 md:py-36 bg-[#0B0F0E] overflow-hidden">
      {/* Subtle Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D9C7A2]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-18">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolios</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              Where Will You <br className="hidden sm:inline" />
              <span className="italic font-normal">Go Next?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B8BFBB] font-light max-w-xl">
              From hidden islands to iconic cities, discover places worth remembering. Handpicked escapes tailored for discerning wanderers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0B0F0E] shadow-md shadow-white/10'
                      : 'bg-white/5 text-[#B8BFBB] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento / Editorial Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onOpenDetails={onOpenDetails}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D9C7A2]/10 border border-[#D9C7A2]/30 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#D9C7A2]" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Seeking an unlisted private retreat?</p>
              <p className="text-xs text-[#B8BFBB]">Our bespoke concierges coordinate private villas and off-grid charters worldwide.</p>
            </div>
          </div>

          <a
            href="#footer"
            className="text-xs uppercase font-mono tracking-wider text-[#D9C7A2] hover:text-white transition-colors underline underline-offset-4 shrink-0"
          >
            Consult a Travel Specialist →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
