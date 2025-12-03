import React from 'react';
import { Button } from '../Button';

export const ProductContact: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row gap-16">
           <div className="md:w-1/3">
             <h2 className="font-serif text-4xl md:text-5xl mb-6">Need something <br/> a little more creative?</h2>
             <p className="text-sm text-gray-600 leading-relaxed mb-6">
               Looking for unique photography that's tailored to you and your brand? 
             </p>
             <p className="text-sm text-gray-600 leading-relaxed mb-6">
               At Blend, we have years of experience in creative product photography. Our lighting expertise, professional studio equipment and masterful creative direction mean your images will be delivered to a consistently high standard.
             </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
               Our still life photography service gives you the freedom to style your products however you like, with the option of incorporating props and interesting backgrounds. Simply leave the styling, art direction and prop sourcing to us – our team will deliver fuss-free, effective and always-exceptional content.
             </p>
             <Button variant="primary" className="text-xs">Jump to Still Life</Button>
           </div>
           
           <div className="md:w-2/3">
              <div className="bg-gray-50/50 p-8 md:p-12 border border-gray-200">
                 <h2 className="font-serif text-4xl mb-8">Get in Touch.</h2>
                 <form className="space-y-6">
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name*</label>
                       <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name*</label>
                       <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email*</label>
                       <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
                    </div>
                     <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Company name</label>
                       <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Please tell us about your proposed project.</label>
                       <p className="text-[10px] text-gray-400 mb-2">Please provide us with details regarding quantities, scope, photography, and/or video.</p>
                       <textarea className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors h-24 resize-none"></textarea>
                    </div>
                    <div className="pt-4">
                       <Button variant="primary" className="text-xs">Submit</Button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Callout Box */}
      <section className="py-24 bg-white flex justify-center">
         <div className="bg-gray-100 p-16 text-center max-w-2xl w-full mx-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Want to <br/> really stand out?</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
               Nothing catches the eye quite like a moving image — and our striking GIF's cater to even the most creative of visions.
            </p>
         </div>
      </section>
    </>
  );
};
