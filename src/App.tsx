import { useState, useEffect } from 'react'; 
import { icebreakers, type Icebreaker } from './data/icebreakers';
import IcebreakerCard from './components/IcebreakerCard';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Signature from './components/Signature';

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

  // Add monochrome state
  const [isMonochrome, setIsMonochrome] = useState(false);

  // Get next icebreaker
  const getNextIcebreaker = () => {
    // First, get current state
    const currentUsedQuestions = [...usedQuestions];
    
    // Reset if we've used all questions
    if (currentUsedQuestions.length >= icebreakers.length) {
      setUsedQuestions([]);
      // Get a random icebreaker after reset
      const randomIndex = Math.floor(Math.random() * icebreakers.length);
      const nextIcebreaker = icebreakers[randomIndex];
      setCurrentIcebreaker(nextIcebreaker);
      setHistory(prev => [...prev, nextIcebreaker].slice(-10));
      return;
    }

    // Get available icebreakers
    const availableIcebreakers = icebreakers.filter(
      ib => !currentUsedQuestions.includes(ib.id)
    );

    // Safety check
    if (!availableIcebreakers.length) {
      setUsedQuestions([]);
      return;
    }

    // Get next icebreaker
    const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
    const nextIcebreaker = availableIcebreakers[randomIndex];

    // Update state
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
      
      // If this is their first favorite ever, show the sidebar
      if (!hasEverFavorited) {
        setTimeout(() => {  // Add a small delay so the heart animation finishes first
          setIsSidebarOpen(true);
          setHasEverFavorited(true);
          localStorage.setItem('has-ever-favorited', 'true');
        }, 300);
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

  const handleThemeChange = (isDark: boolean) => {
    setIsMonochrome(isDark);
  };

  // Add this near the top of your App component
  const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  };

  // Then modify your localStorage calls
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem('icebreaker-used', JSON.stringify(usedQuestions));
    }
  }, [usedQuestions]);

  return (
    <>
      <ThemeToggle onThemeChange={handleThemeChange} isDarkMode={isMonochrome} />
      <main className={`fixed inset-0 overflow-hidden min-h-[600px] ${
        isMonochrome 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20'
      }`}>
        {/* Title */}
        <h1 className="fixed top-16 left-1/2 -translate-x-1/2 text-3xl md:text-5xl text-white z-50 font-bold tracking-[0.15em] [text-shadow:_0_0_30px_rgba(255,255,255,0.15)] flex items-center">
          <div className="flex items-center opacity-0 animate-[fadeIn_1.6s_ease_forwards]">
            <span className="animate-[wordLeft_2s_ease_forwards]">ice</span>
            <span 
              className="relative text-white text-5xl font-black animate-slash-drop"
            >
              /
            </span>
            <span className="animate-[wordRight_2s_ease_forwards]">breakerrr</span>
          </div>
        </h1>

        {/* Card container */}
        <div className={`w-full transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'h-[80vh] min-h-[400px]' : 'h-screen min-h-[600px]'}
          flex items-center justify-center`}
        >
          <div className="w-full flex flex-col opacity-0 animate-[fadeIn_1s_ease_forwards] [animation-delay:1.5s]">
            <Signature />
            <div className="w-[90vw] max-w-[1200px] mx-auto">
              <IcebreakerCard
                icebreaker={currentIcebreaker}
                isFavorite={favorites.some((fav) => fav.id === currentIcebreaker.id)}
                onToggleFavorite={toggleFavorite}
                onNext={getNextIcebreaker}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`fixed bottom-0 left-0 right-0 
          h-[30vh] min-h-[200px]
          ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full'} 
          glass-sidebar 
          transition-transform duration-300 ease-in-out 
          z-40`}
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

      {/* Plus Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed z-50 bottom-8 left-1/2 -translate-x-1/2 
          px-3 py-3
          bg-white/10
          backdrop-blur-md
          border border-white/20
          shadow-[0_0_15px_rgba(255,255,255,0.15)]
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
          rounded-xl
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          hover:bg-white/20
          hover:scale-105
          active:scale-100
          transform-gpu
          after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-b after:from-white/15 after:to-transparent after:opacity-0 after:hover:opacity-100 after:transition-opacity
          opacity-0 animate-[fadeIn_1s_ease_forwards] [animation-delay:1.5s]
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