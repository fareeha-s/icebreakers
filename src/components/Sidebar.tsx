import { Heart, History } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';

interface SidebarProps {
  history: Icebreaker[];
  favorites: Icebreaker[];
  onCardClick: (icebreaker: Icebreaker) => void;
  onClearFavorites: () => void;
  onClearHistory: () => void;
}

const formatQuestion = (question: string) => {
  if (question.includes("Superior way to eat potatoes?")) {
    return (
      <>
        Superior way to eat potatoes?
        <br />
        (mashed, roasted, hashed, 🍟...)
      </>
    );
  }
  return question;
};

export default function Sidebar({ 
  history, 
  favorites, 
  onCardClick,
  onClearFavorites,
  onClearHistory 
}: SidebarProps) {
  return (
    <div className="h-full max-h-full overflow-hidden">
      <div className="px-6 pt-6 pb-4 h-full flex flex-col">
        {/* Split Layout Container */}
        <div className="flex h-full overflow-hidden">
          {/* Favorites Section - Left Side */}
          <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
            <div className="shrink-0 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-white/80 active:[&>path]:fill-red-500" />
                  <h2 className="text-base text-white/80 uppercase tracking-wider font-medium">
                    Favorites
                  </h2>
                </div>
                {favorites.length > 0 && (
                  <span className="text-white/50 cursor-pointer" onClick={onClearFavorites}>
                    <span className="sm:inline hidden text-sm">clear</span>
                    <span className="sm:hidden inline text-xl px-2">×</span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden">
              <div className="space-y-2">
                {favorites.slice().reverse().map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4
                      bg-[rgba(255,255,255,0.15)]
                      border border-white/30
                      transition-all duration-300
                      hover:bg-white/20
                      active:scale-95
                      transform-gpu
                      [-webkit-tap-highlight-color:transparent]
                      [color-scheme:light]"
                  >
                    <p className="text-white text-sm [-webkit-text-fill-color:white]">
                      {formatQuestion(item.question)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-white/20 mx-6" />

          {/* History Section - Right Side */}
          <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
            <div className="mb-4 px-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-white/80" />
                  <h2 className="text-base text-white/80 uppercase tracking-wider font-medium">
                    History
                  </h2>
                </div>
                {history.length > 0 && (
                  <span className="text-white/50 cursor-pointer" onClick={onClearHistory}>
                    <span className="sm:inline hidden text-sm">clear</span>
                    <span className="sm:hidden inline text-xl px-2">×</span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden">
              <div className="space-y-2">
                {history.slice(-10).reverse().map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4
                      bg-[rgba(255,255,255,0.15)]
                      border border-white/30
                      transition-all duration-300
                      hover:bg-white/20
                      active:scale-95
                      transform-gpu
                      [-webkit-tap-highlight-color:transparent]
                      [color-scheme:light]"
                  >
                    <p className="text-white text-sm [-webkit-text-fill-color:white]">
                      {formatQuestion(item.question)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}