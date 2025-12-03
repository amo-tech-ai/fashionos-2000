import React from 'react';
import { ArrowRight } from 'lucide-react';

const campaigns = [
  { id: 1, title: "Summer Editorial '25", tag: "Campaign", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=600" },
  { id: 2, title: "Milan Fashion Week", tag: "Runway", img: "https://images.unsplash.com/photo-1595950653165-7e6b5130f853?auto=format&fit=crop&q=80&w=800&h=600" },
  { id: 3, title: "Urban Streetwear", tag: "Lookbook", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800&h=600" },
];

export const LatestCampaigns: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
             <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Featured Work</span>
             <h2 className="font-serif text-4xl md:text-5xl text-editorial-black">Latest Campaigns</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-xs font-bold tracking-widest uppercase hover:text-gray-600 transition-colors">
            Swipe to Explore <span className="ml-4 w-12 h-[1px] bg-black"></span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((camp) => (
            <div key={camp.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 relative">
                <img 
                  src={camp.img} 
                  alt={camp.title} 
                  className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2 block">{camp.tag}</span>
              <h3 className="font-serif text-2xl group-hover:text-gray-600 transition-colors">{camp.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};