import React from 'react';
import { Howl } from 'howler';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const clickSound = new Howl({
  src: ['/sounds/sound-click.mp3'],
  volume: 0.5,
});

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    clickSound.play();
    onClick?.(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-4 py-2 text-white font-bold rounded transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}; 