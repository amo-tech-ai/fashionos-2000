
import React from 'react';
import { Bell, Search } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 sticky top-0 z-20">
      
      {/* Breadcrumbs / Search */}
      <div className="flex items-center flex-1">
        <div className="relative w-64">
           <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search projects, events..." 
             className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-sm text-xs focus:ring-1 focus:ring-black outline-none transition-all"
           />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
         <button className="relative">
            <Bell size={18} className="text-gray-500 hover:text-black transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
         </button>
         
         <div className="flex items-center space-x-3 border-l border-gray-100 pl-6">
            <div className="text-right hidden md:block">
               <span className="block text-xs font-bold text-black">Barrie Gordon</span>
               <span className="block text-[10px] text-gray-400 uppercase">Admin</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
         </div>
      </div>
    </div>
  );
};
