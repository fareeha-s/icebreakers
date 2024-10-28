import React from 'react';
import { Heart, Clock, X } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';

interface SidebarProps {
  history: Icebreaker[];
  favorites: Icebreaker[];
  onRemoveFromFavorites: (id: string) => void;
}

export default function Sidebar({ history, favorites, onRemoveFromFavorites }: SidebarProps) {
  return (
    <div className="h-full glass-sidebar p-6 overflow-y-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-300" />
          <h2 className="text-lg font-semibold text-white">Favorites</h2>
        </div>
        <div className="space-y-3">
          {favorites.map((item) => (
            <div key={item.id} className="p-3 glass rounded-lg relative group">
              <p className="text-sm text-white/90 pr-6">{item.question}</p>
              <button
                onClick={() => onRemoveFromFavorites(item.id)}
                className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4 text-white/60 hover:text-white" />
              </button>
            </div>
          ))}
          {favorites.length === 0 && (
            <p className="text-sm text-white/60 italic">No favorites yet</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-blue-300" />
          <h2 className="text-lg font-semibold text-white">History</h2>
        </div>
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="p-3 glass rounded-lg">
              <p className="text-sm text-white/90">{item.question}</p>
            </div>
          ))}
          {history.length === 0 && (
            <p className="text-sm text-white/60 italic">No history yet</p>
          )}
        </div>
      </div>
    </div>
  );
}