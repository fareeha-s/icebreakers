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

export default function Sidebar({ 
  history, 
  favorites, 
  onRemoveFromFavorites, 
  onCardClick,
  onClearFavorites,
  onClearHistory 
}: SidebarProps) {
  return (
    <div className="h-full overflow-hidden">
      <div className="px-6 pt-6 h-full">
        {/* Split Layout Container */}
        <div className="flex gap-6 h-[calc(100%-40px)]">
          {/* Favorites Section - Left Side */}
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-white/80" />
                  <h2 className="text-base text-white/80 uppercase tracking-wider font-medium">
                    Favorites
                  </h2>
                </div>
                {favorites.length > 0 && (
                  <span onClick={onClearFavorites} className="text-sm text-white/70 cursor-pointer">
                    clear
                  </span>
                )}
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-40px)] pr-2 scrollbar-hide">
              <div className="space-y-2">
                {favorites.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4 
                      glass-button
                      transition-all duration-300"
                  >
                    <p className="text-white text-sm">{item.question}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-white/20" />

          {/* History Section - Right Side */}
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-white/80" />
                  <h2 className="text-base text-white/80 uppercase tracking-wider font-medium">
                    History
                  </h2>
                </div>
                {history.length > 0 && (
                  <span onClick={onClearHistory} className="text-sm text-white/70 cursor-pointer">
                    clear
                  </span>
                )}
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-40px)] pr-2 scrollbar-hide">
              <div className="space-y-2">
                {history.slice(-10).reverse().map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onCardClick(item)}
                    className="w-full text-left rounded-xl py-2 px-4 
                      glass-button
                      transition-all duration-300"
                  >
                    <p className="text-white text-sm">{item.question}</p>
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