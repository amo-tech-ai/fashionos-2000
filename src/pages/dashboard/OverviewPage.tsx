
import React from 'react';

export const OverviewPage: React.FC = () => {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Active Projects</span>
            <p className="text-3xl font-serif mt-2">12</p>
         </div>
         <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Upcoming Shoots</span>
            <p className="text-3xl font-serif mt-2">5</p>
         </div>
         <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Pending Actions</span>
            <p className="text-3xl font-serif mt-2 text-orange-500">3</p>
         </div>
      </div>
      
      <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 min-h-[400px]">
         <h2 className="font-serif text-xl mb-6">Recent Activity</h2>
         <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center py-3 border-b border-gray-50 last:border-0">
                 <div className="w-2 h-2 rounded-full bg-purple-500 mr-4"></div>
                 <p className="text-sm text-gray-600">
                    <span className="font-bold text-black">New Booking:</span> Editorial Campaign for Oner Active
                 </p>
                 <span className="ml-auto text-xs text-gray-400">2 hours ago</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
