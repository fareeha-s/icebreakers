import { Heart } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';
import { useState, useEffect } from 'react';

interface IcebreakerCardProps {
  icebreaker: Icebreaker;
  onNext: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  isDarkMode: boolean;
}

export default function IcebreakerCard({
  icebreaker,
  onNext,
  onToggleFavorite,
  isFavorite,
  isDarkMode,
}: IcebreakerCardProps) {
  const [isIOSSafari, setIsIOSSafari] = useState(false);

  useEffect(() => {
    // Detect iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsIOSSafari(isIOS && isSafari);
  }, []);

  // Separate button components for different platforms
  const BrowserButtons = () => (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Original glass-effect buttons for desktop/other browsers */}
      <button
        onClick={onToggleFavorite}
        className={`relative p-3.5 rounded-full
          bg-[rgba(255,255,255,0.15)]
          backdrop-blur-md
          border border-white/20
          transition-colors
          ${isFavorite 
            ? 'hover:shadow-[0_0_20px_rgba(255,182,193,0.3)]'
            : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]'
          }
          active:scale-95`}
      >
        <Heart 
          className={`w-5 h-5 transition-colors
            ${isFavorite 
              ? 'text-rose-200 fill-rose-200'
              : 'text-white fill-none'
            }`}
        />
      </button>

      <button
        onClick={onNext}
        className="relative px-4 py-2.5 rounded-xl 
          flex items-center gap-1.5 
          bg-[rgba(255,255,255,0.15)]
          backdrop-blur-md
          border border-white/20
          transition-colors
          active:scale-95"
      >
        <span className="text-white">next →</span>
      </button>
    </div>
  );

  const IOSSafariButtons = () => (
    <div className="flex items-center gap-3">
      <button
        onClick={onToggleFavorite}
        className={`relative p-3.5 rounded-full
          ${isFavorite 
            ? 'bg-rose-500/90' 
            : !isDarkMode              // Flip this condition
              ? 'bg-[#AADDEE]/90'      // Blue in light mode
              : 'bg-gray-500/90'       // Grey in dark mode
          }
          active:opacity-80
          transition-opacity`}
      >
        <Heart 
          className={`w-5 h-5
            ${isFavorite 
              ? 'text-white fill-white'
              : 'text-white fill-none'
            }`}
        />
      </button>

      <button
        onClick={onNext}
        className={`relative px-5 py-2.5 rounded-xl 
          ${!isDarkMode               // Flip this condition
            ? 'bg-[#AADDEE]/90'      // Blue in light mode
            : 'bg-gray-500/90'       // Grey in dark mode
          }
          active:opacity-80
          transition-opacity`}
      >
        <span className="text-white font-medium">next →</span>
      </button>
    </div>
  );

  return (
    <div 
      className="w-full h-[250px] sm:h-[300px] md:h-[400px] animate-card-entrance"
    >
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
          {isIOSSafari ? <IOSSafariButtons /> : <BrowserButtons />}
        </div>
      </div>
    </div>
  );
}

// Commenting out unused function
/*
function getCategoryColor(category: 'fun' | 'professional' | 'introspective' | 'creative') {
  switch (category) {
    case 'fun':
      return 'bg-emerald-400';
    case 'professional':
      return 'bg-blue-400';
    case 'introspective':
      return 'bg-purple-400';
    case 'creative':
      return 'bg-orange-400';
    default:
      return 'bg-gray-400';
  }
}
*/