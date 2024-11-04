import React, { useState, useEffect } from 'react';
import { Heart, History } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';

interface SidebarProps {
  history: Icebreaker[];
  favorites: Icebreaker[];
  onRemoveFromFavorites: (id: string) => void;
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
  onRemoveFromFavorites, 
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
                  <Heart className="w-5 h-5 text-white/80" />
                  <h2 className="text-base text-white/80 uppercase tracking-wider font-medium">
                    Favorites
                  </h2>
                </div>
                {favorites.length > 0 && (
                  <span 
                    onClick={onClearFavorites} 
                    className="text-sm text-white/70 cursor-pointer hover:text-white/90"
                  >
                    clear
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="space-y-2">
                {favorites.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4
                      glass-button
                      transition-all duration-300"
                  >
                    <p className="text-white text-sm">
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
                  <span 
                    onClick={onClearHistory} 
                    className="text-sm text-white/70 cursor-pointer hover:text-white/90"
                  >
                    clear
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="space-y-2">
                {history.slice(-10).reverse().map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4
                      glass-button
                      transition-all duration-300"
                  >
                    <p className="text-white text-sm">
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