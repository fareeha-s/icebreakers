import { Heart, RefreshCw } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';

interface IcebreakerCardProps {
  icebreaker: Icebreaker;
  onNext: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

export default function IcebreakerCard({
  icebreaker,
  onNext,
  onToggleFavorite,
  isFavorite,
}: IcebreakerCardProps) {
  return (
    <div className="w-full 
      h-[250px]
      sm:h-[300px]
      md:h-[400px]
      animate-card-entrance">
      <div className="glass-card w-full h-full 
        px-6 pt-6 pb-6
        sm:px-8 sm:pt-8 sm:pb-8
        max-w-[90vw] mx-auto">
        <div>
          <span className="text-base text-white/80 uppercase tracking-wider font-medium">
            {icebreaker.category}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl mt-6 text-white font-medium [text-shadow:_0_1px_2px_rgba(0,0,0,0.08)]">
            {icebreaker.question}
          </h2>
        </div>
        <div className="absolute bottom-8 md:bottom-10 lg:bottom-12 right-8 md:right-12 lg:right-16 
          flex items-center gap-3 md:gap-4">
          <button
            onClick={onToggleFavorite}
            className="glass-button p-3.5 rounded-full
              bg-white/5
              backdrop-blur-[8px]
              border border-white/10
              shadow-[0_0_15px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
              hover:bg-pink-200/20
              transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
              hover:scale-105
              active:scale-100
              transform-gpu"
          >
            <Heart 
              className={`
                w-5 h-5 
                transition-all duration-700
                hover:fill-rose-200 hover:text-rose-200
                ${isFavorite 
                  ? 'fill-white text-white' 
                  : 'text-white/80'
                }
              `}
            />
          </button>

          <button
            onClick={onNext}
            className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-1.5 text-white text-base
              bg-white/10
              backdrop-blur-md
              border border-white/20
              shadow-[0_0_15px_rgba(255,255,255,0.15)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
              transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
              hover:bg-white/20
              hover:scale-105
              active:scale-100
              transform-gpu
              after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-b after:from-white/15 after:to-transparent after:opacity-0 after:hover:opacity-100 after:transition-opacity"
          >
            next →
          </button>
        </div>
      </div>
    </div>
  );
}

function getCategoryColor(category: 'fun' | 'professional' | 'deep' | 'creative') {
  switch (category) {
    case 'fun':
      return 'bg-emerald-400';
    case 'professional':
      return 'bg-blue-400';
    case 'deep':
      return 'bg-purple-400';
    case 'creative':
      return 'bg-orange-400';
    default:
      return 'bg-gray-400';
  }
}