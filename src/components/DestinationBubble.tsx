import React from 'react';
import { motion } from 'motion/react';
import { FloatingDestination } from '../types';

interface DestinationBubbleProps {
  destination: FloatingDestination;
  index: number;
  isActive?: boolean;
  onHover?: (destination: FloatingDestination) => void;
  onSelect: (destinationId: string) => void;
  // Offset styling for the desktop crescent / vertical curve
  desktopOffset?: string;
}

export const DestinationBubble: React.FC<DestinationBubbleProps> = ({
  destination,
  index,
  isActive = false,
  onHover,
  onSelect,
  desktopOffset = '',
}) => {
  // Stagger delays and subtle floating physics
  const floatDuration = 4 + (index % 3) * 0.8;
  const floatDelay = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative group flex items-center justify-end gap-3.5 cursor-pointer select-none transition-transform duration-300 ${desktopOffset}`}
      onMouseEnter={() => onHover?.(destination)}
      onFocus={() => onHover?.(destination)}
      onClick={() => onSelect(destination.targetDestinationId)}
      id={`bubble-${destination.id}`}
      role="button"
      tabIndex={0}
      aria-label={`View ${destination.title}, ${destination.subtitle}`}
    >
      {/* Label and Location (Appears on the left of the circle, as in reference) */}
      <motion.div
        className="text-right pointer-events-none transition-all duration-300 group-hover:-translate-x-1.5"
      >
        <p
          className={`text-xs md:text-sm font-semibold tracking-wide transition-colors drop-shadow-md ${
            isActive ? 'text-[#D9C7A2]' : 'text-white group-hover:text-[#D9C7A2]'
          }`}
        >
          {destination.title}
        </p>
        <p className="text-[10px] md:text-xs text-[#B8BFBB] drop-shadow-sm font-light">
          {destination.subtitle}
        </p>
      </motion.div>

      {/* Floating Animated Circle */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: floatDelay,
        }}
        className="relative"
      >
        {/* Outer Highlight Ring & Glowing Notch for Active Item */}
        {isActive && (
          <>
            <div className="absolute -inset-2.5 rounded-full border-2 border-[#D9C7A2] ring-4 ring-[#D9C7A2]/20 shadow-[0_0_20px_rgba(217,199,162,0.4)] pointer-events-none transition-all duration-500" />
            {/* Active pointer notch on the right edge */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-5 rounded-full bg-white shadow-[0_0_8px_#ffffff] z-10 pointer-events-none" />
          </>
        )}

        <div
          className={`relative overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105 ${
            isActive
              ? 'w-20 h-20 md:w-24 md:h-24 ring-2 ring-[#D9C7A2] shadow-2xl shadow-[#D9C7A2]/30'
              : 'w-16 h-16 md:w-20 md:h-20 ring-1 ring-white/30 group-hover:ring-white/80 shadow-lg shadow-black/40'
          }`}
        >
          <img
            src={destination.image}
            alt={destination.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isActive
                ? 'bg-transparent'
                : 'bg-gradient-to-t from-black/40 via-transparent to-black/10 group-hover:opacity-0'
            }`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
