import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 ease-out transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-editorial-black text-white hover:bg-gray-800 hover:shadow-lg",
    secondary: "bg-editorial-gray text-editorial-black hover:bg-gray-200",
    outline: "border border-editorial-black text-editorial-black hover:bg-editorial-black hover:text-white",
    white: "bg-white text-editorial-black hover:bg-gray-100 shadow-md",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};