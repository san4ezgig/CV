import { useRef } from 'react';
import MainMenu from './components/MainMenu';

function App() {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen bg-black md:bg-transparent w-screen overflow-hidden relative">
      <div ref={desktopContainerRef} className="hidden md:block relative h-full w-full bg-cover bg-left bg-no-repeat bg-[url(/background.png)]">
        <video 
          className="absolute top-0 right-0 w-1/2 h-3/4 object-cover -z-10"
          src="/background_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <MainMenu containerRef={desktopContainerRef} />
      </div>

      <div ref={mobileContainerRef} className="block md:hidden h-full w-full bg-center relative bg-no-repeat bg-[url(/background_mobile.png)]">
        <MainMenu containerRef={mobileContainerRef} />
      </div>
    </div>
  )
}

export default App

