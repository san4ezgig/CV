import { useState, useRef, useEffect } from 'react';

type MusicControlsProps = {
  className?: string;
  scale?: number;
};

const MusicControls = ({ className = '', scale = 1 }: MusicControlsProps) => {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicEnabled) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicEnabled]);

  const handleMusicToggle = () => {
    setIsMusicEnabled(prev => !prev);
  };

  const getBackgroundClass = () => {
    if (isMusicEnabled) return 'bg-[url(/checkbox_active.png)]';
    if (isHovered) return 'bg-[url(/checkbox_hovered.png)]';
    return 'bg-[url(/checkbox.png)]';
  };

  return (
    <div className={className}>
      <button
        type="button"
        className="relative border-transparent bg-transparent cursor-pointer transition-transform duration-200 w-full text-black font-bold tracking-wider flex items-center justify-end"
        style={{
          fontSize: `${16 * scale}px`,
          padding: `${5 * scale}px`,
          paddingRight: `${48 * scale}px`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleMusicToggle}
      >
        <div 
          className={`relative z-10 transition-transform duration-200 ease-in-out hover:scale-105 ${getBackgroundClass()} bg-cover bg-center bg-no-repeat`}
          style={{
            width: `${24 * scale}px`,
            height: `${24 * scale}px`
          }}
        />
        <span className="relative z-10">Music</span>
      </button>
      <audio 
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music.mp3`}
        loop
        preload="auto"
      />
    </div>
  );
};

export default MusicControls; 