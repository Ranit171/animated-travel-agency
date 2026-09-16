import React from 'react';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { TravelStory } from '../types';

interface StoryCardProps {
  story: TravelStory;
  index: number;
  onReadStory: (story: TravelStory) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, index, onReadStory }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onReadStory(story)}
      className="group cursor-pointer flex flex-col space-y-4"
    >
      {/* Editorial Photograph */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#111716] border border-white/10 shadow-lg">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass-pill text-white border border-white/20">
          {story.category}
        </span>
      </div>

      {/* Meta Line */}
      <div className="flex items-center gap-3 text-xs text-[#B8BFBB] font-mono">
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
          {story.date}
        </span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#D9C7A2]" />
          {story.readTime}
        </span>
      </div>

      {/* Title & Excerpt */}
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-serif text-white font-normal group-hover:text-[#D9C7A2] transition-colors line-clamp-2 leading-snug">
          {story.title}
        </h3>

        <p className="text-sm text-[#B8BFBB] leading-relaxed line-clamp-2 font-light">
          {story.excerpt}
        </p>
      </div>

      {/* Read Article Trigger */}
      <div className="pt-1 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#D9C7A2] font-mono group-hover:text-white transition-colors">
        <span>Read Journal</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.article>
  );
};
