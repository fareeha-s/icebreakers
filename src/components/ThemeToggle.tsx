interface ThemeToggleProps {
  onThemeChange?: (isDark: boolean) => void;
  isDarkMode: boolean;
}

export default function ThemeToggle({ onThemeChange, isDarkMode }: ThemeToggleProps) {
  const toggleTheme = () => {
    onThemeChange?.(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 top-8 right-8
        [@supports(-webkit-touch-callout:none)_and_(display:standalone)]:top-[calc(env(safe-area-inset-top)+3.5rem)]
        opacity-0 animate-[fadeIn_1s_ease_forwards] [animation-delay:1.5s]
        px-3 py-3
        bg-[rgba(255,255,255,0.15)]
        backdrop-blur-md
        border border-white/20
        shadow-[0_0_15px_rgba(255,255,255,0.15)]
        hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
        rounded-xl
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:bg-white/20
        hover:scale-105
        active:scale-100
        transform-gpu"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-5 h-5 text-white hover:text-white/80"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      >
        {!isDarkMode ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="3" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21" />
            <line x1="5" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="19" y2="12" />
            <line x1="7.05" y1="7.05" x2="5.636" y2="5.636" />
            <line x1="18.364" y1="18.364" x2="16.95" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="18.364" y2="5.636" />
            <line x1="5.636" y1="18.364" x2="7.05" y2="16.95" />
          </>
        )}
      </svg>
    </button>
  );
}
