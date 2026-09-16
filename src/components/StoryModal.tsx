import React from 'react';
import { X, Calendar, Clock, User, Share2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TravelStory } from '../types';

interface StoryModalProps {
  story: TravelStory | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

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

        <motion.article
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#111716] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-white max-h-[85vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-60 w-full overflow-hidden shrink-0">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111716] via-transparent to-black/30" />
            
            <div className="absolute top-5 left-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest glass-pill text-white border border-white/20">
                {story.category}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-5 overflow-y-auto flex-1">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#B8BFBB] font-mono pb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D9C7A2]" />
                {story.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
                {story.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D9C7A2]" />
                {story.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug">
              {story.title}
            </h2>

            <p className="text-base font-serif italic text-[#D9C7A2] leading-relaxed">
              "{story.excerpt}"
            </p>

            <div className="space-y-4 text-sm text-[#B8BFBB] font-light leading-relaxed">
              <p>
                True discovery begins where the tourist maps fade away. When you step into secluded coves and slow-paced villages, you encounter the true heartbeat of the landscape: the fishermen hauling morning nets, the aromas of hand-pressed olive oils, and the quiet silence of untouched shores.
              </p>
              <p>
                At Wanderly, we believe luxury is not defined by gold leaf or crowded spectacles. It is defined by time, space, and personal stillness. Our private scouts spend months curating these sanctuaries so our travelers can experience destinations in their purest, most authentic light.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border-l-2 border-[#D9C7A2] text-xs text-white/90 italic">
                "To travel without hurry is to give the world a chance to reveal its secrets."
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#0B0F0E] border-t border-white/10 flex items-center justify-between text-xs text-[#B8BFBB] shrink-0">
            <span>Published by Wanderly Editorial</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Done Reading
            </button>
          </div>
        </motion.article>
      </div>
    </AnimatePresence>
  );
};
