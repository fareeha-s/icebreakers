import React, { useState, useEffect } from 'react';
import { icebreakers, type Icebreaker } from './data/icebreakers';
import IcebreakerCard from './components/IcebreakerCard';
import Sidebar from './components/Sidebar';
import { Sparkles, ChevronRight, Heart, Clock } from 'lucide-react';
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
    // If we've shown all questions, reset the used questions
    if (usedQuestions.length === icebreakers.length) {
      setUsedQuestions([]);
    }

    // Filter out used questions
    const availableIcebreakers = icebreakers.filter(
      ib => !usedQuestions.includes(ib.id)
    );

    // Get random question from available ones
    const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
    const nextIcebreaker = availableIcebreakers[randomIndex];

    setCurrentIcebreaker(nextIcebreaker);
    setUsedQuestions(prev => [...prev, nextIcebreaker.id]);
    
    // Simplified history update
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
      
      // If this is their first favorite, show sidebar and mark as favorited
      if (!hasEverFavorited) {
        setIsSidebarOpen(true);
        setHasEverFavorited(true);
        localStorage.setItem('has-ever-favorited', 'true');
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

  return (
    <div className="flex min-h-screen overflow-hidden">
      <ThemePicker />
      {/* Header - Remove toggle, keep just the title */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4 landscape:p-2 md:p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <h1 className="text-xl landscape:text-lg md:text-2xl font-bold text-white">icebreakers.wiki</h1>
          </div>
        </div>
      </header>

      {/* Main Content with Credit Line */}
      <div className={`fixed left-1/2 transform transition-all duration-200 
        ${isSidebarOpen
          ? 'top-20 -translate-x-1/2 translate-y-0' 
          : 'top-1/2 -translate-x-1/2 -translate-y-1/2'
        }`
      }>
        <IcebreakerCard
          icebreaker={currentIcebreaker}
          onNext={getNextIcebreaker}
          onToggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav) => fav.id === currentIcebreaker.id)}
        />
        
        {/* Credit Line with LinkedIn Link */}
        <div className="flex justify-end mt-2">
          <a 
            href="https://www.linkedin.com/in/fareehas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200 font-medium tracking-wide"
          >
            sincerely, Fareeha
          </a>
        </div>
      </div>

      {/* Sidebar - Bottom sheet */}
      <div 
        className={`fixed z-40 glass-sidebar transition-all duration-200 ease-in-out
          bottom-0 left-0 right-0 
          h-[50vh] 
          rounded-t-3xl
          ${isSidebarOpen 
            ? 'translate-y-0' 
            : 'translate-y-full'
          }`}
      >
        <Sidebar
          history={history}
          favorites={favorites}
          onRemoveFromFavorites={removeFromFavorites}
          onCardClick={handleCardClick}
        />
      </div>

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
    </div>
  );
}

export default App;
