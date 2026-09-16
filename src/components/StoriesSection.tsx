import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TRAVEL_STORIES } from '../data/travelData';
import { StoryCard } from './StoryCard';
import { TravelStory } from '../types';

interface StoriesSectionProps {
  onReadStory: (story: TravelStory) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onReadStory }) => {
  return (
    <section id="stories" className="relative py-28 md:py-36 bg-[#111716] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Wanderly Journal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              Stories From <br className="hidden sm:inline" />
              <span className="italic font-normal">The Road</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B8BFBB] font-light max-w-xl">
              Perspectives, cultural guides, and quiet essays gathered from trails, isles, and ancient towns across the globe.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#B8BFBB]">
            <span>Curated Dispatches</span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TRAVEL_STORIES.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              onReadStory={onReadStory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
