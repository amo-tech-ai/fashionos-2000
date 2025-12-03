import React from 'react';

export const ClothingServiceList: React.FC = () => {
  return (
    <>
      {/* Section 4: Ghost Mannequin */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex gap-4">
               <div className="w-1/3 aspect-[3/4] bg-white shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1591369045385-1150c9343719?auto=format&fit=crop&q=80&w=400&h=600" alt="Ghost Mannequin 1" className="w-full h-full object-cover" /></div>
               <div className="w-1/3 aspect-[3/4] bg-white shadow-sm overflow-hidden mt-8"><img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400&h=600" alt="Ghost Mannequin 2" className="w-full h-full object-cover" /></div>
               <div className="w-1/3 aspect-[3/4] bg-white shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=400&h=600" alt="Ghost Mannequin 3" className="w-full h-full object-cover" /></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-3xl md:text-4xl mb-6">Ghost Mannequin.</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Invisible (ghost) mannequin photography creates the effect of a garment being worn by an invisible model. Each item is carefully styled and shot on a mannequin, which is then digitally removed in post-production – all included in all our rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Clothing Flats */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">Clothing Flats.</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                An alternative method to invisible mannequin photography is to style your garments flat. This can be done by hanging them, which allows for natural movement to illustrate the fit of a garment (whether a loose or slim fit, for example), or on a tabletop, for a creaseless, sharp finish or controlled movement.
              </p>
            </div>
             <div className="grid grid-cols-3 gap-4">
               {[
                   "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=300&h=300",
                   "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=300&h=300",
                   "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=300&h=300",
                   "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=300&h=300",
                   "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=300&h=300",
                   "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=300&h=300"
               ].map((src, i) => (
                 <div key={i} className="aspect-square bg-gray-50 p-0 flex items-center justify-center overflow-hidden">
                    <img src={src} alt="Flat Lay" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Apparel Still Life */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="lg:pr-12">
               <h3 className="font-serif text-3xl md:text-4xl mb-6">Apparel Still Life.</h3>
               <p className="text-gray-600 leading-relaxed font-light text-lg">
                 As well as the 'standard' e-commerce shots, we can also shoot your collection creatively. We love producing creative images, and our still life apparel photography brings an extra element of appeal to your shots. It's ideal for website banners or social media. As part of our service, we can offer Art direction, prop sourcing and styling.
               </p>
             </div>
             <div className="flex gap-4 overflow-hidden">
                <div className="w-1/3 aspect-square overflow-hidden"><img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500&h=500" alt="Still Life 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="w-1/3 aspect-square overflow-hidden"><img src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?auto=format&fit=crop&q=80&w=500&h=500" alt="Still Life 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="w-1/3 aspect-square overflow-hidden"><img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500&h=500" alt="Still Life 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
             </div>
           </div>
        </div>
      </section>

      {/* Section 7: Details */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex gap-4">
                 <div className="w-1/3 aspect-square bg-gray-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=500&h=500" alt="Detail 1" className="w-full h-full object-cover" /></div>
                 <div className="w-1/3 aspect-square bg-gray-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1605763240004-7e93b172d754?auto=format&fit=crop&q=80&w=500&h=500" alt="Detail 2" className="w-full h-full object-cover" /></div>
                 <div className="w-1/3 aspect-square bg-gray-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500&h=500" alt="Detail 3" className="w-full h-full object-cover" /></div>
              </div>
              <div className="order-1 lg:order-2">
                 <h3 className="font-serif text-3xl md:text-4xl mb-6">Details.</h3>
                 <p className="text-gray-600 leading-relaxed font-light text-lg">
                   If you are looking to really sell your collection to customers, detail shots are an essential part of your catalogue shots. Displaying a cropped, close up section of each garment, detail shots brilliantly capture features of the clothes. This could include buttons, inside pockets, fastenings and texture.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Section 8: Accessories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-serif text-3xl md:text-4xl mb-6">Accessories.</h3>
                 <p className="text-gray-600 leading-relaxed font-light text-lg">
                   Of course, we shoot all manner of accessories. From hats and bags to footwear and jewellery, we shoot them by the bucket load. With everything we do, we apply the same care and attention to producing elevated premium accessory images that will help sell more than your competitors.
                 </p>
              </div>
              <div className="flex gap-4 justify-end">
                 <div className="w-40 h-40 bg-white p-4 shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=300&h=300" alt="Shoes" className="w-full h-full object-contain" /></div>
                 <div className="w-40 h-40 bg-white p-4 shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1590874103328-360705fa7943?auto=format&fit=crop&q=80&w=300&h=300" alt="Bag" className="w-full h-full object-contain" /></div>
                 <div className="w-40 h-40 bg-white p-4 shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=300&h=300" alt="Scarf" className="w-full h-full object-contain" /></div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};