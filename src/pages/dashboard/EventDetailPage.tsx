
import React from 'react';
import { EventTimeline, EventVenue, RunOfShow } from '../../features/events/EventLogistics';

export const EventDetailPage: React.FC = () => {
  return (
    <div>
       <div className="mb-8 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-4xl mb-2">SS25 Runway Milan</h1>
          <div className="flex gap-4 text-sm text-gray-500">
             <span>Sep 24, 2025</span>
             <span>•</span>
             <span>The Tate Tanks</span>
             <span>•</span>
             <span className="text-green-600 font-bold">Production Active</span>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
             <RunOfShow />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EventTimeline />
                {/* Placeholder for Cast List */}
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                   <h3 className="font-serif text-lg mb-4">Casting Status</h3>
                   <div className="text-center py-8 text-gray-400 text-sm">32 / 40 Models Confirmed</div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-1 space-y-8">
             <EventVenue />
             <div className="bg-blue-50 p-6 border border-blue-100 rounded-sm">
                <h4 className="font-bold text-blue-800 text-sm mb-2">Weather Alert</h4>
                <p className="text-xs text-blue-600">Rain forecast for load-in day. Ensure covered walkway is prepped.</p>
             </div>
          </div>
       </div>
    </div>
  );
};
