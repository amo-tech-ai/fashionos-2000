import React from 'react';
import { Button } from '../Button';

export const StudioHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              FashionOS <br/> Studios.
            </h1>
            <span className="text-xl font-light text-gray-500 italic">Film & Photo Studio Hire</span>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
              A premium 1500 sq. ft. daylight studio in North London designed for high-end fashion, e-commerce, and editorial productions.
            </p>
            
            <div className="pt-4">
              <Button>Book the Studio</Button>
            </div>
          </div>

          {/* Right Column: Editorial Collage */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
             {/* Main Image - Wide Studio Shot */}
             <div className="absolute top-0 right-0 w-3/4 h-[500px] overflow-hidden shadow-2xl z-10 bg-gray-100">
               <img src="https://images.unsplash.com/photo-1596706436423-f27303c735d4?auto=format&fit=crop&q=80&w=1200&h=800" alt="Studio Interior Wide" className="w-full h-full object-cover" />
             </div>
             
             {/* Accent 1 - Equipment Detail */}
             <div className="absolute bottom-10 left-0 w-1/3 h-[300px] overflow-hidden shadow-xl border-4 border-white z-20 bg-gray-200">
               <img src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=400&h=600" alt="Lighting Equipment" className="w-full h-full object-cover" />
             </div>

             {/* Accent 2 - Interior Detail */}
             <div className="absolute top-10 left-10 w-48 h-48 overflow-hidden shadow-lg z-0 grayscale opacity-80 bg-gray-300">
               <img src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&q=80&w=400&h=400" alt="Studio Corner" className="w-full h-full object-cover" />
             </div>
          </div>
          
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[400px] overflow-hidden shadow-lg">
             <img src="https://images.unsplash.com/photo-1596706436423-f27303c735d4?auto=format&fit=crop&q=80&w=1200&h=800" alt="Studio Interior" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};