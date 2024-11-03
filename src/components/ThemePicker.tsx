import { useState } from 'react';

const themes = [
  {
    id: 'default',
    name: 'Color',
    gradient: 'bg-gradient-to-br from-[#BFB8E2] via-[#C2E2D8] to-[#E2C8C8]',
    textColor: 'text-white',
    glassClass: 'glass-card'
  },
  {
    id: 'dark',
    name: 'Dark',
    gradient: 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900',
    textColor: 'text-white',
    glassClass: 'glass-card'
  }
];

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);

  const setTheme = (gradientClasses: string) => {
    document.body.className = `min-h-screen bg-gradient-to-br ${gradientClasses}`;
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 glass-button rounded-full hover:scale-105 transition-transform duration-200"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 p-2 glass-card rounded-2xl">
          <div className="space-y-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.gradient)}
                className="flex items-center gap-2 w-full p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${theme.gradient}`} />
                <span className="text-sm text-white">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}