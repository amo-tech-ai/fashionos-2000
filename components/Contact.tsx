import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-12 md:p-20 shadow-xl max-w-4xl w-full mx-6 text-center md:text-left md:flex justify-between items-center">
         <div className="md:w-2/3 mb-8 md:mb-0">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Bespoke Production</span>
           <h2 className="font-serif text-3xl md:text-4xl mb-6">Need something a <br/> little more creative?</h2>
           <p className="text-sm text-gray-500 leading-relaxed max-w-md">
             Have a complex vision? We love the unusual. Bring us your wildest briefs for multi-day productions, exotic locations, or set builds.
           </p>
           <ul className="mt-6 space-y-2 text-xs font-bold uppercase tracking-wider text-gray-800">
             <li>- Full campaign development</li>
             <li>- Concept, casting, and location scouting</li>
             <li>- Multi-day, multi-location productions</li>
           </ul>
         </div>
         <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-black text-white px-10 py-5 text-xs tracking-widest uppercase font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Start a Custom Brief
            </button>
         </div>
      </div>
    </section>
  );
};