import React, { useState } from 'react';
import { Button } from '../Button';
import { Plus, Minus } from 'lucide-react';

// --- FAQ ---
export const ClothingFAQ: React.FC = () => {
  const faqs = [
    { q: "How does ghost mannequin photography work?", a: "We photograph your garment on a mannequin and then remove it in post-production. The result is a clean, 3D look that shows the fit and structure, perfect for ecommerce." },
    { q: "What is your turnaround time?", a: "Standard turnaround is 3-5 working days. We also offer an express 24-48 hour service for urgent projects." },
    { q: "What's included in the price?", a: "Our rates include the photographer, studio time, basic styling prep (steaming), and standard retouching. Advanced styling or creative direction can be added." },
    { q: "Can you handle high-volume ecommerce jobs?", a: "Yes, our studio is designed for volume. We can shoot hundreds of SKUs per day across multiple sets without compromising quality." },
    { q: "What if I need more retouching?", a: "We offer tiered retouching packages. Basic cleanup is included, but we can do advanced reshaping, color changes, and creative compositing." },
    { q: "Can I send fewer than 24 garments?", a: "Yes, we have a minimum booking fee, but you can send any quantity. Contact us for a custom quote for smaller batches." },
    { q: "Do I get to review the images before final delivery?", a: "Absolutely. We send low-res proofs for approval before final high-res delivery." },
    { q: "Do you offer styling services?", a: "Yes, we have in-house stylists who can assist with outfitting and on-set styling to ensure your garments look their best." },
    { q: "Do I have to be on-site?", a: "Not at all. Many clients ship their products to us. We can communicate via video call during the shoot if needed." },
    { q: "How do I book a shoot?", a: "Simply fill out the contact form below or give us a call to discuss your needs and get a quote." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
       <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Our Clothing Ghost Mannequin & Flats FAQs</h2>
          <div className="space-y-4">
             {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-sm">
                   <button 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left transition-colors"
                   >
                      <span className="font-bold text-xs uppercase tracking-wide">{faq.q}</span>
                      {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                   </button>
                   {openIndex === i && (
                      <div className="p-6 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100 animate-fade-in">
                         {faq.a}
                      </div>
                   )}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

// --- Contact ---
export const ClothingContact: React.FC = () => {
   return (
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="max-w-4xl mx-auto">
               <h2 className="font-serif text-4xl mb-12">Get in Touch.</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name*</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name*</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                     </div>
                  </div>
                  <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email*</label>
                      <input type="email" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Company name</label>
                      <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Please tell us about your proposed project.</label>
                      <p className="text-[10px] text-gray-400 mb-2">Please provide us with details regarding quantities, scope, photography, and/or video.</p>
                      <textarea className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors h-32 resize-none"></textarea>
                  </div>
                  <div className="pt-4">
                      <Button variant="primary" className="bg-black text-white text-xs">Submit</Button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

// --- Brands ---
export const ClothingBrands: React.FC = () => {
   return (
     <section className="py-20 bg-black">
        <div className="max-w-[1320px] mx-auto px-6">
           <h3 className="text-white text-center text-xl font-serif mb-12">Companies that love working with us.</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-100">
               {/* Using SVG logos directly or placeholders for better visual fidelity */}
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">THE BODY SHOP</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">ADIDAS</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">CALLAWAY</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">ROLEX</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">ASOS</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">DUNLOP</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">BRORA</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">REEBOK</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">TED BAKER</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">NORTH FACE</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">TESCO</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">REVLON</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">HOTEL CHOCOLAT</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">M&S</div>
               <div className="w-20 h-10 bg-white/10 flex items-center justify-center text-white text-[10px]">NEW ERA</div>
           </div>
        </div>
     </section>
   );
};