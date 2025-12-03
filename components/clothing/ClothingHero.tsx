import React from 'react';
import { Button } from '../Button';

export const ClothingHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              Clothing Photography.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
              Premium apparel photography that delivers results. On-model, Studio, Flats, Ghost & Invisible Mannequin.
            </p>
            
            <div className="pt-4">
              <Button>Book a Shoot</Button>
            </div>
          </div>

          {/* Right Column: Editorial Collage */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
             {/* Main Image */}
             <div className="absolute top-0 right-0 w-3/4 h-[550px] overflow-hidden shadow-2xl z-10 bg-gray-200">
               <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900&h=1200" alt="Clothing Hero Model" className="w-full h-full object-cover" />
             </div>
             
             {/* Accent 1 */}
             <div className="absolute bottom-10 left-0 w-1/3 h-[350px] overflow-hidden shadow-xl border-4 border-white z-20 bg-gray-300">
               <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400&h=600" alt="Clothing Detail" className="w-full h-full object-cover" />
             </div>

             {/* Accent 2 */}
             <div className="absolute top-20 left-10 w-48 h-48 overflow-hidden shadow-lg z-0 grayscale opacity-80 bg-gray-400">
               <img src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=400&h=400" alt="Fabric Texture" className="w-full h-full object-cover" />
             </div>
          </div>
          
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[500px] overflow-hidden shadow-lg">
             <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=1000" alt="Clothing Hero" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};