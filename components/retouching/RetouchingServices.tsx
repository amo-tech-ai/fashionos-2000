import React from 'react';
import { Button } from '../Button';
import { Sparkles, Gem, Palette, Eraser, Layers, CheckCircle } from 'lucide-react';

export const RetouchingServices: React.FC = () => {
  const services = [
    { icon: <Sparkles size={24} />, title: "Skin & Beauty Retouching.", desc: "Clean, natural, premium finish that preserves texture while perfecting skin tone." },
    { icon: <Gem size={24} />, title: "Jewellery Retouching.", desc: "Focus stacking, shine enhancement, reflection management, and micro-detail perfection." },
    { icon: <Palette size={24} />, title: "Colour Grading & Make-Up.", desc: "Tone consistency, creative color grading, and digital make-up enhancement." },
    { icon: <Eraser size={24} />, title: "Product Cleanup & Enhancement.", desc: "Dust removal, reflection control, shape symmetry, and material cleanup." },
    { icon: <Layers size={24} />, title: "Creative Compositing.", desc: "Complex multi-shot merges, background replacement, and artistic visual effects." },
    { icon: <CheckCircle size={24} />, title: "Consistent Delivery.", desc: "Strict adherence to style guides ensuring brand-aligned outcomes every time." },
  ];

  return (
    <>
      {/* Section 2: In-House Creative & Commercial Retouching */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">In-House Creative <br/> & Commercial Retouching</h2>
                <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
                  At Blend Studios, our in-house post-production team specialise in retouching images for commercial campaigns, fashion and e-commerce projects.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                   We're used to working on images under tight deadlines—without compromising on consistency, detail or brand requirements. Whether it's high-volume product photography or low-volume, detail-led campaign imagery, we are committed to bringing the same level of care, quality and expertise to every project.
                </p>
                <Button variant="outline">View Samples</Button>
             </div>
             <div className="order-1 lg:order-2 h-[500px] overflow-hidden bg-gray-50 p-8 shadow-sm">
                 <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=800&h=800" alt="Cosmetic Retouching" className="w-full h-full object-cover mix-blend-multiply" />
             </div>
           </div>
        </div>
      </section>

      {/* Section 3: Post-Production Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-6">
           <h2 className="font-serif text-4xl mb-12 text-center">Our Post-Production Services.</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm">
                   <div className="text-gray-400 mb-6">{s.icon}</div>
                   <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 4: Retouching Showcase Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
         <div className="absolute inset-0 opacity-70">
            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=1600&h=900" alt="Retouching Showcase" className="w-full h-full object-cover grayscale" />
         </div>
         <div className="relative z-10 p-12 border border-white/30 backdrop-blur-sm bg-black/20">
            <h2 className="font-serif text-5xl md:text-7xl text-white tracking-wide">RETOUCHING <br/> SHOWCASE.</h2>
         </div>
      </section>
    </>
  );
};