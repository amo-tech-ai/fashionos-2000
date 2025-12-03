import React from 'react';

export const StudioSocial: React.FC = () => {
  return (
    <>
      {/* Section 10: Previous Visitors Logos */}
      <section className="py-20 bg-white border-b border-gray-100">
         <div className="max-w-[1320px] mx-auto px-6 text-center">
            <h3 className="text-2xl font-serif mb-12">Some of Our Previous Visitors</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale">
               {/* Logos represented by bold text or placeholder SVGs */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Virgin_Records_Logo.svg/512px-Virgin_Records_Logo.svg.png" className="h-8 md:h-12 object-contain" alt="Virgin" />
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Tesco_Logo.svg/512px-Tesco_Logo.svg.png" className="h-6 md:h-8 object-contain" alt="Tesco" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/512px-Sony_logo.svg.png" className="h-4 md:h-6 object-contain" alt="Sony" />
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/512px-Rolex_logo.svg.png" className="h-8 md:h-12 object-contain" alt="Rolex" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Revlon_logo.svg/512px-Revlon_logo.svg.png" className="h-4 md:h-6 object-contain" alt="Revlon" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Reebok_logo21.svg/512px-Reebok_logo21.svg.png" className="h-6 md:h-8 object-contain" alt="Reebok" />
               <div className="w-full h-8 hidden md:block"></div> {/* Spacer row */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Era_Cap_Company_logo.svg/512px-New_Era_Cap_Company_logo.svg.png" className="h-8 md:h-12 object-contain" alt="New Era" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Marks_and_Spencer_Logo.svg/512px-Marks_and_Spencer_Logo.svg.png" className="h-6 md:h-10 object-contain" alt="M&S" />
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Hotel_Chocolat_Logo.svg/512px-Hotel_Chocolat_Logo.svg.png" className="h-8 md:h-10 object-contain" alt="Hotel Chocolat" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ted_Baker_logo.svg/512px-Ted_Baker_logo.svg.png" className="h-6 md:h-8 object-contain bg-black p-1 invert" alt="Ted Baker" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Asos_logo.svg/512px-Asos_logo.svg.png" className="h-6 md:h-8 object-contain" alt="Asos" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png" className="h-6 md:h-8 object-contain" alt="BBC" />
            </div>
         </div>
      </section>

      {/* Section 11: Shot in our Studios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-3xl md:text-4xl mb-12">Shot in our Studios</h2>
           <div className="flex gap-8 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:w-2/3">
              <div className="min-w-[300px] h-[500px] md:h-[700px] bg-white overflow-hidden shadow-xl">
                 <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=800&h=1200" alt="Fashion Shot 1" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-[300px] h-[500px] md:h-[700px] bg-white overflow-hidden shadow-xl mt-12 md:mt-24">
                 <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=1200" alt="Fashion Shot 2" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Section 12: Testimonials */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl md:text-4xl mb-20">What some of our visitors have to say.</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { name: "OLIVER KAY", role: "PHOTOGRAPHER/DIRECTOR", text: "Love shooting at Blend Studios! The Owner Barrie is welcoming and accommodating. Spacious studios, convenient from Central London." },
                { name: "RACHEL JONES", role: "SENIOR PRODUCER - TK MAXX", text: "Top-notch studio with a brilliant owner and attentive team who we have a great relationship with and who always makes us feel very welcome and fulfil all our production requirements on our many and varied shoots. I would recommend them to anyone looking to do a photoshoot in London." },
                { name: "PAT K - HALL", role: "PHOTOGRAPHER", text: "Great studio! Spacious, well-equipped and helpful staff. Highly recommended!" },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="flex text-white mb-6 space-x-1 text-xs">
                      {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed mb-8 italic">"{t.text}"</p>
                   <div className="mt-auto">
                      <span className="block font-bold text-sm tracking-widest uppercase border-b border-white/20 pb-2 mb-2 inline-block">{t.name}</span>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest">{t.role}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 16: Studio in Action */}
      <section className="py-32 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-3xl md:text-4xl mb-12">The Studio in Action.</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                 <div key={id} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group relative">
                    <img src={`https://images.unsplash.com/photo-${id % 2 === 0 ? '1600607686527-6fb886090705' : '1596706436423-f27303c735d4'}?auto=format&fit=crop&q=80&w=400&h=400&random=${id}`} alt="BTS" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
};