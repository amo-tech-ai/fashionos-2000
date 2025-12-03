import React from 'react';
import { Button } from '../Button';

export const ProductHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-editorial-beige/10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              Product Photography.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
              Premium product photography at its best. Delivering flawless, high-detail digital images that drive sales.
            </p>
            
            <div className="pt-4">
              <Button>Request a Quote</Button>
            </div>
          </div>

          {/* Right Column: Hero Image Composition */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
             {/* Main Image - Jewelry/Necklace */}
             <div className="absolute top-0 right-0 w-2/3 h-[500px] overflow-hidden shadow-2xl z-10">
               <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=1000" alt="Luxury Jewelry Necklace" className="w-full h-full object-cover" />
             </div>
             
             {/* Accent 1 - Perfume/Luxury */}
             <div className="absolute bottom-10 left-10 w-1/3 h-[300px] overflow-hidden shadow-xl border-4 border-white z-20">
               <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=400&h=500" alt="Luxury Perfume" className="w-full h-full object-cover" />
             </div>

             {/* Accent 2 - Ring Detail */}
             <div className="absolute top-10 left-20 w-40 h-40 overflow-hidden shadow-lg z-0 grayscale opacity-80">
               <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300&h=300" alt="Gold Ring Detail" className="w-full h-full object-cover" />
             </div>
          </div>
          
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[400px] overflow-hidden shadow-lg">
             <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=1000" alt="Luxury Jewelry Product" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};