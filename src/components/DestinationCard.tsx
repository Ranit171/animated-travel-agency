import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onOpenDetails: (destination: Destination) => void;
  index: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onOpenDetails,
  index,
}) => {
  const isWide = destination.gridSpan === 'wide';

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpenDetails(destination)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-[#111716] border border-white/10 hover:border-[#D9C7A2]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-end ${
        isWide
          ? 'md:col-span-2 min-h-[380px] lg:min-h-[440px]'
          : 'col-span-1 min-h-[380px] lg:min-h-[440px]'
      }`}
    >
      {/* Background Image with Hover Scale */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.9] group-hover:brightness-[0.98]"
        />
        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-black/20 group-hover:via-[#0B0F0E]/50 transition-all duration-300" />
      </div>

      {/* Top Floating Badge */}
      <div className="relative z-10 p-6 pb-0 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase glass-pill text-white/90 border border-white/15">
          {destination.categoryLabel}
        </span>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill text-xs text-white/90">
          <Star className="w-3.5 h-3.5 text-[#D9C7A2] fill-[#D9C7A2]" />
          <span>{destination.averageRating.toFixed(2)}</span>
        </div>
      </div>

      {/* Bottom Content Panel */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end space-y-3 mt-auto">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D9C7A2] font-mono">
              {destination.location}, {destination.country}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight font-normal group-hover:text-[#D9C7A2] transition-colors duration-300">
              {destination.name}
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[#D9C7A2] group-hover:border-[#D9C7A2] transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0B0F0E] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <p className="text-sm text-[#B8BFBB] line-clamp-2 leading-relaxed font-light">
          {destination.description}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs text-[#B8BFBB]/80 border-t border-white/10">
          <span>From <strong className="text-white font-medium">${destination.startingPrice.toLocaleString()}</strong> / person</span>
          <span className="text-[#D9C7A2] underline underline-offset-4 group-hover:text-white transition-colors">
            View Itinerary
          </span>
        </div>
      </div>
    </motion.div>
  );
};
