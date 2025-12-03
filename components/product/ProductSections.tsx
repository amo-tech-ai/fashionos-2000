import React from 'react';
import { Button } from '../Button';
import { ArrowLeft, ArrowRight, Quote, Smartphone } from 'lucide-react';

// --- Section 2: Exceptional Imagery Grid ---
export const ExceptionalImagery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Text */}
          <div className="lg:col-span-4 flex flex-col justify-center sticky top-24 self-start">
             <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Exceptional imagery. <br/> Every time.</h2>
             <p className="text-gray-600 mb-8 leading-relaxed font-light">
               As London’s primary professional <strong>product photography studio</strong>, we deliver outstanding images with an unrivalled level of service. Team Blend is regularly trusted to shoot for many of the UK’s foremost brands – so you’re in excellent hands.
             </p>
             <p className="text-gray-600 mb-8 leading-relaxed font-light">
               We love what we do and it shows. Our passion is delivering great work, on-time and on budget.  We appreciate the importance of producing images that command the attention of your customers and ultimately drive sales. We are as invested in what we do as our clients are.
             </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
               At Blend, we also make the process as easy as possible. We tackle each product photography project in a friendly, flexible way whilst maintaining our high standards. We use industry-standard workflows and processes that ensure we can always deliver affordable projects without cutting corners.
             </p>
             <div className="mt-4 hidden lg:block">
               {/* Spacer or additional content if needed */}
             </div>
          </div>

          {/* Right Grid - Jewelry/Accessories Focused */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[
                   "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500&h=500", // Watch
                   "https://images.unsplash.com/photo-1594824476961-b7aa5a615015?auto=format&fit=crop&q=80&w=500&h=500", // Ring
                   "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500&h=500", // Bag
                   "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500&h=500", // Watch White
                   "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=500&h=500", // Gold Ring
                   "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500&h=500"  // Necklace
               ].map((src, i) => (
                 <div key={i} className="aspect-square overflow-hidden bg-gray-100 group">
                    <img src={src} alt="Product Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Studio Trust ---
export const StudioTrust: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <h2 className="font-serif text-4xl md:text-5xl mb-6">A studio you can trust.</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 We offer a full content creation service, from production to delivery. We're "fully stacked", so we have in-house product photographers, stylists, art directors and top retouchers. We build up strong working relationships with our clients and we're very familiar with what clients expect from images of their products. We always strive to deliver the very best quality while retaining our "right-first-time" culture.
               </p>
            </div>
            <div className="order-1 lg:order-2 h-[500px] bg-black overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1549461191-481c2f01f31b?auto=format&fit=crop&q=80&w=800&h=1000" alt="High End Watch Product" className="w-full h-full object-cover opacity-90" />
            </div>
         </div>
      </div>
    </section>
  );
};

// --- Section 4: Full Gallery ---
export const ProductGallery: React.FC = () => {
  return (
     <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600&h=800",
                  "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=600&h=800",
                  "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=600&h=800",
                  "https://images.unsplash.com/photo-1596944924616-b0e1216e2518?auto=format&fit=crop&q=80&w=600&h=800"
              ].map((src, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden relative group">
                   <img src={src} alt="Fashion Accessory" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
           </div>
        </div>
     </section>
  );
};

// --- Section 5: Experience ---
export const ProductExperience: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
       <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="lg:pr-12">
                <h2 className="font-serif text-4xl mb-6">20+ years in the Industry.</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our long-standing product photography team understands the need to take time to examine your product to work out exactly how best to light it. Unlike many other studios, we specifically and individually light your products to achieve the best results for each particular item.
                </p>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                  Over many years of trading, we have continually worked with many premium brands, including ASOS, Selfridges, TK Maxx, House of Fraser and Dover Street Market. We're confident we have the experience, expertise and technical ability to provide you with high-quality product photography that can achieve your goals.
                </p>
             </div>
             <div className="h-[600px] overflow-hidden shadow-xl">
                 <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800&h=1200" alt="Close up jewelry detail" className="w-full h-full object-cover" />
             </div>
          </div>
       </div>
    </section>
  );
};

// --- Section 6: Ecommerce Highlight ---
export const EcommerceHighlight: React.FC = () => {
  return (
    <section className="py-32 bg-white">
       <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-[500px] bg-gray-50 p-8 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=600&h=800" alt="Perfume Product Set" className="max-h-full object-contain mix-blend-multiply" />
             </div>
             <div>
                <h3 className="font-serif text-4xl mb-6">Ecommerce Product Photography.</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  If you require clean, high-end catalogue images for online, print, or PR purposes, consider trying our e-commerce photography service. 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  High-quality images are not a luxury but a necessity when it comes to driving online sales. Therefore, it's crucial to select a studio that consistently delivers top-notch images — and that's exactly what we do.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  At Blend, we take pride in our attention to detail and our ability to produce thousands of images to an excellent standard. Our e-commerce photography is unmatched.
                </p>
                <Button variant="primary" className="text-xs">Ecommerce Photography</Button>
             </div>
          </div>
       </div>
    </section>
  );
};

// --- Section 7: Testimonial Banner ---
export const ProductTestimonial: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative">
       <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="mx-auto mb-8 text-white/50" size={40} />
          <p className="font-serif text-3xl md:text-4xl leading-relaxed mb-8 italic">
            I've been using Blend Studios for the past 6 years and have only ever found them to be friendly, professional and experts in creating the perfect product shots
          </p>
          <div className="flex justify-between items-center max-w-xs mx-auto mt-12">
             <ArrowLeft size={16} className="cursor-pointer hover:text-gray-400" />
             <div className="text-center">
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">ALAN SOLOMON - Alban Cycle Bags</span>
             </div>
             <ArrowRight size={16} className="cursor-pointer hover:text-gray-400" />
          </div>
       </div>
    </section>
  );
};

// --- Section 8: Benefits ---
export const ProductBenefits: React.FC = () => {
  return (
    <section className="py-32 bg-white">
       <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
             
             {/* Left Benefits */}
             <div className="space-y-16 text-right lg:text-right">
                <div>
                   <h4 className="font-serif text-2xl mb-3">Consistency</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     It's fundamental that all your photographs look consistent in quality, across all channels, every season. We take great care to produce images that always meet your high standards and show cohesion throughout the brand. Each image you receive is as good as the last.
                   </p>
                </div>
                <div>
                   <h4 className="font-serif text-2xl mb-3">Boost brand image</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Using exceptional images across your marketing collateral shows your customers you don't compromise on quality. Our expert photography doesn't just communicate how brilliant your products are; it helps boost your image at a brand level.
                   </p>
                </div>
             </div>

             {/* Center Phone */}
             <div className="flex justify-center">
                <div className="border-4 border-gray-200 rounded-[3rem] p-2 w-[280px] h-[580px] shadow-2xl bg-white overflow-hidden relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-200 rounded-b-xl z-10"></div>
                   <div className="h-full w-full bg-gray-50 overflow-hidden rounded-[2.5rem] relative">
                      <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400&h=800" alt="Mobile Product View" className="w-full h-full object-cover" />
                      {/* Overlay Mock UI */}
                      <div className="absolute top-10 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm">
                         <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
                         <div className="h-2 w-32 bg-gray-200 rounded"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right Benefits */}
             <div className="space-y-16">
                <div>
                   <h4 className="font-serif text-2xl mb-3">Improve sales</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Great images have been proven to drive up sales and increase profit. Customers are naturally drawn to the content we create for our clients because it's well laid out, beautifully lit and edited to an impeccable standard.
                   </p>
                </div>
                <div>
                   <h4 className="font-serif text-2xl mb-3">Enhance media content</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     With social media platforms bigger than ever before, it's vital you have the right content to advertise your products. Entice your audience with colourful, creative shots, quirky GIFs and short video clips to drive sales.
                   </p>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

// --- Section 9: Brands ---
export const ProductBrands: React.FC = () => {
   return (
     <section className="py-16 bg-black">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100">
               {/* Using text for logos to avoid external dependencies */}
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">TKMaxx</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Adidas</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Rolex</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">ASOS</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Reebok</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">The North Face</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Tesco</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Revlon</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Hotel Chocolat</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Marks & Spencer</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Selfridges</span>
               <span className="text-white text-xl font-bold uppercase tracking-widest font-serif">Creed</span>
           </div>
        </div>
     </section>
   );
};

// --- Section 12: BTS ---
export const ProductBTS: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
       <div className="max-w-[1320px] mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center">Behind the scenes.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[118, 119, 120, 121, 122, 123, 124, 125].map((id, i) => (
                <div key={i} className="aspect-square overflow-hidden cursor-pointer group">
                   <img src={`https://images.unsplash.com/photo-${id % 2 === 0 ? '1600607686527-6fb886090705' : '1596706436423-f27303c735d4'}?auto=format&fit=crop&q=80&w=400&h=400&random=${id}`} alt="Studio BTS" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};