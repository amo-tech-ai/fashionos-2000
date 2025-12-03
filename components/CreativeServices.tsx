import React from 'react';
import { Camera, Scissors, ShoppingBag, Video } from 'lucide-react';

const services = [
  { icon: <Camera strokeWidth={1} size={32}/>, title: 'Campaigns', desc: 'Editorial-quality campaigns for new launches and seasonal stories.' },
  { icon: <Scissors strokeWidth={1} size={32}/>, title: 'Runway', desc: 'On-the-ground coverage that captures energy, details, and atmosphere.' },
  { icon: <ShoppingBag strokeWidth={1} size={32}/>, title: 'Ecommerce', desc: 'High-volume, consistent imagery optimized for online sales.' },
  { icon: <Video strokeWidth={1} size={32}/>, title: 'Video & Social', desc: 'Short-form video, reels, and behind-the-scenes content for social.' },
];

export const CreativeServices: React.FC = () => {
  return (
    <section className="py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">What we do</span>
            <h2 className="font-serif text-4xl">Creative Services</h2>
          </div>
          <a href="#" className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-black pb-1">View All Services</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="mb-8 text-gray-400 group-hover:text-black transition-colors">{s.icon}</div>
              <h3 className="font-serif text-xl mb-4">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{s.desc}</p>
              <a href="#" className="text-[10px] font-bold tracking-widest uppercase flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                View Details <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};