
import React from 'react';
import { MapPin, Clock, FileText } from 'lucide-react';

export const EventTimeline: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
       <h3 className="font-serif text-lg mb-6 flex items-center"><Clock size={18} className="mr-2"/> Production Timeline</h3>
       <div className="relative pl-6 border-l-2 border-gray-100 space-y-8">
          {[
            { time: "09:00", title: "Load In / Set Build", status: "completed" },
            { time: "11:00", title: "Talent Arrival (H&MU)", status: "active" },
            { time: "13:00", title: "Walkthrough / Rehearsal", status: "pending" },
            { time: "19:00", title: "Doors Open", status: "pending" },
          ].map((item, i) => (
             <div key={i} className="relative">
                <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white ${item.status === 'completed' ? 'bg-green-500' : item.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                <span className="text-xs font-mono text-gray-400 mb-1 block">{item.time}</span>
                <h4 className="font-bold text-sm">{item.title}</h4>
             </div>
          ))}
       </div>
    </div>
  );
};

export const EventVenue: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 h-full">
       <h3 className="font-serif text-lg mb-6 flex items-center"><MapPin size={18} className="mr-2"/> Venue Logistics</h3>
       
       <div className="aspect-video bg-gray-100 rounded-sm mb-4 relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600&h=400" alt="Venue Map" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
             <button className="bg-white/90 px-4 py-2 text-xs font-bold shadow-sm">View Google Maps</button>
          </div>
       </div>
       
       <div className="space-y-4">
          <div>
             <label className="text-[10px] font-bold uppercase text-gray-400">Address</label>
             <p className="text-sm">The Tate Tanks, Bankside, London SE1 9TG</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="text-[10px] font-bold uppercase text-gray-400">Capacity</label>
                <p className="text-sm">450 Standing</p>
             </div>
             <div>
                <label className="text-[10px] font-bold uppercase text-gray-400">Access</label>
                <p className="text-sm">Loading Bay B</p>
             </div>
          </div>
       </div>
    </div>
  );
};

export const RunOfShow: React.FC = () => {
   return (
    <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
       <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-lg flex items-center"><FileText size={18} className="mr-2"/> Run of Show</h3>
          <button className="text-xs text-blue-600 font-bold hover:underline">Download PDF</button>
       </div>
       <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
             <tr>
                <th className="p-2">Time</th>
                <th className="p-2">Activity</th>
                <th className="p-2">Owner</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
             {[1,2,3,4,5].map(i => (
                <tr key={i}>
                   <td className="p-2 font-mono text-xs">19:0{i}</td>
                   <td className="p-2">Opening Sequence - Lighting Cue {i}</td>
                   <td className="p-2 text-gray-500">Prod. Manager</td>
                </tr>
             ))}
          </tbody>
       </table>
    </div>
   );
};
