import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { icebreakers, type Icebreaker } from './data/icebreakers';
import IcebreakerCard from './components/IcebreakerCard';
import Sidebar from './components/Sidebar';
import { ThemePicker } from './components/ThemePicker';

function App() {
  const [currentIcebreaker, setCurrentIcebreaker] = useState<Icebreaker>(() => {
    return icebreakers.find(ib => ib.id === '46') || icebreakers[0];
  });
  
  // First, clear the history in localStorage
  useEffect(() => {
    localStorage.removeItem('icebreaker-history');
  }, []); // Run once on mount

  // Initialize history with just the current icebreaker
  const [history, setHistory] = useState<Icebreaker[]>([]);

  const [favorites, setFavorites] = useState<Icebreaker[]>(() => {
    const savedFavorites = localStorage.getItem('icebreaker-favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('icebreaker-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('icebreaker-history', JSON.stringify(history));
  }, [history]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Track which questions have been shown
  const [usedQuestions, setUsedQuestions] = useState<string[]>(() => {
    const savedUsed = localStorage.getItem('icebreaker-used');
    return savedUsed ? JSON.parse(savedUsed) : [currentIcebreaker.id];
  });

  // Get next icebreaker
  const getNextIcebreaker = () => {
    if (usedQuestions.length >= icebreakers.length) {
      setUsedQuestions([currentIcebreaker.id]); // Keep current one in used
    }

    const availableIcebreakers = icebreakers.filter(
      ib => !usedQuestions.includes(ib.id)
    );

    // Safety check
    if (availableIcebreakers.length === 0) {
      console.error('No available icebreakers');
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
    const nextIcebreaker = availableIcebreakers[randomIndex];

    if (!nextIcebreaker) {
      console.error('Failed to get next icebreaker');
      return;
    }

    setCurrentIcebreaker(nextIcebreaker);
    setUsedQuestions(prev => [...prev, nextIcebreaker.id]);
    setHistory(prev => [...prev, nextIcebreaker].slice(-10));
  };

  // Save used questions to localStorage
  useEffect(() => {
    localStorage.setItem('icebreaker-used', JSON.stringify(usedQuestions));
  }, [usedQuestions]);

  // Track if user has ever favorited (for first-time popup)
  const [hasEverFavorited, setHasEverFavorited] = useState(() => {
    return localStorage.getItem('has-ever-favorited') === 'true';
  });

  // Toggle favorite function
  const toggleFavorite = () => {
    const isFavorite = favorites.some(fav => fav.id === currentIcebreaker.id);
    
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== currentIcebreaker.id));
    } else {
      setFavorites([...favorites, currentIcebreaker]);
      
      // If this is their first favorite
      if (!hasEverFavorited) {
        setIsSidebarOpen(true);
        setHasEverFavorited(true);
        setHasAnimatedOnce(true);
        localStorage.setItem('has-ever-favorited', 'true');
        localStorage.setItem('has-animated-sidebar', 'true');
      }
    }
  };

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('icebreaker-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  // When clicking a history/favorite item
  const handleCardClick = (icebreaker: Icebreaker) => {
    setCurrentIcebreaker(icebreaker);
    
    // Remove the clicked item from its current position and add it to the end
    setHistory(prev => {
      // Remove the clicked item if it exists
      const filteredHistory = prev.filter(item => item.id !== icebreaker.id);
      // Add it to the end
      return [...filteredHistory, icebreaker].slice(-10);
    });
  };

  // Add clearFavorites function
  const clearFavorites = () => {
    setFavorites([]);
    // Also clear from localStorage
    localStorage.setItem('favorites', JSON.stringify([]));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  // Add this with your other state declarations at the top
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(() => {
    return localStorage.getItem('has-animated-sidebar') === 'true';
  });

  return (
    <>
      <main className="flex flex-col min-h-screen">
        {/* Header - changed to bold */}
        <h1 className="fixed top-16 left-1/2 -translate-x-1/2 text-3xl md:text-5xl text-white z-50 font-bold tracking-wide">
          icebreakers
        </h1>

        {/* Card container moves up smoothly but not centered anymore */}
        <div className={`flex justify-center transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'mt-[20vh]' : 'mt-[30vh]'}
        `}>
          <IcebreakerCard 
            icebreaker={currentIcebreaker}
            isFavorite={favorites.some((fav) => fav.id === currentIcebreaker.id)}
            onToggleFavorite={toggleFavorite}
            onNext={getNextIcebreaker}
          />
        </div>

        {/* Sidebar slides up */}
        <div 
          className={`fixed bottom-0 left-0 right-0 h-[35vh] glass-sidebar 
            transition-transform duration-300 ease-in-out z-40
            ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full'}
            ${!hasAnimatedOnce && isSidebarOpen ? '[animation:slideUp_0.3s_ease-out]' : ''}`}
        >
          <Sidebar
            history={history}
            favorites={favorites}
            onRemoveFromFavorites={removeFromFavorites}
            onCardClick={handleCardClick}
            onClearFavorites={clearFavorites}
            onClearHistory={clearHistory}
          />
        </div>
      </main>

      {/* Apple-style Minimal Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed z-50 bottom-8 left-1/2 -translate-x-1/2 
          p-3.5
          bg-white/8
          backdrop-blur-md
          border border-white/20
          shadow-[0_2px_8px_rgba(0,0,0,0.08)]
          rounded-full
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          hover:bg-white/15
          active:scale-95
          ${isSidebarOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 text-white/80"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </>
  );
}

export default App;