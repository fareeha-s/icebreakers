import { Heart, Send } from 'lucide-react';
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
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Detect iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsIOSSafari(isIOS && isSafari);
  }, []);

  // Separate button components for different platforms
  const BrowserButtons = () => (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Only Heart button */}
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

      {/* Next button */}
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
      {/* Only Heart button */}
      <button
        onClick={onToggleFavorite}
        className={`relative p-3.5 rounded-full
          ${!isDarkMode              
            ? 'bg-[#AADDEE]/90'      
            : 'bg-[rgba(255,255,255,0.15)]'
          }
          active:opacity-80
          transition-opacity`}
      >
        <Heart 
          className={`w-5 h-5
            ${isFavorite 
              ? isDarkMode
                ? 'text-white fill-white'
                : 'text-rose-200 fill-rose-200'
              : 'text-white fill-none'
            }`}
        />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className={`relative px-5 py-2.5 rounded-xl 
          ${!isDarkMode               
            ? 'bg-[#AADDEE]/90'      
            : 'bg-[rgba(255,255,255,0.15)]'
          }
          active:opacity-80
          transition-opacity`}
      >
        <span className="text-white font-medium">next →</span>
      </button>
    </div>
  );

  // Add the share handler inside the component
  const handleShare = async () => {
    try {
      const shareText = `Today's team question:\n${icebreaker.question}\n\nhttps://icebreakers.wiki`;
      
      // Check if it's desktop
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      
      if (!isDesktop && navigator.share) {
        // Mobile: use share sheet
        await navigator.share({
          text: shareText
        });
      } else {
        // Desktop: try clipboard methods
        try {
          // Try modern clipboard API first
          await navigator.clipboard.writeText(shareText);
          console.log('Copied using clipboard API');
        } catch (clipboardError) {
          // Fallback to execCommand
          const textArea = document.createElement('textarea');
          textArea.value = shareText;
          textArea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          console.log('Copied using execCommand');
        }
        
        // Show toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  return (
    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] animate-card-entrance">
      <div className="glass-card w-full h-full 
        px-6 pt-6 pb-24
        sm:px-8 sm:pt-8 sm:pb-28
        md:pb-32
        max-w-[90vw] mx-auto
        relative">
        {/* Share button - aligned with category text */}
        <div className="flex items-center justify-between">
          <span className="text-base text-white/80 uppercase tracking-wider font-medium">
            {icebreaker.category}
          </span>
          <button
            onClick={handleShare}
            className="p-2.5
              transition-colors
              hover:opacity-80
              active:scale-95"
          >
            <Send className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Rest of the card content */}
        <div className="mb-4 sm:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mt-6 text-white font-medium">
            {icebreaker.question}
          </h2>
        </div>

        {/* Heart and Next buttons at bottom */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 md:right-12 lg:right-16 
          flex items-center gap-3 md:gap-4
          z-[999]">
          {isIOSSafari ? <IOSSafariButtons /> : <BrowserButtons />}
        </div>
      </div>
      {/* Toast notification */}
      <div className={`
        fixed bottom-24 left-1/2 -translate-x-1/2
        px-4 py-2 rounded-lg
        bg-white/20 backdrop-blur-md
        border border-white/20
        text-white text-sm
        transition-all duration-300
        ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        Copied to clipboard! ✨
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