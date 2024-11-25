import { useState, useEffect } from 'react'; 
import { icebreakers, type Icebreaker } from './data/icebreakers';
import IcebreakerCard from './components/IcebreakerCard';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Signature from './components/Signature';

function App() {
  // Check if it's user's first visit
  const [isFirstVisit] = useState(() => {
    return !localStorage.getItem('has-visited-before');
  });

  // Initial icebreaker state (potato question for first visit)
  const [currentIcebreaker, setCurrentIcebreaker] = useState<Icebreaker>(() => {
    if (isFirstVisit) {
      localStorage.setItem('has-visited-before', 'true');
      return icebreakers.find(ib => ib.id === '1') || icebreakers[0];
    }
    const randomIndex = Math.floor(Math.random() * icebreakers.length);
    return icebreakers[randomIndex];
  });

  const [questionCount, setQuestionCount] = useState(1);

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
    const currentUsedQuestions = [...usedQuestions];
    
    if (currentUsedQuestions.length >= icebreakers.length) {
      setUsedQuestions([]);
      setQuestionCount(1);
      const randomIndex = Math.floor(Math.random() * icebreakers.length);
      const nextIcebreaker = icebreakers[randomIndex];
      setCurrentIcebreaker(nextIcebreaker);
      setHistory(prev => [...prev, nextIcebreaker].slice(-10));
      return;
    }

    const availableIcebreakers = icebreakers.filter(
      ib => !currentUsedQuestions.includes(ib.id)
    );

    if (!availableIcebreakers.length) {
      setUsedQuestions([]);
      setQuestionCount(1);
      return;
    }

    let nextIcebreaker: Icebreaker;

    // Only apply special vibe rules for first-time visitors
    if (isFirstVisit) {
      // For questions 2-4, ensure vibe questions
      if (questionCount >= 1 && questionCount <= 3) {
        const availableVibeIcebreakers = availableIcebreakers.filter(ib => ib.vibe);
        if (availableVibeIcebreakers.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableVibeIcebreakers.length);
          nextIcebreaker = availableVibeIcebreakers[randomIndex];
        } else {
          const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
          nextIcebreaker = availableIcebreakers[randomIndex];
        }
      } else {
        // After first 4 questions, completely random
        const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
        nextIcebreaker = availableIcebreakers[randomIndex];
      }
    } else {
      // For returning visitors, completely random selection
      const randomIndex = Math.floor(Math.random() * availableIcebreakers.length);
      nextIcebreaker = availableIcebreakers[randomIndex];
    }

    // Update state
    setCurrentIcebreaker(nextIcebreaker);
    setUsedQuestions(prev => [...prev, nextIcebreaker.id]);
    setHistory(prev => [...prev, nextIcebreaker].slice(-10));
    setQuestionCount(prev => prev + 1);
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
      // Remove from favorites
      setFavorites(prev => prev.filter(fav => fav.id !== currentIcebreaker.id));
    } else {
      // Add to favorites
      setFavorites(prev => [...prev, currentIcebreaker]);
      
      if (!hasEverFavorited) {
        setTimeout(() => {
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

  // When clicking a history/favorite item
  const handleCardClick = (icebreaker: Icebreaker) => {
    setCurrentIcebreaker(icebreaker);
    
    // Reorder in history
    setHistory(prev => {
      const filteredHistory = prev.filter(item => item.id !== icebreaker.id);
      return [...filteredHistory, icebreaker].slice(-10);
    });

    // If it's a favorite, reorder in favorites too
    if (favorites.some(fav => fav.id === icebreaker.id)) {
      setFavorites(prev => {
        const filteredFavorites = prev.filter(fav => fav.id !== icebreaker.id);
        return [...filteredFavorites, icebreaker];
      });
    }
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
    <div className={`fixed inset-0 ${isMonochrome ? 'dark-theme' : ''}`}>
      <ThemeToggle 
        onThemeChange={handleThemeChange} 
        isDarkMode={isMonochrome} 
      />
      <main className={`fixed inset-0 
        overflow-hidden 
        min-h-[100vh]
        [@supports(-webkit-touch-callout:none)_and_(display:standalone)]:min-h-[calc(100vh+env(safe-area-inset-top)+env(safe-area-inset-bottom))]
        ${isMonochrome 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20'
        }`}>
        {/* Title - adjust top spacing */}
        <h1 
          onClick={() => window.location.reload()} 
          className="title-text fixed 
            left-1/2 -translate-x-1/2
            top-[calc(env(safe-area-inset-top)+7rem)] sm:top-[calc(env(safe-area-inset-top)+4rem)] 
            text-4xl md:text-6xl lg:text-7xl 
            text-white z-50 
            font-['Space_Grotesk'] 
            tracking-[0.05em] 
            [text-shadow:_0_0_30px_rgba(255,255,255,0.15)] 
            hover:cursor-pointer 
            [animation:subtleFloat_4s_ease-in-out_infinite]
            opacity-0"
        >
          <div className="flex items-center opacity-0 animate-[fadeIn_1.6s_ease_forwards] [animation-delay:0.1s]">
            <span className="animate-[wordLeft_2s_ease_forwards]">ice</span>
            <span className="relative text-white text-[1em] md:text-[1em] lg:text-[1em] font-['Space_Grotesk'] animate-slash-drop">/</span>
            <span className="animate-[wordRight_2s_ease_forwards]">breakers</span>
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
                isDarkMode={isMonochrome}
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
          bg-[rgba(255,255,255,0.15)]
          backdrop-blur-md
          border border-white/20
          shadow-[0_0_15px_rgba(255,255,255,0.15)]
          rounded-xl
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          transform-gpu
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
          hover:bg-white/20
          hover:scale-105
          active:scale-100
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