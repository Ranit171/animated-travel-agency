import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Clock, Calendar, Sparkles } from 'lucide-react';
import { FLOATING_DESTINATIONS } from '../data/travelData';
import { DestinationBubble } from './DestinationBubble';
import { FloatingDestination } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onSelectDestination: (destId: string) => void;
  onViewItinerary?: (destination: FloatingDestination) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onSelectDestination,
  onViewItinerary,
}) => {
  const { scrollY } = useScroll();

  // Parallax transform for hero background and text
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  // Active bubble state: default to 'vernazza' as in reference design
  const [activeBubbleId, setActiveBubbleId] = useState<string>('vernazza');
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const activeDest =
    FLOATING_DESTINATIONS.find((d) => d.id === activeBubbleId) || FLOATING_DESTINATIONS[2];
  const { itinerary } = activeDest;
  const activeDay = itinerary.days[activeDayIndex] || itinerary.days[0];

  // Desktop diagonal curve offsets to match the reference composition
  const desktopCurveOffsets = [
    'translate-x-0',                   // 1. Cameo Island
    'translate-x-3 md:translate-x-4',  // 2. Koh Phi Phi Don
    'translate-x-6 md:translate-x-8',  // 3. Vernazza (Cinque Terre)
    'translate-x-3 md:translate-x-4',  // 4. Grand Canal
    'translate-x-0',                   // 5. Amalfi Coast
  ];

  const handleBubbleHover = (dest: FloatingDestination) => {
    if (dest.id !== activeBubbleId) {
      setActiveBubbleId(dest.id);
      setActiveDayIndex(0);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0B0F0E]"
    >
      {/* Background Image Container with Cinematic Zoom, Crossfade & Scroll Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[5%] pointer-events-none z-0 overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeDest.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            src={activeDest.heroImage || activeDest.image}
            alt={activeDest.title}
            className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.06]"
          />
        </AnimatePresence>

        {/* Cinematic Multi-Layer Gradients for Superior Typography Legibility */}
        {/* Left-to-right dark scrim for headline & itinerary contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

        {/* Bottom-to-top gradient blending smoothly with page body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/50 to-transparent" />

        {/* Top vignette for navbar readability */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />
      </motion.div>

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 md:pt-36 pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Hero Editorial & Interactive Itinerary Content */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-7 flex flex-col items-start space-y-5 max-w-2xl"
          >
            {/* Pill Tag with smooth content transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`pill-${activeDest.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-white/20 shadow-lg shadow-black/20"
              >
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#D9C7A2] text-[#0B0F0E]">
                  {activeDest.badge}
                </span>
                <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
                  {activeDest.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline with Elegant Serif Editorial Flourish */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${activeDest.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal italic tracking-tight text-white leading-[1.08] drop-shadow-lg"
              >
                {activeDest.headlineMain} <br className="hidden sm:inline" />
                <span className="font-serif not-italic font-light tracking-normal text-white/95">
                  {activeDest.headlineSub}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Supporting Editorial Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeDest.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="text-sm sm:text-base text-[#B8BFBB] leading-relaxed max-w-xl font-sans font-light drop-shadow"
              >
                {activeDest.description}
              </motion.p>
            </AnimatePresence>

            {/* In-Hero Curated Itinerary Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`itinerary-${activeDest.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full max-w-xl rounded-2xl glass-panel p-4 sm:p-5 border border-white/20 shadow-2xl backdrop-blur-xl"
              >
                {/* Header: Itinerary Title, Duration, Price */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#D9C7A2] bg-[#D9C7A2]/15 px-2.5 py-1 rounded-md border border-[#D9C7A2]/25 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {itinerary.duration} • {itinerary.nights}
                    </span>
                    <span className="text-xs text-white/80 font-mono hidden sm:inline">
                      Curated Itinerary
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#B8BFBB] uppercase font-mono tracking-wider">From </span>
                    <span className="text-sm sm:text-base font-serif font-semibold text-white">
                      ${itinerary.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#B8BFBB]"> / person</span>
                  </div>
                </div>

                {/* Route Sequence Flow */}
                <div className="py-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
                  <span className="text-[10px] uppercase font-mono text-[#D9C7A2] shrink-0 font-medium mr-1">
                    Route:
                  </span>
                  {itinerary.route.map((point, idx) => (
                    <React.Fragment key={idx}>
                      <span className="whitespace-nowrap px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/90 text-[11px]">
                        {point}
                      </span>
                      {idx < itinerary.route.length - 1 && (
                        <span className="text-[#D9C7A2]/60 text-[10px] font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Day-by-Day Interactive Tab Selector */}
                <div className="pt-2">
                  <div className="flex items-center gap-1.5 pb-2.5 overflow-x-auto no-scrollbar">
                    {itinerary.days.map((day, dIdx) => (
                      <button
                        key={day.day}
                        onClick={() => setActiveDayIndex(dIdx)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                          activeDayIndex === dIdx
                            ? 'bg-[#D9C7A2] text-[#0B0F0E] font-bold shadow-md shadow-[#D9C7A2]/20'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                        }`}
                      >
                        Day {day.day}
                      </button>
                    ))}
                  </div>

                  {/* Active Day Snippet Card */}
                  {activeDay && (
                    <motion.div
                      key={activeDay.day}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-mono text-[#D9C7A2]">
                          {activeDay.timeSlot || `Day ${activeDay.day}`}
                        </span>
                        {activeDay.highlight && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#D9C7A2] bg-[#D9C7A2]/10 px-2 py-0.5 rounded-full border border-[#D9C7A2]/20">
                            <Sparkles className="w-2.5 h-2.5" />
                            {activeDay.highlight}
                          </span>
                        )}
                      </div>
                      <p className="font-serif text-white text-sm font-medium">{activeDay.title}</p>
                      <p className="text-[#B8BFBB] text-[11px] mt-1 line-clamp-2 leading-relaxed font-light">
                        {activeDay.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Itinerary Quick Link */}
                <div className="flex items-center justify-between gap-3 pt-3 mt-1 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#B8BFBB]">
                    <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
                    <span>Best Season: <strong className="text-white font-medium">{itinerary.bestSeason}</strong></span>
                  </div>

                  {onViewItinerary && (
                    <button
                      onClick={() => onViewItinerary(activeDest)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D9C7A2] hover:text-white font-medium cursor-pointer transition-colors group"
                    >
                      <span>Full Schedule Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                id="hero-explore-destinations-btn"
                onClick={onExploreClick}
                className="group px-6 py-3.5 rounded-full glass-button text-white text-sm font-medium flex items-center gap-3 border border-white/30 hover:border-[#D9C7A2] hover:bg-white/20 active:scale-95 cursor-pointer shadow-xl shadow-black/30"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4 text-[#D9C7A2] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {onViewItinerary && (
                <button
                  onClick={() => onViewItinerary(activeDest)}
                  className="px-6 py-3.5 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#D9C7A2]/20 active:scale-95"
                >
                  <span>View {activeDest.title} Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Floating Destination Bubbles (Desktop Crescent / Vertical Stack) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end space-y-4 pr-4 xl:pr-10 relative">

            {/* Pagination Dots Indicator on the far right, matching reference */}
            <div className="absolute -right-2 xl:right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none">
              {FLOATING_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    dest.id === activeBubbleId
                      ? 'h-6 bg-white shadow-sm shadow-white/80'
                      : 'h-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* The 5 Floating Interactive Bubbles */}
            <div className="flex flex-col items-end space-y-3.5 md:space-y-4">
              {FLOATING_DESTINATIONS.map((dest, index) => (
                <DestinationBubble
                  key={dest.id}
                  destination={dest}
                  index={index}
                  isActive={dest.id === activeBubbleId}
                  onHover={handleBubbleHover}
                  desktopOffset={desktopCurveOffsets[index]}
                  onSelect={onSelectDestination}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Carousel for Floating Cards (Clean responsive requirement) */}
        <div className="lg:hidden mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs uppercase tracking-widest text-[#D9C7A2] font-mono">
              Tap Bubbles to Preview
            </span>
            <span className="text-[11px] text-[#B8BFBB]">Swipe to explore →</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            {FLOATING_DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                onClick={() => handleBubbleHover(dest)}
                className={`snap-center shrink-0 flex items-center gap-3 p-2.5 rounded-2xl glass-panel border transition-all cursor-pointer ${
                  dest.id === activeBubbleId
                    ? 'border-[#D9C7A2] ring-2 ring-[#D9C7A2]/40 bg-white/15 scale-102'
                    : 'border-white/15 active:scale-98'
                }`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-1 ring-white/30">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pr-2">
                  <p
                    className={`text-sm font-medium ${
                      dest.id === activeBubbleId ? 'text-[#D9C7A2]' : 'text-white'
                    }`}
                  >
                    {dest.title}
                  </p>
                  <p className="text-xs text-[#B8BFBB]">{dest.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-8 flex items-center justify-between text-xs text-[#B8BFBB]/70">
        <div className="hidden sm:flex items-center gap-3">
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="tracking-widest uppercase text-[11px] font-mono">
            Cinematic Expeditions 2026
          </span>
        </div>

        <a
          href="#destinations"
          className="inline-flex items-center gap-2 group text-[#B8BFBB] hover:text-white transition-colors"
        >
          <span className="tracking-wider text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#D9C7A2]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

