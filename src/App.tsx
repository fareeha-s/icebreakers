import React, { useState, useEffect } from 'react';
import { icebreakers, type Icebreaker } from './data/icebreakers';
import IcebreakerCard from './components/IcebreakerCard';
import Sidebar from './components/Sidebar';
import { Sparkles, ChevronRight } from 'lucide-react';

function App() {
  const [currentIcebreaker, setCurrentIcebreaker] = useState<Icebreaker>(() => {
    const randomIndex = Math.floor(Math.random() * icebreakers.length);
    return icebreakers[randomIndex];
  });
  
  const [history, setHistory] = useState<Icebreaker[]>([]);
  const [favorites, setFavorites] = useState<Icebreaker[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getNextIcebreaker = () => {
    const availableIcebreakers = icebreakers.filter(
      (ib) => ib.id !== currentIcebreaker.id
    );
    const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
    const nextIcebreaker = availableIcebreakers[randomIndex];
    
    setCurrentIcebreaker(nextIcebreaker);
    setHistory((prev) => [currentIcebreaker, ...prev].slice(0, 10));
  };

  const toggleFavorite = () => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.id === currentIcebreaker.id);
      if (isFavorite) {
        return prev.filter((fav) => fav.id !== currentIcebreaker.id);
      }
      return [currentIcebreaker, ...prev];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 p-2 glass-card rounded-r-lg transition-transform duration-200 hover:translate-x-1 ${
          isSidebarOpen ? 'translate-x-80' : 'translate-x-0'
        }`}
      >
        <ChevronRight className={`w-5 h-5 text-white transition-transform duration-200 ${
          isSidebarOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 transition-transform duration-200 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar
          history={history}
          favorites={favorites}
          onRemoveFromFavorites={removeFromFavorites}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-40 p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-white" />
              <h1 className="text-2xl font-bold text-white">icebreakers.wiki</h1>
            </div>
          </div>
        </header>

        <div className={`fixed top-1/2 left-1/2 transform -translate-y-1/2 transition-all duration-200 ${
          isSidebarOpen
            ? 'translate-x-[calc(-50%+160px)]' // Half of sidebar width (320px/2 = 160px)
            : '-translate-x-1/2'
        }`}>
          <IcebreakerCard
            icebreaker={currentIcebreaker}
            onNext={getNextIcebreaker}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === currentIcebreaker.id)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
