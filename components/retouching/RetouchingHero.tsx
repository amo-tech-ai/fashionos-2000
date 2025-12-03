import React from 'react';
import { Button } from '../Button';

export const RetouchingHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-editorial-beige/10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-editorial-black">
              Retouching.
            </h1>
            <p className="text-xl font-medium tracking-wide text-gray-800">
              Beautiful, natural, premium finishing — for over 20 years.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
              FashionOS delivers high-end creative retouching for beauty, fashion, product, editorial, and e-commerce.
            </p>
            <div className="pt-4">
              <Button>Book Retouching</Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
            <div className="absolute top-0 right-0 w-3/4 h-[550px] overflow-hidden shadow-2xl z-10 bg-gray-100 rounded-sm">
               {/* High-end beauty portrait */}
               <img src="https://images.unsplash.com/photo-1576158189569-b223c6f820c7?auto=format&fit=crop&q=80&w=900&h=1200" alt="Beauty Retouching Hero" className="w-full h-full object-cover" />
            </div>
             {/* Decorative Element */}
            <div className="absolute bottom-10 left-10 w-1/3 h-[300px] overflow-hidden shadow-xl border-4 border-white z-20 bg-gray-200 rounded-sm">
               <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=400&h=600" alt="Skin Detail" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[500px] overflow-hidden shadow-lg rounded-sm">
             <img src="https://images.unsplash.com/photo-1576158189569-b223c6f820c7?auto=format&fit=crop&q=80&w=800&h=1000" alt="Retouching Hero" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};