import React, { useState } from 'react';
import { Button } from '../Button';
import { Plus, Minus } from 'lucide-react';

export const StudioDetails: React.FC = () => {
  const faqs = [
    { q: "Where are you located?", a: "We are located on the outskirts of central London (north). If you're travelling by car, we are based at China House, 401 Edgware Road, NW2 6GY. Opposite our studios is a newly built Brent Cross West station, which is only a 3-minute walk away. The station is conveniently located and offers a direct 12-minute journey to/from Kings Cross." },
    { q: "What are your standard hours?", a: "Our standard full day is 8:30am - 5:30pm (9 hours)." },
    { q: "Studio Access", a: "We have a large goods lift and drive-in access for loading." },
    { q: "Is there parking onsite?", a: "Yes, we have free secure parking available." },
    { q: "Can you help set up the lighting, ongoing support, and breakdown sets?", a: "Yes, our studio assistants are available for hire to help with set up." },
    { q: "How do I book the session?", a: "You can book directly through our website or call us." },
    { q: "Do you have equipment for hire?", a: "Yes, we have a comprehensive list of equipment available for rent." },
    { q: "Do the studios include tea and coffee facilities?", a: "Yes, complimentary tea and coffee are provided." },
    { q: "What is your Wi-Fi capacity?", a: "We have super-fast dedicated fibre broadband (300mb/s)." },
    { q: "Are the studios Blackout?", a: "Yes, all studios can be fully blacked out." },
    { q: "Are your hired studios soundproof?", a: "Our studios are acoustically treated but not 100% soundproof." },
    { q: "What is the minimum duration of a booking?", a: "Minimum booking is a half-day session (4 hours)." },
    { q: "Can I play my own music?", a: "Yes, we have Bluetooth sound systems in all studios." },
    { q: "Do we charge for Colorama backdrops?", a: "Charged per meter used if soiled." },
    { q: "Can I hire a photographer and videographer for my session?", a: "Yes, we have a roster of in-house creatives." },
    { q: "Are your hired studios pet-friendly?", a: "Yes, well-behaved pets are welcome." },
    { q: "Can I come to see the studios?", a: "Visits are by appointment only." },
    { q: "What if I need longer in the studio than initially booked?", a: "Overtime is charged at £70/hr." },
    { q: "Where can I find your Terms and conditions", a: "Terms can be found in the footer of our website." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Section 13: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-3xl mb-12">Studio Hire FAQs</h2>
           <div className="space-y-1">
              {faqs.map((faq, i) => (
                 <div key={i} className="bg-gray-100/50">
                    <button 
                       onClick={() => setOpenIndex(openIndex === i ? null : i)}
                       className="w-full flex items-center p-4 hover:bg-gray-200 transition-colors text-left"
                    >
                       <span className="mr-4 text-xs font-bold">{openIndex === i ? <Minus size={12}/> : <Plus size={12}/>}</span>
                       <span className="font-bold text-xs uppercase tracking-wide text-gray-700">{faq.q}</span>
                    </button>
                    {openIndex === i && (
                       <div className="p-4 pl-10 bg-white text-gray-600 text-xs leading-relaxed border-b border-gray-100">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
           <div className="mt-12">
             <Button variant="primary" className="text-[10px] px-6">Book Online</Button>
           </div>
        </div>
      </section>

      {/* Section 14: Studio Overview Text */}
      <section className="py-24 bg-gray-100">
         <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-serif text-3xl mb-8 leading-tight">A note from the owner.</h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-6 font-light">
               <p>
                 As a professional commercial photographer with over 25 years of experience, I understand how difficult and stressful a shoot can be and the importance of having everything you need. A successful shoot depends on it.
               </p>
               <p>
                 I am the founder and creative director of Blend Studios, so I understand the business inside out. My message to you, Photographer to photographer, is that if there's anything we can help with, we absolutely will.
               </p>
               <p>
                 With that in mind, I have established Studio Hire here at Blend, a hired studio that reflects the same principles I have adopted throughout my career: a genuine commitment to ensuring my clients have the best experience possible.
               </p>
               <p>
                 My main goal is to help creatives like you achieve your goals. I'm here to provide a studio where you are empowered to produce your best work. It's not just about the studio; it's about you and your success.
               </p>
               <p className="font-medium text-black">Barrie Gordon</p>
               <p className="text-xs uppercase text-gray-400">Owner & Founder</p>
            </div>
         </div>
      </section>

      {/* Section 15: Built by Creatives */}
      <section className="py-24 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="bg-gray-50 p-12 lg:h-[400px] flex flex-col justify-center">
                  <h3 className="font-serif text-4xl mb-6">Built by Creatives <br/> for Creatives.</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     Our contemporary studios are designed by professional photographers who know what works best. We've taken care of every detail to make your experience as comfortable as possible.
                  </p>
               </div>
               <div className="border border-gray-200 p-8">
                  {/* Floorplan Placeholder */}
                  <img src="https://via.placeholder.com/600x400/ffffff/000000?text=Studio+Layout+Diagram" alt="Studio Layout" className="w-full h-auto mix-blend-multiply" />
               </div>
            </div>
         </div>
      </section>
    </>
  );
};