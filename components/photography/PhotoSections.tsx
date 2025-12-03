import React, { useState } from 'react';
import { Button } from '../Button';
import { Camera, Box, Aperture, Plus, Minus, Play } from 'lucide-react';

// --- Highlight Banner ---
export const PhotoFeatureGrid: React.FC = () => {
  const features = [
    { title: "Studio & On-Model", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800", desc: "Full service studio production with casting." },
    { title: "Stocking & Commercial", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600&h=800", desc: "High volume ghost mannequin and flat lay." },
    { title: "Runway & Fashion Week", img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=600&h=800", desc: "Live event coverage and backstage." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-2xl mb-2 group-hover:text-gray-600 transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{f.desc}</p>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Learn More</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Brand Statement ---
export const PhotoBrandStatement: React.FC = () => {
  return (
    <section className="py-32 bg-editorial-beige/20">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
               We create brand-elevating, fashion photography & video.
             </h2>
             <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
               Our on-model services include editorial photoshoots, lookbook creation, campaign photography, and e-commerce photography. We foster a collaborative process where our personalized service ensures client-focused results every time.
             </p>
             <p className="text-gray-600 text-lg font-light leading-relaxed">
               Treat us like your very own in-house studio.
             </p>
           </div>
           <div className="relative">
             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1000" alt="Editorial Portrait" className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg" />
           </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Overview Grid ---
export const PhotoServicesOverview: React.FC = () => {
  const services = [
    { title: "Collaborative", img: "https://images.unsplash.com/photo-1529139574466-a302d20525a4?auto=format&fit=crop&q=80&w=300&h=400", desc: "Fostering a collaborative process ensuring client-focused results." },
    { title: "Scalable", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=300&h=400", desc: "Offering scalable workflows handling projects of any size." },
    { title: "Industry Expertise", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=300&h=400", desc: "Extensive experience in the fashion industry with a portfolio of high-profile clients." },
    { title: "On-Trend", img: "https://images.unsplash.com/photo-1485230984865-1c2485484232?auto=format&fit=crop&q=80&w=300&h=400", desc: "Our services can be customized to meet your specific needs." },
  ];

  return (
    <section className="py-24 bg-gray-50">
       <div className="max-w-[1320px] mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                 <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-gray-100">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                 <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

// --- Creative Showcase ---
export const PhotoShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">E-commerce Fashion Video</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our e-commerce fashion video service is designed to help your clothing stand out online—whether it's clean, crisp model walk-throughs, detailed close-ups that highlight fit and fabric, or something a little more creative.
              </p>
              <ul className="mb-8 space-y-2">
                 <li className="font-bold text-sm">Catwalk-style videos</li>
                 <li className="font-bold text-sm">Full-length model walk-throughs</li>
                 <li className="font-bold text-sm">Close-up detail shots</li>
                 <li className="font-bold text-sm">Ideal for social media</li>
              </ul>
              <div><Button>View Examples</Button></div>
           </div>
           <div>
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800&h=1000" alt="Fashion Video Placeholder" className="w-full h-full object-cover rounded-sm shadow-md" />
           </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 bg-gray-100 p-12 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1550614000-4b9519e09063?auto=format&fit=crop&q=80&w=600&h=600" alt="Apparel Product" className="w-2/3 object-contain drop-shadow-xl" />
           </div>
           <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Apparel Product Photography</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We have years of expertise in producing quality clothing photography. We can present your collection in various ways, including invisible mannequins, hung flats, and creative flat lays.
              </p>
              <Button variant="outline">More Info</Button>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- BTS ---
export const PhotoBTS: React.FC = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
       <div className="absolute inset-0 opacity-60">
          <img src="https://images.unsplash.com/photo-1596706436423-f27303c735d4?auto=format&fit=crop&q=80&w=1920&h=1080" alt="Studio BTS" className="w-full h-full object-cover grayscale" />
       </div>
       <div className="relative z-10 text-center text-white px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-8 cursor-pointer hover:scale-110 transition-transform">
             <Play className="fill-white ml-1" size={32} />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl mb-4">Behind-the-Scenes</h2>
          <p className="text-lg text-gray-300 font-light mb-8 max-w-xl mx-auto">
             Capture the energy behind the camera. Our BTS video give your clients a glimpse into your shoots.
          </p>
          <Button variant="white">Watch the Studio Reel</Button>
       </div>
    </section>
  );
};

// --- Trust ---
export const PhotoTrust: React.FC = () => {
  return (
    <section className="py-16 border-b border-gray-100 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
         <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Trusted by Major Retail Brands</p>
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Logos represented by text for simplicity, replace with SVGs in prod */}
            <span className="text-xl font-serif font-bold">VOGUE</span>
            <span className="text-xl font-serif font-bold">ELLE</span>
            <span className="text-xl font-serif font-bold">HARPER'S BAZAAR</span>
            <span className="text-xl font-serif font-bold">GQ</span>
            <span className="text-xl font-serif font-bold">VANITY FAIR</span>
         </div>
      </div>
    </section>
  );
};

// --- FAQ ---
export const PhotoFAQ: React.FC = () => {
  const faqs = [
    { q: "What is included in the photography and videography packages?", a: "Our packages include a professional photographer/videographer, studio rental, and lighting. You'll receive a minimum of 40 images/video files for a half-day session or 70 images/video files for a full-day session." },
    { q: "Do you provide models for the shoot?", a: "Yes, we handle full casting from our directory of verified talent." },
    { q: "Do you offer hair and make-up services?", a: "We have a roster of HMUAs available for booking at an additional day rate." },
    { q: "How long does it take to receive the final images?", a: "Typical turnaround is 3-5 business days for standard retouching." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-12 text-center">Ecom On-Model Fashion FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <div key={i} className="border border-gray-200 rounded-sm overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {openIndex === i && (
                  <div className="p-6 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
             </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <Button variant="outline">View All FAQs</Button>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
export const PhotoTestimonials: React.FC = () => {
   return (
     <section className="py-24 bg-editorial-beige/30">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, i) => (
                <div key={i} className="bg-white p-8 shadow-sm">
                   <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">"The team at FashionOS are both highly professional and knowledgeable. I trust them to deliver high-quality fashion images that perfectly align with our brand."</p>
                   <div>
                      <span className="block font-bold text-sm uppercase">Catarina Fernandes</span>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Hervé and Hudson</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
     </section>
   );
};

// --- More Services ---
export const PhotoMoreServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-12 flex flex-col items-start">
               <h3 className="font-serif text-3xl mb-4">Our Campaign Fashion <br/> Photography Service</h3>
               <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                 Rest assured, we're well-equipped and fully prepared for your more creative shoots. We can supply everything you need, from our in-house fashion photographer to digital operators.
               </p>
               <Button variant="outline" className="mt-auto">Learn More</Button>
            </div>
             <div className="h-full min-h-[400px]">
                <img src="https://images.unsplash.com/photo-1549570652-c73ae207eef5?auto=format&fit=crop&q=80&w=800&h=800" alt="Campaign Service" className="w-full h-full object-cover" />
             </div>
         </div>
      </div>
    </section>
  );
};

// --- CTA ---
export const PhotoCTA: React.FC = () => {
   return (
     <section className="py-32 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
           <h2 className="font-serif text-4xl md:text-5xl mb-6">Get in Touch.</h2>
           <p className="text-gray-400 mb-10">Ready to create something extraordinary? Start your brief today.</p>
           <form className="max-w-md mx-auto space-y-4 text-left mb-12">
              <input type="text" placeholder="First Name*" className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
               <input type="email" placeholder="Email Address*" className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
               <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest mt-4">Submit</button>
           </form>
        </div>
     </section>
   );
};