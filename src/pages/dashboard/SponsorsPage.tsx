
import React from 'react';
import { SponsorPipeline } from '../../features/crm/SponsorPipeline';

export const SponsorsPage: React.FC = () => {
  return (
    <div>
       <div className="flex justify-between items-end mb-8">
          <h1 className="font-serif text-3xl">Sponsorship CRM</h1>
          <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest">Add Sponsor</button>
       </div>
       <SponsorPipeline />
    </div>
  );
};
