import React from 'react';
import { Button } from '../Button';
import { Check } from 'lucide-react';

const packages = [
  {
    title: "E-commerce On-Model",
    price: "from £400*",
    desc: "Whether you need a few hours or a full day of shooting, we have a package that fits your needs.",
    features: ["Half-Day or Full-Day", "Min. 40 selected images", "Basic retouching included", "Online gallery delivery"],
    dark: true
  },
  {
    title: "Photography & Video",
    price: "Price: £750",
    desc: "Minimum of 40 selected still images and/or video files. Perfect for social content.",
    features: ["Full-Day Session", "Stills & Video Mix", "Editing & Color Grading", "Social-ready formats"],
    dark: false
  },
  {
    title: "E-commerce Post-Production",
    price: "Variable",
    desc: "Our post-production services ensure your visuals are polished and ready for your e-commerce platform.",
    features: ["Basic Editing (£10/file)", "Advanced Retouching", "Color Matching", "Clipping Paths"],
    dark: false
  }
];

export const PhotoPackages: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Packages</span>
           <h2 className="font-serif text-4xl md:text-5xl">Service Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`p-10 flex flex-col h-full border border-gray-100 transition-all duration-300 hover:shadow-xl ${pkg.dark ? 'bg-black text-white' : 'bg-gray-50 text-editorial-black'}`}>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{pkg.title}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${pkg.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {pkg.desc}
              </p>
              
              <div className="text-4xl font-serif mb-8">{pkg.price}</div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check size={16} className={`mr-3 ${pkg.dark ? 'text-white' : 'text-black'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                 <Button variant={pkg.dark ? 'white' : 'primary'} className="w-full justify-center">
                    {pkg.dark ? "Let's Chat" : "Book Package"}
                 </Button>
                 {pkg.dark && <p className="text-[10px] text-gray-500 mt-4">*Prices subject to VAT at the standard rate.</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};