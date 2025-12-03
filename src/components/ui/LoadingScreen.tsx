import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-t-2 border-black rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-2 border-gray-300 rounded-full animate-spin-reverse"></div>
      </div>
      <h2 className="font-serif text-2xl tracking-widest animate-pulse">FashionOS.</h2>
      <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-2">Loading Experience</p>
    </div>
  );
};