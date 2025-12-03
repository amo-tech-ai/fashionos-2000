import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">FashionOS Studio</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              Exceptional fashion imagery. <br/>
              <span className="italic text-gray-500">Every time.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md font-light">
              Runway, campaigns, ecommerce, and editorial — we help fashion brands look as premium as they feel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button>Book a Discovery Call</Button>
              <Button variant="outline">Explore Directory</Button>
            </div>

            <div className="pt-8 border-t border-gray-100 mt-8">
              <ul className="space-y-3">
                {['Runway & backstage coverage', 'Ecommerce & lookbooks', 'Campaigns, video & social content'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Collage */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
            <div className="absolute top-0 right-0 w-2/3 h-[500px] overflow-hidden rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
               <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800&h=1000" alt="Fashion Model Main" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-10 w-1/2 h-[350px] overflow-hidden rounded-sm shadow-xl border-8 border-white transition-transform duration-700 hover:scale-[1.02] z-10">
               <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600&h=800" alt="Fashion Model Secondary" className="w-full h-full object-cover" />
            </div>
             <div className="absolute top-20 left-0 w-1/3 h-[250px] overflow-hidden rounded-sm shadow-lg border-4 border-white z-0 grayscale opacity-80">
               <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=500&h=600" alt="Fashion Texture" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Mobile Only Image */}
           <div className="md:hidden w-full aspect-[4/5] overflow-hidden rounded-sm">
             <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800&h=1000" alt="Fashion Model" className="w-full h-full object-cover" />
           </div>

        </div>
      </div>
    </section>
  );
};