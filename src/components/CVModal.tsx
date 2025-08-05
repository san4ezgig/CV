import { type ReactNode, useState, useEffect } from 'react';

type CVModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const CVModal = ({ isOpen, onClose, title, children }: CVModalProps) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div 
        className="relative p-8 rounded-lg overflow-y-auto max-h-[90vh] bg-[url(/popup_background.png)] bg-cover bg-center" 
        style={{ 
          width: '650px', 
          height: '600px'
        }}
      >
        <h2 className="absolute top-3 left-12 text-2xl font-bold text-white mb-6">{title.toUpperCase()}</h2>
        <div className="pl-8 mt-12 text-white max-h-[80%] overflow-y-auto">
          {children}
        </div>
        <button 
          className="absolute bottom-12 right-6 bg-transparent border-none cursor-pointer hover:rotate-6 transition duration-300 ease-in-out flex items-center justify-center w-[170px] h-12"
          onClick={onClose}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <div 
            className={`absolute inset-0 w-full h-full ${isButtonHovered ? 'bg-[url(/button_hovered.png)]' : 'bg-[url(/button.png)]'} bg-cover bg-center bg-no-repeat`}
          />
          <span className={`absolute font-bold z-10 ${isButtonHovered ? 'text-black' : 'text-white'}`}>Close</span>
        </button>
      </div>
    </div>
  );
};

export default CVModal; 