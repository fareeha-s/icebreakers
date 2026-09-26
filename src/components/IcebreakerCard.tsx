import { Check, Copy, Heart, Loader2, Send, Slack, Users } from 'lucide-react';
import type { Icebreaker } from '../data/icebreakers';
import { useState, useEffect } from 'react';
import { API_URL, SLACK_INSTALL_URL } from '../lib/rooms';

interface IcebreakerCardProps {
  icebreaker: Icebreaker;
  onNext: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  isDarkMode: boolean;
  onStartRoom: () => Promise<void>;
}

export default function IcebreakerCard({
  icebreaker,
  onNext,
  onToggleFavorite,
  isFavorite,
  isDarkMode,
  onStartRoom,
}: IcebreakerCardProps) {
  const [isIOSSafari, setIsIOSSafari] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [copied, setCopied] = useState(false);
  const [startingRoom, setStartingRoom] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    
    // Keep existing iOS Safari detection
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsIOSSafari(isIOS && isSafari);

    // Expanded in-app browser detection
    const isInstagram = /Instagram/.test(userAgent);
    const isFacebook = /FBAN|FBAV/.test(userAgent);
    const isLinkedIn = /LinkedInApp/.test(userAgent);
    const isWeChat = /MicroMessenger/.test(userAgent);
    const isLine = /Line/.test(userAgent);
    const isTwitter = /Twitter/.test(userAgent);
    const isSlack = /Slack/.test(userAgent);
    const isDiscord = /Discord/.test(userAgent);
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(userAgent);
    
    setIsInAppBrowser(
      isInstagram || 
      isFacebook || 
      isLinkedIn || 
      isWeChat || 
      isLine || 
      isTwitter || 
      isSlack || 
      isDiscord || 
      isWebView
    );
  }, []);

  // Separate button components for different platforms
  const BrowserButtons = () => (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Only Heart button */}
      <button
        onClick={onToggleFavorite}
        className={`relative p-3.5 rounded-full
          bg-[rgba(255,255,255,0.15)]
          backdrop-blur-md
          border border-white/20
          transition-colors
          ${isFavorite 
            ? 'hover:shadow-[0_0_20px_rgba(255,182,193,0.3)]'
            : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]'
          }
          active:scale-95`}
      >
        <Heart 
          className={`w-5 h-5 transition-colors
            ${isFavorite 
              ? 'text-rose-200 fill-rose-200'
              : 'text-white fill-none'
            }`}
        />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="relative px-4 py-2.5 rounded-xl 
          flex items-center gap-1.5 
          bg-[rgba(255,255,255,0.15)]
          backdrop-blur-md
          border border-white/20
          transition-colors
          active:scale-95"
      >
        <span className="text-white">next →</span>
      </button>
    </div>
  );

  const IOSSafariButtons = () => (
    <div className="flex items-center gap-3">
      {/* Only Heart button */}
      <button
        onClick={onToggleFavorite}
        className={`relative p-3.5 rounded-full
          ${!isDarkMode              
            ? 'bg-[#AADDEE]/90'      
            : 'bg-[rgba(255,255,255,0.15)]'
          }
          active:opacity-80
          transition-opacity`}
      >
        <Heart 
          className={`w-5 h-5
            ${isFavorite 
              ? isDarkMode
                ? 'text-white fill-white'
                : 'text-rose-200 fill-rose-200'
              : 'text-white fill-none'
            }`}
        />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className={`relative px-5 py-2.5 rounded-xl 
          ${!isDarkMode               
            ? 'bg-[#AADDEE]/90'      
            : 'bg-[rgba(255,255,255,0.15)]'
          }
          active:opacity-80
          transition-opacity`}
      >
        <span className="text-white font-medium">next →</span>
      </button>
    </div>
  );

  const flash = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2000);
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older and in-app browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const handleCopy = async () => {
    await copyText(icebreaker.question);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    flash('Copied ✨');
  };

  const handleShare = async () => {
    const shareText = `Today's team question:\n${icebreaker.question}\n\nhttps://icebreakers.wiki`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch (error) {
        if ((error as Error).name === 'AbortError') return; // closed the share sheet
      }
    }
    await copyText(shareText);
    flash('Copied with a link ✨');
  };

  const handleStartRoom = async () => {
    setStartingRoom(true);
    try {
      await onStartRoom();
    } catch {
      flash("Couldn't start a room. Try again?");
    } finally {
      setStartingRoom(false);
    }
  };

  const iconButton = 'p-2.5 md:p-3 transition-colors hover:opacity-80 active:scale-95 text-white/60';

  return (
    <div className="w-full h-[260px] sm:h-[300px] md:h-[400px] animate-card-entrance">
      <div className="glass-card w-full h-full 
        px-6 sm:px-8 md:px-12 lg:px-16 
        pt-6 pb-28
        sm:pt-8 sm:pb-28
        md:pb-32
        max-w-[90vw] mx-auto
        relative">
        {/* Top section with category and actions */}
        <div className="flex items-center justify-between mb-2 sm:mb-8">
          <span className="text-base text-white/80 uppercase tracking-wider font-medium">
            {icebreaker.category}
          </span>
          <div className="flex items-center -mr-2.5 md:-mr-3">
            {API_URL && (
              <button
                onClick={handleStartRoom}
                disabled={startingRoom}
                title="Start a live room: everyone answers on their phone, then reveal"
                aria-label="Start a live room"
                className={`${iconButton} flex items-center gap-1.5`}
              >
                {startingRoom ? <Loader2 className="w-5 h-5 animate-spin" /> : <Users className="w-5 h-5" />}
                <span className="hidden sm:inline text-sm">live room</span>
              </button>
            )}
            {SLACK_INSTALL_URL && (
              <a
                href={SLACK_INSTALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Add icebreakers to Slack"
                aria-label="Add icebreakers to Slack"
                className={iconButton}
              >
                <Slack className="w-5 h-5" />
              </a>
            )}
            <button onClick={handleCopy} title="Copy question" aria-label="Copy question" className={iconButton}>
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
            <button onClick={handleShare} title="Share" aria-label="Share" className={iconButton}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Rest of the card content */}
        <div className="mb-2 sm:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mt-3 text-white font-medium">
            {icebreaker.question}
          </h2>
        </div>

        {/* Heart and Next buttons at bottom */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 md:right-12 lg:right-16 
          flex items-center gap-3 md:gap-4
          z-[999]">
          {(isIOSSafari || isInAppBrowser) ? <IOSSafariButtons /> : <BrowserButtons />}
        </div>
      </div>
      {/* Toast notification */}
      <div className={`
        fixed bottom-24 left-1/2 -translate-x-1/2
        px-4 py-2 rounded-lg
        bg-white/20 backdrop-blur-md
        border border-white/20
        text-white text-sm
        transition-all duration-300
        pointer-events-none
        ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        {toast.message}
      </div>
    </div>
  );
}

// Commenting out unused function
/*
function getCategoryColor(category: 'fun' | 'professional' | 'introspective' | 'creative') {
  switch (category) {
    case 'fun':
      return 'bg-emerald-400';
    case 'professional':
      return 'bg-blue-400';
    case 'introspective':
      return 'bg-purple-400';
    case 'creative':
      return 'bg-orange-400';
    default:
      return 'bg-gray-400';
  }
}
*/