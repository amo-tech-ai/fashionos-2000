import React from 'react';
import { Button } from './Button';

export const EcommerceProduct: React.FC = () => {
  return (
    <section className="py-32 bg-[#121418] text-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Ecommerce Product Photography.</h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed max-w-md">
              Clean, high-fidelity product photography increases conversion and reduces returns. We provide styling, shooting, and retouching optimized for Shopify, Amazon, and luxury marketplaces.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                 <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1 text-[10px]">01</div>
                 <div>
                   <h4 className="font-bold text-sm mb-1">Consistent Lighting & Styling</h4>
                   <p className="text-xs text-gray-500">Ensure your collection looks cohesive on the grid.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1 text-[10px]">02</div>
                 <div>
                   <h4 className="font-bold text-sm mb-1">On-Model, Flat-Lay, or Ghost Mannequin</h4>
                   <p className="text-xs text-gray-500">Versatile shooting styles to match your brand guidelines.</p>
                 </div>
              </div>
            </div>

            <Button variant="white" className="text-xs">View Ecommerce Packages</Button>
          </div>

          <div className="lg:col-span-6 relative h-[500px] flex items-center justify-center">
            {/* Abstract arrangement of product shots */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#2A2A2A] rounded-lg shadow-2xl transform -rotate-6 z-10 overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400&h=400" alt="Sneaker Product Shot" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#2A2A2A] rounded-lg shadow-2xl transform rotate-3 z-20 overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400&h=400" alt="Watch Product Shot" className="w-full h-full object-cover" />
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};