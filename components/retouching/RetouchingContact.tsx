import React from 'react';
import { Button } from '../Button';

export const RetouchingContact: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
         <h2 className="font-serif text-4xl md:text-5xl mb-6">Get in Touch.</h2>
         <p className="text-gray-500 mb-12">We reply within 24 hours. Share your project details and we'll prepare a custom retouching quote.</p>
         
         <form className="text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" />
               </div>
            </div>
            <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Company</label>
               <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
               <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
               <textarea className="w-full border-b border-gray-200 py-2 h-32 resize-none focus:outline-none focus:border-black transition-colors"></textarea>
            </div>
            <div className="text-center pt-8">
               <Button variant="primary" className="px-12">Send Inquiry</Button>
            </div>
         </form>
      </div>
    </section>
  );
};