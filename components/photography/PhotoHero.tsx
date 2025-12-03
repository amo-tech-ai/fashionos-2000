import React from 'react';
import { Button } from '../Button';

export const PhotoHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Photography Services</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              Ecommerce Fashion Photography <br />
              <span className="italic text-gray-500">& Video</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
              Premium product, editorial, and on-model photography created trusted by prominent clients, from high-end to fast fashion.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button>Book a Shoot</Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
               <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Fast Turnaround
               </div>
               <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                  Studio or On-Location
               </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-7 relative">
             <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
               <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200&h=900" alt="Ecommerce Fashion Hero" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
             {/* Decorative collage element */}
             <div className="hidden lg:block absolute -bottom-12 -left-12 w-1/3 aspect-[3/4] rounded-sm shadow-2xl border-4 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=400&h=533" alt="Editorial Detail" className="w-full h-full object-cover" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};