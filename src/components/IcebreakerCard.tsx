import React from 'react';
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
    <div className="w-[90vw] md:w-[600px] h-auto min-h-[250px] landscape:min-h-[200px] glass-card rounded-2xl p-4 md:p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute top-0 left-0 w-full h-1">
        <div className={`h-full ${getCategoryColor(icebreaker.category)} shadow-lg`} />
      </div>
      
      <div className="mb-2 landscape:mb-1 md:mb-6">
        <span className="text-xs md:text-sm font-medium text-white uppercase tracking-wider font-sans">
          {icebreaker.category}
        </span>
      </div>

      <div className="h-[100px] landscape:h-[80px] md:h-[120px]">
        <h1 className="text-lg landscape:text-xl md:text-2xl font-semibold text-white font-sans">
          {icebreaker.question}
        </h1>
      </div>

      <div className="flex justify-end items-center gap-3 md:gap-4 mt-2 landscape:mt-1 md:mt-auto">
        <button
          onClick={onToggleFavorite}
          className={`p-2 md:p-3 rounded-full transition-colors duration-200 glass-button ${
            isFavorite
              ? 'text-rose-300'
              : 'text-white'
          }`}
        >
          <Heart className="w-5 h-5 md:w-6 md:h-6" fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <button
          onClick={onNext}
          className="px-4 md:px-6 py-2 md:py-3 glass-button rounded-full flex items-center gap-2 text-white"
        >
          <span className="font-sans">Next</span>
          <RefreshCw className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
}

function getCategoryColor(category: Icebreaker['category']) {
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