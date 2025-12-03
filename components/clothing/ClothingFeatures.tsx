import React from 'react';

export const ClothingFeatures: React.FC = () => {
  const features = [
    { title: "Specialist Fashion Studio.", desc: "We focus exclusively on fashion and apparel, from ghost mannequins to campaign-level creative. Every shoot is handled by experienced photographers who understand how to make garments sell." },
    { title: "Consistent Quality, Every Time.", desc: "With over 15 years' experience and a 'right-first-time' culture, we deliver consistently sharp, colour-accurate, on-brand imagery. Every shot is approved by senior team members before it reaches you." },
    { title: "Experienced, Friendly Team.", desc: "We have been doing this type of work for years and know exactly how to handle both garments and clients. Our in-house team consists of fashion specialists who ensure a smooth, efficient, and straightforward process from start to finish." },
    { title: "In-House Retouching.", desc: "Our post-production team handles all ghosting, editing, and colour matching. We guarantee accuracy and consistency across your entire collection, and we turn any amendments around within 24 hours." },
    { title: "Top-tier Studio Facilities.", desc: "Based in North London, our 4000 sq. ft. studios are fully equipped with industry-standard lighting and camera gear. We've designed our space for high-volume shoots with maximum flexibility." },
    { title: "Fast Turnarounds.", desc: "We know e-commerce moves quickly. Standard delivery is five working days. Express options are also available if you need results faster." },
  ];

  return (
    <>
      {/* Section 9: Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-4xl mb-12">Why Choose Us.</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {features.map((f, i) => (
               <div key={i} className="p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-serif text-xl font-bold mb-4">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Section 10: Case Study */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="w-full aspect-[21/9] overflow-hidden relative shadow-xl">
             <img src="https://picsum.photos/1600/900?random=232" alt="Highlight Project" className="w-full h-full object-cover" />
             <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest">Highlight Project</div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 mt-12">
             <div className="lg:col-span-8 lg:col-start-3 text-center">
                <h2 className="font-serif text-4xl mb-6">What our clients have to say.</h2>
             </div>
           </div>
        </div>
      </section>

      {/* Section 11: Testimonials */}
      <section className="pb-24 bg-gray-50 pt-0">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white p-10 shadow-sm">
                <div className="font-bold uppercase tracking-widest text-xs mb-4">ONER ACTIVE</div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">Blend have been a really valuable resource for Oner and working with them has been super easy and efficient – they are always very responsive and cater easily to any requests and adjustments we need made.</p>
                <div>
                   <span className="block font-bold text-sm">Ava Rushton</span>
                   <span className="block text-[10px] text-gray-400 uppercase">Studio Producer</span>
                </div>
             </div>
             <div className="bg-white p-10 shadow-sm">
                <div className="font-bold uppercase tracking-widest text-xs mb-4">MDLONDON.</div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">We love working with Blend. Their photography has elevated our brand and the team strikes the perfect balance of professionalism, creativity and ease. Barrie is brilliant at interpreting briefs and brings real attention to detail. The process is smooth from shoot to post-production, and we now see Blend as an essential part of the mdlondon family.</p>
                <div>
                   <span className="block font-bold text-sm">Andy Abrahams</span>
                   <span className="block text-[10px] text-gray-400 uppercase">Brand & Content Director</span>
                </div>
             </div>
           </div>
           
           {/* Pagination Dots (Visual Only) */}
           <div className="flex justify-center gap-2 mt-8">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
           </div>
        </div>
      </section>
    </>
  );
};