import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
           <Quote size={32} className="text-white opacity-50" />
        </div>
        <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed mb-12">
          "We've trusted FashionOS Studio with our campaigns for 6+ years. They always deliver imagery that moves product."
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-white/20">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Client Avatar" className="w-full h-full object-cover" />
          </div>
          <cite className="not-italic">
            <span className="block font-bold text-sm tracking-widest uppercase mb-1">Cristina Álvarez</span>
            <span className="block text-xs text-gray-500 uppercase tracking-wider">Creative Director, Atelier Eclipse</span>
          </cite>
        </div>
        
        <div className="mt-16">
           <a href="#" className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">See more client feedback &rarr;</a>
        </div>
      </div>
    </section>
  );
};