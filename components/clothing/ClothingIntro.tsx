import React from 'react';

export const ClothingIntro: React.FC = () => {
  return (
    <>
      {/* Section 2: Trust */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                20+ Years of Clothing Photography, Trusted by Leading Fashion Brands.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
                At Blend Studios, we specialize in premium clothing and accessory photography tailored to the needs of fashion and retail brands. Whether you need ghost mannequin images, styled flats, or creative content for campaigns, our experienced team delivers results that elevate your product, producing images that sell.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                With over 20 years in the industry, we’ve built trusted relationships with leading names including Selfridges, Hobbs, Lululemon, Oner Active, Burberry, and The North Face. Clients choose us not just for our elevated imagery, but for our reliable, friendly service, streamlined workflows, and our right-first-time attitude. From fast fashion to high fashion, we make the entire process straightforward so you can focus on growing your brand.
              </p>
            </div>
            
            {/* Right Mini Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=400&h=600",
                  "https://images.unsplash.com/photo-1551488852-0801751acbe3?auto=format&fit=crop&q=80&w=400&h=600",
                  "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?auto=format&fit=crop&q=80&w=400&h=600",
                  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=400&h=600",
                  "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=400&h=600",
                  "https://images.unsplash.com/photo-1589465885857-44edb59ef526?auto=format&fit=crop&q=80&w=400&h=600"
              ].map((src, i) => (
                <div key={i} className="aspect-[3/4] bg-gray-50 overflow-hidden">
                   <img src={src} alt="Clothing Sample" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-1 aspect-[3/4] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?auto=format&fit=crop&q=80&w=500&h=700" alt="Sportswear" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="col-span-1 md:col-span-1 aspect-[3/4] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500&h=700" alt="Jacket" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="col-span-2 md:col-span-1 aspect-square md:aspect-[3/4] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600&h=800" alt="Accessories" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="col-span-2 md:col-span-1 aspect-square md:aspect-[3/4] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600&h=800" alt="Streetwear" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
           </div>
        </div>
      </section>
    </>
  );
};