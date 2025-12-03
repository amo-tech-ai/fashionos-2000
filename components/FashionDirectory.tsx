import React from 'react';
import { Button } from './Button';
import { Search } from 'lucide-react';

const profiles = [
  { name: 'Elena Rodriguez', role: 'Photographer', img: 'https://images.unsplash.com/photo-1554048612-387768052769?auto=format&fit=crop&q=80&w=400&h=500', tags: ['Editorial', 'Portrait'] },
  { name: 'Marcus Chen', role: 'Stylist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500', tags: ['Runway', 'Commercial'] },
  { name: 'Sarah Jenkins', role: 'Model', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=500', tags: ['High Fashion', 'Print'] },
];

export const FashionDirectory: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
             <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">The Network</span>
             <h2 className="font-serif text-4xl mb-6">Fashion Directory.</h2>
             <p className="text-sm text-gray-600 mb-8 leading-relaxed">
               We curate a network of the best photographers, stylists, models, and MUAs in the industry. Find your next collaborator.
             </p>
             
             <div className="bg-white p-4 shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center border-b border-gray-100 pb-2 mb-4">
                  <Search size={16} className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Search talent, services, or cities..." className="w-full text-xs outline-none" />
                </div>
                <button className="w-full bg-black text-white text-[10px] uppercase font-bold py-3 tracking-widest">Search</button>
             </div>

             <div className="flex flex-wrap gap-2">
               {['Photographers', 'Stylists', 'Models', 'MUAs', 'Paris', 'NYC'].map(tag => (
                 <span key={tag} className="text-[10px] border border-gray-200 px-3 py-1 bg-white text-gray-500 uppercase tracking-wide cursor-pointer hover:bg-gray-100">{tag}</span>
               ))}
             </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profiles.map((p, i) => (
                <div key={i} className="bg-white group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest">{p.tags[0]}</span>
                  </div>
                  <div className="p-6 border border-t-0 border-gray-100">
                    <h3 className="font-serif text-xl mb-1">{p.name}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{p.role}</p>
                    <div className="flex text-yellow-500 text-[10px] space-x-1">
                      {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                      <span className="text-gray-400 ml-2">(24)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
               <Button variant="secondary" className="w-full md:w-auto">Browse Full Directory</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};