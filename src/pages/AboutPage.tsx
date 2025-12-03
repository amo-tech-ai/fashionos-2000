import React, { useEffect } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Image } from '../components/ui/Image';
import { Button } from '../components/Button';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    { year: "2003", title: "The Beginning", desc: "Founded in a small North London loft with a single camera and a vision for editorial quality in e-commerce." },
    { year: "2008", title: "Expansion", desc: "Moved to our first commercial studio in Shoreditch. Started working with emerging high-street brands." },
    { year: "2015", title: "Digital Transformation", desc: "Launched our proprietary asset management system. Team grew to 20 full-time creatives." },
    { year: "2020", title: "The New HQ", desc: "Opened our flagship 4000 sq ft studio in NW London. Introduced video production services." },
    { year: "2024", title: "FashionOS", desc: "Rebranded to FashionOS, integrating AI tools and streamlined booking workflows." }
  ];

  const team = [
    { name: "Barrie Gordon", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Sarah Jenkins", role: "Head of Production", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "David Chen", role: "Lead Photographer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Elena Rodriguez", role: "Art Director", img: "https://images.unsplash.com/photo-1554048612-387768052769?auto=format&fit=crop&q=80&w=400&h=500" }
  ];

  return (
    <>
      <SEOHead title="About Us" description="Learn about FashionOS history, our team, and our mission to empower fashion brands with exceptional imagery." />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50">
         <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
               <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Our Story</span>
               <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                  Crafting visual <br/> narratives since 2003.
               </h1>
               <p className="text-gray-600 text-lg font-light leading-relaxed max-w-lg">
                  We are more than just a studio. We are a team of passionate creatives dedicated to elevating fashion brands through world-class imagery and seamless production.
               </p>
            </div>
            <div className="aspect-[4/5] relative">
               <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=1000" alt="Team at work" className="w-full h-full rounded-sm shadow-xl" />
            </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="font-serif text-4xl mb-16 text-center">Our Journey.</h2>
            <div className="max-w-4xl mx-auto border-l border-gray-200 pl-8 space-y-16">
               {timeline.map((item, i) => (
                  <div key={i} className="relative group">
                     <div className="absolute -left-[39px] w-5 h-5 bg-white border-4 border-gray-200 rounded-full group-hover:border-black transition-colors"></div>
                     <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">{item.year}</span>
                     <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-[1320px] mx-auto px-6">
            <h2 className="font-serif text-4xl mb-16 text-center">Meet the Team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {team.map((member, i) => (
                  <div key={i} className="group">
                     <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-200">
                        <Image src={member.img} alt={member.name} className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{member.role}</p>
                  </div>
               ))}
            </div>
            <div className="mt-16 text-center">
               <p className="font-serif text-2xl mb-6">Want to join us?</p>
               <Button variant="outline">View Careers</Button>
            </div>
         </div>
      </section>
    </>
  );
};