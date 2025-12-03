import React, { useEffect, useState } from 'react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Image } from '../../components/ui/Image';
import { Button } from '../../components/Button';
import { Search, MapPin, Filter } from 'lucide-react';

const mockTalent = [
  { id: 1, name: "Elena Rodriguez", role: "Photographer", location: "London", rate: "£800/day", img: "https://images.unsplash.com/photo-1554048612-387768052769?auto=format&fit=crop&q=80&w=400&h=500" },
  { id: 2, name: "Marcus Chen", role: "Stylist", location: "Paris", rate: "£600/day", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500" },
  { id: 3, name: "Sarah Jenkins", role: "Model", location: "NYC", rate: "£1000/day", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=500" },
  { id: 4, name: "David Kim", role: "Videographer", location: "London", rate: "£900/day", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500" },
  { id: 5, name: "Aisha M", role: "Model", location: "London", rate: "£750/day", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500" },
  { id: 6, name: "Tom Ford", role: "MUA", location: "Milan", rate: "£500/day", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" },
];

export const DirectoryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("All");

  const filteredTalent = filter === "All" ? mockTalent : mockTalent.filter(t => t.role === filter);

  return (
    <>
      <SEOHead title="Talent Directory" description="Find and book the best fashion photographers, models, stylists, and creatives." />
      
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
         <div className="max-w-[1320px] mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl mb-8">Talent Directory.</h1>
            
            {/* Search & Filters */}
            <div className="bg-white p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
               <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Search by name, skill, or keyword..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none outline-none text-sm" />
               </div>
               <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                  {['All', 'Photographer', 'Model', 'Stylist', 'MUA', 'Videographer'].map(role => (
                     <button 
                        key={role}
                        onClick={() => setFilter(role)}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${filter === role ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                     >
                        {role}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white min-h-screen">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {filteredTalent.map(talent => (
                  <div key={talent.id} className="group border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
                     <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                        <Image src={talent.img} alt={talent.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest">{talent.role}</span>
                     </div>
                     <div className="p-6">
                        <h3 className="font-serif text-xl mb-1">{talent.name}</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                           <MapPin size={12} className="mr-1" /> {talent.location}
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                           <span className="font-bold text-xs">{talent.rate}</span>
                           <span className="text-[10px] text-gray-400 uppercase tracking-widest cursor-pointer hover:text-black">View Profile</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};