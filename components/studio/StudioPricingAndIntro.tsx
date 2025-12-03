import React from 'react';
import { Button } from '../Button';

export const StudioPricingAndIntro: React.FC = () => {
  return (
    <>
      {/* Section 2: Pricing Strip */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 relative z-10 -mt-10 lg:-mt-20 max-w-[1200px] mx-auto shadow-xl">
        <div className="px-6 md:px-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              {/* Card 1 */}
              <div className="text-center p-6 bg-black text-white transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
                 <h3 className="font-serif text-3xl mb-2 leading-tight">Crazy <br/> Prices!</h3>
                 <p className="text-xl font-bold mb-4">from £30/hr</p>
                 <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">Limited Time Offer. <br/> Book Now.</p>
                 <Button variant="white" className="text-xs py-2 px-6">Book Now</Button>
              </div>

              {/* Card 2 */}
              <div className="text-center p-6 hover:bg-white transition-colors duration-300">
                 <h3 className="font-serif text-2xl mb-2">Full Day</h3>
                 <p className="text-xs text-gray-500 mb-4">(9hr session)<br/>8:30am–5:30pm</p>
                 <p className="text-4xl font-serif mb-2">£300</p>
                 <p className="text-[10px] text-gray-400 mb-6 max-w-[150px] mx-auto">Price are subject to VAT at the standard rate.<br/>Overtime £70ph</p>
                 <Button variant="outline" className="text-xs py-2 px-6">Book Now</Button>
              </div>

              {/* Card 3 */}
              <div className="text-center p-6 hover:bg-white transition-colors duration-300">
                 <h3 className="font-serif text-2xl mb-2">Half Day</h3>
                 <p className="text-xs text-gray-500 mb-4">(4hr session)<br/>9am – 1pm <br/>2pm – 6pm</p>
                 <p className="text-4xl font-serif mb-2">£175</p>
                 <p className="text-[10px] text-gray-400 mb-6 max-w-[150px] mx-auto">Price are subject to VAT at the standard rate.<br/>Overtime £70ph</p>
                 <Button variant="outline" className="text-xs py-2 px-6">Book Now</Button>
              </div>

           </div>
        </div>
      </section>

      {/* Section 3: Big Studio. Small Price. */}
      <section className="py-32 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5">
                <span className="text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-1 mb-4 inline-block">Studio Rental in NW London</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Big Studio, <br/> Small Price</h2>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                   Studio One @ Blend is a great space for your next shoot, offering a large open-plan film and photography studio for rent in NW2 North London, just a short distance from central London.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                   With an impressive 1500 sq. ft. of open-plan shooting space and high 13-foot ceilings, our studios are perfect for your next commercial full-length fashion, product, or portrait shoot, providing ample room for all your crew.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                   At our studios, we support creative productions and provide our clients with an exceptional, comfortable experience.
                </p>
                <div className="flex gap-4">
                   <Button variant="primary" className="text-xs px-6">Book Online</Button>
                   <Button variant="outline" className="text-xs px-6">Studio Hire FAQ's</Button>
                </div>
             </div>
             <div className="lg:col-span-7 h-[500px] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200&h=800" alt="Large Studio Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Studio Gallery Row */}
      <section className="bg-white pb-32">
         <div className="w-full flex flex-col md:flex-row h-[400px] md:h-[500px]">
            <div className="flex-1 overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=800&h=1000" alt="Studio Angle 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex-1 overflow-hidden relative group hidden md:block">
               <img src="https://images.unsplash.com/photo-1595514682054-d6a053f3e0d8?auto=format&fit=crop&q=80&w=800&h=1000" alt="Studio Angle 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex-1 overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=1000" alt="Studio Angle 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
         </div>
         {/* Visual Pagination dots */}
         <div className="flex justify-center mt-6 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
         </div>
      </section>

      {/* Section 5: Our Goal */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
             Our goal is to empower fellow creatives to produce their best work.
           </h2>
           <p className="text-lg md:text-2xl text-gray-300 font-light">
             FashionOS Studios is ideal for brands, creatives, and production teams looking for a reliable, professional studio hire experience.
           </p>
        </div>
      </section>
    </>
  );
};