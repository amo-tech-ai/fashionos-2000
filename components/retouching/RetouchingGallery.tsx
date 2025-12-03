import React from 'react';

export const RetouchingGallery: React.FC = () => {
  return (
    <>
      {/* Section 5: Before & After */}
      <section className="py-24 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 mb-4 inline-block">Hover over images to reveal</span>
               <h2 className="font-serif text-4xl md:text-5xl">Before and After.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800&h=1000&sat=-100", after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800&h=1000" },
                 { before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800&h=1000&blur=2", after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800&h=1000" },
                 { before: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800&h=1000&sat=-100", after: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800&h=1000" },
                 { before: "https://images.unsplash.com/photo-1550614000-4b9519e09063?auto=format&fit=crop&q=80&w=800&h=1000&blur=5", after: "https://images.unsplash.com/photo-1550614000-4b9519e09063?auto=format&fit=crop&q=80&w=800&h=1000" },
               ].map((item, i) => (
                  <div key={i} className="relative aspect-[4/5] overflow-hidden group cursor-crosshair">
                     {/* Before Image (Visible by default) */}
                     <img src={item.before} alt="Before" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                     <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] uppercase font-bold px-2 py-1 group-hover:opacity-0 transition-opacity">Before</div>
                     
                     {/* After Image (Visible on hover) */}
                     <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                     <div className="absolute top-4 left-4 bg-white/90 text-black text-[10px] uppercase font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">After</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Section 6: Additional Highlights */}
      <section className="py-24 bg-editorial-beige/20">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-white p-8 shadow-sm">
                  <div className="aspect-video overflow-hidden mb-6">
                     <img src="https://images.unsplash.com/photo-1542295669-284399b33a59?auto=format&fit=crop&q=80&w=800&h=500" alt="Product Hero" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">High-End Product Retouching.</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     From floating products to complex composite scenes, we enhance textures and materials to make your products pop off the screen.
                  </p>
               </div>
               <div className="bg-white p-8 shadow-sm">
                  <div className="aspect-video overflow-hidden mb-6">
                     <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800&h=500" alt="Beauty Detail" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">Detailed Beauty Work.</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     Our high-end beauty retouching maintains skin texture while correcting imperfections, ensuring a flawless yet realistic result.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};