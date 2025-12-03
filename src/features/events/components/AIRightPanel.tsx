import React, { useState } from 'react';
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, ChevronRight, PieChart, Users, ChevronDown, ArrowRight } from 'lucide-react';

export const AIRightPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`w-80 bg-white border-l border-gray-100 h-[calc(100vh-64px)] overflow-y-auto hidden xl:flex flex-col sticky top-16 shadow-[-10px_0_40px_rgba(0,0,0,0.02)] z-30 font-sans transition-all duration-300`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-1.5 rounded-lg">
                    <Sparkles className="text-purple-600" size={16} />
                </div>
                <div>
                    <h3 className="font-bold text-sm text-gray-900 leading-none">AI Reasoning</h3>
                    <p className="text-[10px] text-purple-600 font-bold uppercase tracking-widest mt-1">Gemini-Powered</p>
                </div>
            </div>
        </div>

        {/* Live Insights */}
        <div className="space-y-4 mb-10">
           <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 pl-1">Live Insights</h4>
           
           <div className="p-4 bg-white rounded-xl border border-green-100 shadow-[0_4px_20px_rgba(34,197,94,0.05)] cursor-pointer hover:border-green-300 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
              <div className="flex items-start gap-3 relative z-10">
                 <div className="bg-green-50 p-1.5 rounded-lg text-green-600">
                    <TrendingUp size={14} />
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-gray-900">Attendance</p>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 rounded-sm">+45%</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">High engagement on RSVP page suggests capacity strain.</p>
                 </div>
              </div>
           </div>

           <div className="p-4 bg-white rounded-xl border border-red-100 shadow-[0_4px_20px_rgba(239,68,68,0.05)] cursor-pointer hover:border-red-300 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
              <div className="flex items-start gap-3 relative z-10">
                 <div className="bg-red-50 p-1.5 rounded-lg text-red-600">
                    <AlertTriangle size={14} />
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-gray-900">Risk: Delays</p>
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 rounded-sm">High</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">Lighting setup task is 2 days overdue.</p>
                 </div>
              </div>
           </div>

           <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-[0_4px_20px_rgba(59,130,246,0.05)] cursor-pointer hover:border-blue-300 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
              <div className="flex items-start gap-3 relative z-10">
                 <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                    <Lightbulb size={14} />
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-gray-900">Sponsor Growth</p>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 rounded-sm">Med</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">Sephora engagement suggests upsell opportunity.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* AI Reasoning Cards */}
        <div className="space-y-4">
           <div className="flex items-center justify-between pl-1 mb-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Analysis</h4>
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
           </div>

           <div className="border border-gray-100 rounded-2xl p-0 overflow-hidden shadow-sm transition-all hover:shadow-md bg-white">
              <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                 <div className="flex items-center gap-2">
                    <PieChart size={14} className="text-gray-400" />
                    <span className="font-bold text-xs text-gray-700">Budget Forecast</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-green-600 text-[10px] font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">97% On Track</span>
                    <ChevronDown size={14} className="text-gray-400" />
                 </div>
              </div>
              <div className="p-4 bg-white">
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                     Current spending is aligned with projections. AI suggests shifting $2k from Catering to PR for better ROI.
                  </p>
                  <button className="text-[10px] font-bold text-purple-600 flex items-center hover:underline group">
                     Suggest Minor PR Spend <ArrowRight size={10} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
           </div>

           <div className="border border-gray-100 rounded-2xl p-0 overflow-hidden shadow-sm transition-all hover:shadow-md bg-white">
              <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                 <div className="flex items-center gap-2">
                    <Users size={14} className="text-gray-400" />
                    <span className="font-bold text-xs text-gray-700">Venue Risk</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-orange-500 text-[10px] font-bold bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">Capacity Risk</span>
                     <ChevronDown size={14} className="text-gray-400" />
                 </div>
              </div>
              <div className="p-4 bg-white">
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                     With 1,740 expected attendees, we are nearing the 1,200 capacity limit. Consider opening overflow mezzanine.
                  </p>
                  <button className="text-[10px] font-bold text-purple-600 flex items-center hover:underline group">
                     View Plan <ArrowRight size={10} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
           </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
           <button className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
              <Sparkles size={14} /> Ask Copilot
           </button>
        </div>

      </div>
    </div>
  );
};