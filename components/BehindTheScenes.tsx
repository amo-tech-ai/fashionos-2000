import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './Button';

export const BehindTheScenes: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden flex items-center justify-center min-h-[600px]">
      <div className="absolute inset-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1598550476439-d44b584988f5?auto=format&fit=crop&q=80&w=1920&h=1080" alt="BTS Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      <div className="relative z-10 text-center text-white px-6">
        <button className="w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300 group">
           <Play size={32} className="ml-1 fill-white text-white" />
        </button>
        <h2 className="font-serif text-5xl md:text-7xl mb-6">Behind the scenes.</h2>
        <p className="text-gray-300 text-lg font-light mb-10 max-w-lg mx-auto">
          Take a peek at how we plan, light, and shoot your campaigns.
        </p>
        <Button variant="white" className="text-xs">Watch the Studio Tour</Button>
      </div>
    </section>
  );
};