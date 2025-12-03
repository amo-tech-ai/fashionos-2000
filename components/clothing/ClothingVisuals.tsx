import React from 'react';

export const ClothingVisuals: React.FC = () => {
  return (
    <>
      {/* Section 15: Invisible Mannequin Process */}
      <section className="py-32 bg-[#1C1C1C] text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10 text-center">
           <h2 className="font-serif text-5xl md:text-7xl mb-8">Invisible Mannequin</h2>
           <div className="w-24 h-[1px] bg-white mx-auto mb-12"></div>
           <p className="font-serif text-3xl font-light mb-12 opacity-80">The Process</p>
           
           <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-2xl border border-white/10">
                 <img src="https://picsum.photos/1200/800?random=233" alt="Ghost Mannequin Process" className="w-full h-full object-cover opacity-80" />
              </div>
           </div>
        </div>
      </section>

      {/* Section 16: Behind the Scenes */}
      <section className="py-32 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-4xl mb-12">Behind the Scenes.</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[234, 235, 236, 237, 238, 239, 240, 241].map((id, i) => (
                 <div key={i} className="aspect-square overflow-hidden bg-gray-100 group cursor-pointer">
                    <img src={`https://picsum.photos/600/600?random=${id}`} alt="Studio BTS" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
};