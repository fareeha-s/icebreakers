import { Heart } from 'lucide-react';
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
        px-6 pt-6 pb-24
        sm:px-8 sm:pt-8 sm:pb-28
        md:pb-32
        max-w-[90vw] mx-auto
        relative">
        <div className="mb-4 sm:mb-8">
          <span className="text-base text-white/80 uppercase tracking-wider font-medium">
            {icebreaker.category}
          </span>
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl mt-6 text-white font-medium [text-shadow:_0_1px_2px_rgba(0,0,0,0.08)]"
            dangerouslySetInnerHTML={{ __html: icebreaker.question }}
          />
        </div>
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 md:right-12 lg:right-16 
          flex items-center gap-3 md:gap-4
          z-[999]">
          <button
            onClick={onToggleFavorite}
            className={`relative p-3.5 rounded-full
              glass-button-fallback
              bg-white/10 backdrop-blur-md
              border border-white/20
              shadow-[0_0_15px_rgba(255,255,255,0.15)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
              transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
              hover:bg-rose-200/20
              hover:scale-105
              active:scale-100
              transform-gpu
              isolate
              z-[999]
            `}
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 relative
                ${isFavorite 
                  ? 'text-white fill-white' 
                  : 'text-white fill-none hover:text-rose-200 hover:fill-red-200'
                }`} 
            />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              try {
                onNext();
              } catch (error) {
                console.error('Error in next button:', error);
              }
            }}
            className="relative px-4 py-2.5 rounded-xl flex items-center gap-1.5 text-white text-base
              glass-button-fallback
              bg-white/10 backdrop-blur-md
              border border-white/20
              shadow-[0_0_15px_rgba(255,255,255,0.15)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
              transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
              hover:bg-white/20
              hover:scale-105
              active:scale-100
              transform-gpu
              isolate
              z-[999]
            "
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