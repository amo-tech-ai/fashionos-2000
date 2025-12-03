import React from 'react';
import { Bell, Search, Sparkles, User, Menu } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="h-16 border-b border-gray-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
      
      {/* Search */}
      <div className="flex items-center flex-1 max-w-2xl">
        <div className="relative w-full md:w-96 group">
           <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
           <input 
             type="text" 
             placeholder="Search sponsors, venues, tasks, contacts..." 
             className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-full text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-purple-200 focus:bg-white outline-none transition-all"
           />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
         
         {/* AI Badge */}
         <div className="hidden md:flex items-center bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-full px-3 py-1.5">
            <Sparkles size={12} className="text-purple-600 mr-2 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700 bg-clip-text">AI-Powered</span>
         </div>

         <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Bell size={18} className="text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
         </button>
         
         <div className="flex items-center space-x-3 pl-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-[1px] shadow-sm">
               <div className="w-full h-full rounded-full overflow-hidden bg-white">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" className="w-full h-full object-cover" />
               </div>
            </div>
            <Menu className="md:hidden text-gray-500" />
         </div>
      </div>
    </div>
  );
};