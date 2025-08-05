import { useState, useEffect, useMemo } from 'react';
import CVModal from './CVModal';
import CVModalContent from './CVModalContent';
import MusicControls from './MusicControls';

function getCoveredBackgroundPointCoords({
  containerEl,
  imageWidth,
  imageHeight,
  pointX,
  pointY,
  baseWidth
}: {
  containerEl: HTMLElement;
  imageWidth: number;
  imageHeight: number;
  pointX: number;
  pointY: number;
  baseWidth: number;
}) {
  const containerWidth = containerEl.clientWidth;
  const containerHeight = containerEl.clientHeight;

  const containerRatio = containerWidth / containerHeight;
  const imageRatio = imageWidth / imageHeight;

  let scale, scaledHeight, offsetX, offsetY;

  if (containerRatio > imageRatio) {
    scale = containerWidth / imageWidth;
    scaledHeight = imageHeight * scale;
    offsetX = 0; 
    offsetY = (containerHeight - scaledHeight) / 2;
  } else {
    scale = containerHeight / imageHeight;
    scaledHeight = containerHeight;
    offsetY = 0;
    offsetX = 0;
  }

  const finalX = pointX * scale + offsetX;
  const finalY = pointY * scale + offsetY;
  const targetWidth = baseWidth * scale;

  return { x: finalX, y: finalY, width: targetWidth, scale };
}

function getCoveredBackgroundPointCoordsCentered({
  containerEl,
  imageWidth,
  imageHeight,
  baseWidth,
  pointX,
  pointY
}: {
  containerEl: HTMLElement;
  imageWidth: number;
  imageHeight: number;
  pointX: number;
  pointY: number;
  baseWidth: number;
}) {
  const containerWidth = containerEl.clientWidth;
  const containerHeight = containerEl.clientHeight;

  let offsetX, offsetY;
  if (containerWidth > imageWidth) {
    offsetX = (containerWidth - imageWidth) / 2 + pointX;
  } else {
    offsetX = (containerWidth - baseWidth) / 2;
  }

  if (containerHeight > imageHeight) {
    offsetY = (containerHeight - imageHeight) / 2 + pointY;
  } else {
    offsetY = pointY - (imageHeight -containerHeight ) / 2;
  }

  const screenX = offsetX;
  const screenY = offsetY;

  return {
    x: screenX,
    y: screenY,
    scale: 1,
    width: baseWidth
  };
}

type MainMenuProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const MainMenu = ({ containerRef }: MainMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [menuLayout, setMenuLayout] = useState({ x: 0, y: 0, width: 360, scale: 1 });
  const items = useMemo(() => ['Personal Info', 'Skills', 'Experience', 'Education', 'Languages'], []);

  const updateMenuPosition = () => {
    const container = containerRef.current;
    if (!container) return;
    const isMdBreakpoint = window.innerWidth >= 768;

    if (isMdBreakpoint) {
      const coords = getCoveredBackgroundPointCoords({
        containerEl: container,
        imageWidth: 1024,
        imageHeight: 768,
        pointX: 115,
        pointY: 390,
        baseWidth: 281
      });
      
      setMenuLayout(coords);
      return;
    }
    
    const coords = getCoveredBackgroundPointCoordsCentered({
      containerEl: container,
      imageWidth: 430,
      imageHeight: 768,
      pointX: 76,
      pointY: 394,
      baseWidth: 281
    });
    console.log(coords);
    setMenuLayout(coords);
    return;
  };

  useEffect(() => {
    const container = containerRef.current;
    
    updateMenuPosition();

    const resizeObserver = new ResizeObserver(() => {
      updateMenuPosition();
    });

    if (container) {
      resizeObserver.observe(container);
    }

    const handleResize = () => {
      updateMenuPosition();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setSelectedItem(items[activeIndex]);
        return;
      }
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => 
          prev === null ? 0 : (prev + 1) % items.length
        );
        return;
      }
      
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => 
          prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [items, activeIndex]);

  return (
    <>
        <ul 
          className="absolute aspect-[281/338] flex flex-col text-center text-black z-10 font-bold tracking-wider list-none bg-[url(/menu_background.png)] bg-cover bg-center bg-no-repeat"
          style={{
            width: `${menuLayout.width}px`,
            left: `${menuLayout.x}px`,
            top: `${menuLayout.y}px`,
            paddingTop: `${32 * menuLayout.scale}px`,
          }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                className={`relative border-transparent bg-transparent cursor-pointer transition-transform duration-200 w-full ${activeIndex === index ? 'scale-120' : ''}`}
                style={{
                  fontSize: `${16 * menuLayout.scale}px`,
                  padding: `${5 * menuLayout.scale}px`
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                {activeIndex === index && (
                  <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-[url(/item_background.png)] bg-cover bg-center bg-no-repeat" />
                )}
                <div className="relative z-10">
                  {item}
                </div>
              </button>
            </li>
          ))}
          <li className="flex justify-center" style={{ marginTop: `${1 * menuLayout.scale}px` }}>
            <MusicControls className="w-full" scale={menuLayout.scale} />
          </li>
        </ul>
      
      <CVModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        title={selectedItem || ''}
      >
        {selectedItem && <CVModalContent section={selectedItem} />}
      </CVModal>
    </>
  );
};

export default MainMenu; 