
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const columns = [
  { id: 'lead', label: 'Lead', color: 'bg-gray-100' },
  { id: 'contacted', label: 'Contacted', color: 'bg-blue-50' },
  { id: 'proposal', label: 'Proposal Sent', color: 'bg-yellow-50' },
  { id: 'signed', label: 'Signed', color: 'bg-green-50' },
];

const mockSponsors = [
  { id: 1, name: "LVMH Group", status: 'lead', value: '£50k' },
  { id: 2, name: "Sephora", status: 'contacted', value: '£25k' },
  { id: 3, name: "Evian", status: 'signed', value: '£10k' },
  { id: 4, name: "Red Bull", status: 'proposal', value: '£35k' },
];

export const SponsorPipeline: React.FC = () => {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-200px)]">
      {columns.map(col => (
        <div key={col.id} className="min-w-[300px] bg-gray-50 rounded-lg p-4 flex flex-col">
           <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm uppercase tracking-wide">{col.label}</h3>
              <span className="text-xs text-gray-400 font-mono">
                {mockSponsors.filter(s => s.status === col.id).length}
              </span>
           </div>
           
           <div className="space-y-3 flex-1">
              {mockSponsors.filter(s => s.status === col.id).map(card => (
                 <div key={card.id} className="bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md cursor-grab active:cursor-grabbing">
                    <div className="flex justify-between items-start mb-2">
                       <span className="font-bold text-sm">{card.name}</span>
                       <button className="text-gray-400 hover:text-black"><MoreHorizontal size={14} /></button>
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Fashion / Retail</div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                       <span className="text-xs font-mono font-bold">{card.value}</span>
                       <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      ))}
      <div className="min-w-[50px] flex items-center justify-center">
         <button className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 text-gray-400 hover:border-black hover:text-black flex items-center justify-center text-xl">+</button>
      </div>
    </div>
  );
};
