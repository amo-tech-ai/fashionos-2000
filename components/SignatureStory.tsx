import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SignatureStory: React.FC = () => {
  return (
    <section className="py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="aspect-[3/4] overflow-hidden grayscale relative">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1200" alt="Creative Director" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 block">Our Heritage</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              20+ years in the <br/> fashion industry.
            </h2>
            <p className="text-gray-600 text-lg mb-10 font-light max-w-lg">
              From boutique labels to Fortune 500 brands, we've mastered the art of capturing fashion that sells. Our extensive portfolio includes work for fashion houses, beauty brands, jewelry designers, and lifestyle companies across the globe.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                'Global runway coverage',
                'Campaigns for independent labels',
                'Ecommerce & catalog production'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm font-medium">
                  <span className="w-8 h-8 rounded-full bg-editorial-beige flex items-center justify-center mr-4 text-editorial-black">
                     <CheckCircle2 size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#" className="text-xs font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              See Client Stories &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};