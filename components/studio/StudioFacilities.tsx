import React from 'react';
import { Button } from '../Button';
import { Check } from 'lucide-react';

export const StudioFacilities: React.FC = () => {
  return (
    <>
      {/* Section 6: Studio One - Layout + Specs */}
      <section className="py-32 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 lg:pr-12">
                 <div className="mb-8">
                    <span className="bg-gray-100 text-xs font-bold uppercase tracking-widest px-3 py-1">10.5m X 13m | 1500 sq. ft. | 13ft ceiling height.</span>
                 </div>
                 <h3 className="font-serif text-4xl mb-6">Studio One.</h3>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                   Studio One, our largest space, is perfect for larger productions or events. Its generous size allows for larger sets and fashion shoots, creating a comfortable environment for everyone involved.
                 </p>
                 <Button variant="primary" className="text-xs px-8">Book Online</Button>
              </div>
              <div className="order-1 lg:order-2 border border-gray-200 p-8">
                 {/* Floorplan Placeholder */}
                 <img src="https://via.placeholder.com/600x600/ffffff/cccccc?text=Floorplan+Schematic" alt="Studio One Floorplan" className="w-full h-auto mix-blend-multiply opacity-70" />
              </div>
           </div>
        </div>
      </section>

      {/* Section 7: Feature Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                 <h4 className="font-serif text-2xl mb-4">Equipment Hire.</h4>
                 <p className="text-sm text-gray-500 mb-8 leading-relaxed">We offer a wide range of professional photography and film equipment for you to hire.</p>
                 <Button variant="primary" className="text-[10px] py-2 px-4">Equipment Hire</Button>
              </div>
              <div className="bg-white p-10 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                 <h4 className="font-serif text-2xl mb-4">Great Location.</h4>
                 <p className="text-sm text-gray-500 mb-8 leading-relaxed">Free on-site parking or by train, Walking distance from Brent Cross West Station, which is 12 mins from Kings Cross.</p>
                 <Button variant="primary" className="text-[10px] py-2 px-4">Travel Info</Button>
              </div>
              <div className="bg-white p-10 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                 <h4 className="font-serif text-2xl mb-4">The Space.</h4>
                 <p className="text-sm text-gray-500 mb-8 leading-relaxed">Complete privacy from other studios. Lift to our studios – no more lugging heavy equipment down stairs.</p>
                 <Button variant="primary" className="text-[10px] py-2 px-4">Book Online</Button>
              </div>
           </div>
        </div>
      </section>

      {/* Section 8: Facilities Overview */}
      <section className="py-24 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">Facilities.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-12">
               <ul className="space-y-3">
                  <li>2 x Professional Make-Up Stations with Hollywood mirrors</li>
                  <li>Makeup and Changing Area</li>
                  <li>Iron / Ironing Board</li>
                  <li>Tea & Coffee making facilities</li>
                  <li>Free Secure parking on-site</li>
                  <li>Bluetooth Speaker System</li>
               </ul>
               <ul className="space-y-3">
                  <li>Breakout Area</li>
                  <li>WIFI @ 300mb/s</li>
                  <li>Quiet space. Complete privacy from other studios.</li>
                  <li>Wheelchair access</li>
                  <li>Independent Climate Control – Air conditioning and Heating</li>
                  <li>Lift access</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Section 9: Studio Booking Includes */}
      <section className="py-32 bg-black text-white overflow-hidden">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="font-serif text-4xl mb-12 leading-tight">Every studio <br/> booking includes:</h2>
                  <ul className="space-y-2 text-sm text-gray-300">
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>1 x Bowens 250w</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>1 x Bowens 500w</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>2 x Bowens 1000w</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>Extra Wide 3.5m Large White Vinyl Background</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>Pocket Wizard Trigger system</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>2x Softbox 60cm x 60cm</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>Umbrella – 85cm</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>1x Dish Reflector</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>1 x Snoot</li>
                     <li className="flex items-start mt-4"><span className="mr-3 text-white">•</span>1 x Backdrop System for Colorama</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>2x Heavy-duty clothing rails + hangers</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>7 x Poly boards with Holders</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>2 x Matthews Apple Box</li>
                     <li className="flex items-start"><span className="mr-3 text-white">•</span>1 x Clothing steamer</li>
                  </ul>
                  <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">Other equipment on request. <br/> See our Equipment list for more details.</p>
               </div>
               <div className="h-[600px] bg-gray-900 relative">
                  <img src="https://images.unsplash.com/photo-1596706436423-f27303c735d4?auto=format&fit=crop&q=80&w=800&h=1200" alt="Studio Makeup Mirror" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};