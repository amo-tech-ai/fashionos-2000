import React from 'react';

const categories = [
  { title: "Lookbook Starter", price: "$2,500", img: "https://images.unsplash.com/photo-1485230984865-1c2485484232?auto=format&fit=crop&q=80&w=600&h=600" },
  { title: "Campaign Launch", price: "$5,800", img: "https://images.unsplash.com/photo-1566207274740-0f8cf6b7f5a9?auto=format&fit=crop&q=80&w=600&h=600" },
  { title: "Ecommerce Scale", price: "Custom Quote", img: "https://images.unsplash.com/photo-1550614000-4b9519e09063?auto=format&fit=crop&q=80&w=600&h=600" },
];

export const Marketplace: React.FC = () => {
  return (
    <section className="py-32">
       <div className="max-w-[1320px] mx-auto px-6">
         <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Packages</span>
            <h2 className="font-serif text-4xl mb-4">Fashion Marketplace.</h2>
            <p className="text-gray-500 font-light">Ready-made packages for emerging and established brands.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer">
                 <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                 <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="font-serif text-2xl mb-1">{cat.title}</h3>
                    <p className="text-sm font-medium opacity-80">{cat.price}</p>
                 </div>
                 <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase">View Package</span>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};