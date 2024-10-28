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
    <div className="max-w-2xl w-full glass-card rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1">
        <div className={`h-full ${getCategoryColor(icebreaker.category)}`} />
      </div>
      
      <div className="mb-6">
        <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
          {icebreaker.category}
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-white mb-8">
        {icebreaker.question}
      </h1>

      <div className="flex justify-between items-center">
        <button
          onClick={onToggleFavorite}
          className={`p-3 rounded-full transition-all glass ${
            isFavorite
              ? 'text-rose-300 hover:text-rose-200'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Heart className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <button
          onClick={onNext}
          className="px-6 py-3 glass rounded-full flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <span>Next Icebreaker</span>
          <RefreshCw className="w-4 h-4" />
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