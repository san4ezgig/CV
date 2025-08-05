import { useState } from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
};

const Checkbox = ({ checked, onChange, label, disabled = false }: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const getImageSrc = () => {
    if (checked) return '/checkbox_active.png';
    if (isHovered && !disabled) return '/checkbox_hovered.png';
    return '/checkbox.png';
  };

  return (
    <div 
      className={`flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleClick}
    >
      <div
        className="flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-105"
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={getImageSrc()} 
          alt={checked ? 'Checked' : 'Unchecked'} 
          className="w-6 h-6" 
        />
      </div>
      {label && (
        <span className={`select-none ${disabled ? 'text-gray-400' : 'text-white'}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox; 