import React, { useEffect } from 'react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Button } from '../../components/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    { 
      title: "Lookbook Starter", 
      price: "$2,500", 
      desc: "Perfect for emerging brands launching their first collection.",
      features: ["Half-day Studio Shoot", "1 Model included", "20 Retouched Images", "Basic Styling", "Online Gallery"]
    },
    { 
      title: "Campaign Launch", 
      price: "$5,800", 
      desc: "Full-day production for a high-impact seasonal campaign.",
      features: ["Full-day Studio/Location", "2 Models included", "40 Retouched Images", "Short Video Clips (3)", "Art Direction", "Full Styling"]
    },
    { 
      title: "Enterprise Scale", 
      price: "Custom", 
      desc: "High-volume e-commerce solution for established retailers.",
      features: ["Multi-day Shoots", "Dedicated Creative Team", "Unlimited Usage Rights", "Custom Retouching", "Asset Management System"]
    }
  ];

  return (
    <>
      <SEOHead title="Services & Pricing" description="Explore our fashion photography packages, from lookbooks to full-scale campaigns." />
      
      <section className="pt-32 pb-20 bg-black text-white">
         <div className="max-w-[1320px] mx-auto px-6 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Our Offerings</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-8">Production Packages.</h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
               Transparent pricing for world-class fashion imagery. Choose a package or contact us for a bespoke quote.
            </p>
         </div>
      </section>

      <section className="py-24 bg-gray-50">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
               {packages.map((pkg, i) => (
                  <div key={i} className="bg-white p-10 shadow-xl border border-gray-100 flex flex-col">
                     <h3 className="font-serif text-2xl mb-2">{pkg.title}</h3>
                     <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                     <p className="text-gray-500 text-sm mb-8 leading-relaxed">{pkg.desc}</p>
                     
                     <ul className="space-y-4 mb-10 flex-1">
                        {pkg.features.map((f, idx) => (
                           <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check size={16} className="text-green-500 mr-3" />
                              {f}
                           </li>
                        ))}
                     </ul>
                     
                     <Link to="/start-project">
                        <Button className="w-full justify-center">{pkg.price === 'Custom' ? 'Contact Us' : 'Book Now'}</Button>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Service Grid Navigation */}
      <section className="py-24 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12 text-center">Explore Specific Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <Link to="/services/photography" className="group relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600&h=800" alt="Fashion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-md">Fashion Photo</span>
                  </div>
               </Link>
               <Link to="/services/product" className="group relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=600&h=800" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-md">Product</span>
                  </div>
               </Link>
               <Link to="/services/clothing" className="group relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800" alt="Clothing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-md">Clothing</span>
                  </div>
               </Link>
               <Link to="/services/retouching" className="group relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1576158189569-b223c6f820c7?auto=format&fit=crop&q=80&w=600&h=800" alt="Retouching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-md">Retouching</span>
                  </div>
               </Link>
            </div>
         </div>
      </section>
    </>
  );
};