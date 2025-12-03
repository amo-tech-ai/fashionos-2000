import React from 'react';
import { Zap, Layers, Eye } from 'lucide-react';
import { Button } from './Button';

export const AboutStudio: React.FC = () => {
  return (
    <section className="py-32 bg-editorial-beige/30">
      <div className="max-w-[1320px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">A studio you can trust.</h2>
          <p className="text-gray-600 font-light text-lg">
            We understand the pressures of the fashion calendar. From Fashion Week deadlines to seasonal drops, agencies and designers rely on us for on-time, high-fidelity assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Large Hero Image */}
            <div className="lg:col-span-12 w-full h-[500px] overflow-hidden rounded-sm relative mb-12 lg:mb-0">
               <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1600&h=900" alt="Studio Space" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { 
              title: 'On-set Creative Direction', 
              desc: 'Our art directors work with you to ensure every shot aligns with your campaign vision.' 
            },
            { 
              title: 'Rapid Retouching', 
              desc: 'First proofs in 24 hours. Final assets delivered ready for print and digital channels.' 
            },
            { 
              title: 'Brand Consistency', 
              desc: 'We maintain your visual identity across lookbooks, social, and ecommerce.' 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-10 shadow-sm border border-gray-50 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button variant="white" className="border border-gray-200">View Studio Services</Button>
        </div>

      </div>
    </section>
  );
};