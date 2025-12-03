import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Shirt, 
  CreditCard,
  FileText,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';

// --- Hero Card ---
export const EventHero: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-purple-50/50 to-blue-50/30 rounded-3xl p-8 border border-white shadow-sm relative overflow-hidden mb-8 group">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-60"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
             <span className="bg-blue-100/50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-100">Fashion Show</span>
             <span className="bg-purple-100/50 text-purple-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-purple-100 flex items-center shadow-sm">
               <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 animate-pulse"></span> Live
             </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">NYFW SS25 Runway Show</h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2 text-sm bg-white/60 px-4 py-2 rounded-full border border-white shadow-sm">
              <Calendar size={14} className="text-gray-400" />
              <span className="font-medium">March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-white/60 px-4 py-2 rounded-full border border-white shadow-sm">
              <MapPin size={14} className="text-gray-400" />
              <span className="font-medium">Chelsea Industrial, NYC</span>
            </div>
             <div className="flex items-center gap-2 text-sm bg-white/60 px-4 py-2 rounded-full border border-white shadow-sm">
              <Clock size={14} className="text-gray-400" />
              <span className="font-medium text-purple-600">42 Days to Go</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:shadow-md transition-all">
               <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Progress</div>
               <div className="text-2xl font-sans font-bold text-gray-900">87%</div>
               <div className="text-[10px] text-green-600 font-bold bg-green-50 inline-block px-1.5 py-0.5 rounded-sm">+5% this week</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:shadow-md transition-all">
               <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Sponsors</div>
               <div className="text-2xl font-sans font-bold text-gray-900">12</div>
               <div className="text-[10px] text-green-600 font-bold bg-green-50 inline-block px-1.5 py-0.5 rounded-sm">+2 New</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:shadow-md transition-all">
               <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Attendees</div>
               <div className="text-2xl font-sans font-bold text-gray-900">1,740</div>
               <div className="text-[10px] text-green-600 font-bold bg-green-50 inline-block px-1.5 py-0.5 rounded-sm">+45% vs LY</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:shadow-md transition-all">
               <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Tasks</div>
               <div className="text-2xl font-sans font-bold text-gray-900">28</div>
               <div className="text-[10px] text-orange-600 font-bold bg-orange-50 inline-block px-1.5 py-0.5 rounded-sm">4 Urgent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Critical Tasks ---
export const CriticalTasks: React.FC = () => {
  const tasks = [
    { title: "Finalize Lighting Setup", tag: "Urgent", color: "bg-red-50 text-red-600 border-red-100", dot: "bg-red-500" },
    { title: "Confirm Guest List", tag: "In Progress", color: "bg-yellow-50 text-yellow-600 border-yellow-100", dot: "bg-yellow-500" },
    { title: "Model Fitting Schedule", tag: "Pending", color: "bg-green-50 text-green-600 border-green-100", dot: "bg-green-500" },
    { title: "Sponsor Logo Approvals", tag: "In Progress", color: "bg-yellow-50 text-yellow-600 border-yellow-100", dot: "bg-yellow-500" },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-gray-900">Critical Path</h3>
        <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">View All Tasks</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tasks.map((task, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${task.color}`}>
                {task.tag}
              </span>
              <div className={`w-2 h-2 rounded-full ${task.dot} shadow-[0_0_8px_rgba(0,0,0,0.1)]`}></div>
            </div>
            <h4 className="font-medium text-lg text-gray-900 leading-snug group-hover:text-purple-600 transition-colors">{task.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Sponsor Progress ---
export const SponsorProgress: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-8">
        <div>
           <h3 className="font-serif text-xl text-gray-900 mb-1">Sponsorship Goal</h3>
           <span className="bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border border-green-100">On Track</span>
        </div>
        <div className="bg-gray-50 p-2 rounded-full">
           <CreditCard size={20} className="text-gray-400" />
        </div>
      </div>
      
      <div className="mb-3 flex justify-between items-end">
         <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold font-serif text-gray-900">$485k</span>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">Raised</span>
         </div>
         <span className="text-xs text-gray-500 font-medium">97% of $500k</span>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full shadow-[0_2px_10px_rgba(192,132,252,0.4)]" style={{ width: '97%' }}></div>
      </div>

      <div className="space-y-4 flex-1">
        {[
          { name: "Sephora", amount: "$150k", logo: "S", color: "bg-black text-white" },
          { name: "Nike Women", amount: "$200k", logo: "N", color: "bg-black text-white" },
          { name: "Dior Beauty", amount: "$85k", logo: "D", color: "bg-black text-white" },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
             <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center font-serif font-bold text-sm shadow-sm group-hover:scale-110 transition-transform`}>
                  {s.logo}
                </div>
                <span className="text-sm font-bold text-gray-700">{s.name}</span>
             </div>
             <span className="text-sm font-medium text-gray-900 bg-gray-50 px-3 py-1 rounded-md border border-gray-100 group-hover:bg-white">{s.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Deliverables Grid ---
export const DeliverablesStatus: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-serif text-xl text-gray-900">Deliverables</h3>
         <MoreHorizontal className="text-gray-300 hover:text-black cursor-pointer" size={20} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
         {[
           { count: 24, label: "Completed", bg: "bg-green-50", text: "text-green-600" },
           { count: 12, label: "In Progress", bg: "bg-blue-50", text: "text-blue-600" },
           { count: 5, label: "In Review", bg: "bg-yellow-50", text: "text-yellow-600" },
           { count: 8, label: "At Risk", bg: "bg-red-50", text: "text-red-600" }
         ].map((stat, i) => (
           <div key={i} className={`${stat.bg} rounded-2xl p-4 flex flex-col justify-center items-center text-center transition-transform hover:scale-105`}>
              <span className={`text-3xl font-bold ${stat.text} mb-1`}>{stat.count}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${stat.text} opacity-80`}>{stat.label}</span>
           </div>
         ))}
      </div>
    </div>
  );
};

// --- Venue & Casting Card ---
export const VenueCastingRow: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Venue Card */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Chelsea Industrial</h4>
                  <p className="text-xs text-gray-500 font-medium">1,200 Guest Capacity</p>
                </div>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
             <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Catering Confirmed</span>
          </div>
          <div className="flex items-center text-xs text-gray-500 font-medium bg-gray-50 p-3 rounded-xl">
             <Clock size={14} className="mr-2 text-gray-400"/> Setup Time: 6 hours
          </div>
      </div>

      {/* Casting Card */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500">
                  <Shirt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Casting</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <p className="text-xs text-gray-500 font-medium">32 Confirmed</p>
                  </div>
                </div>
            </div>
            <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase border border-orange-100">8 Pending</span>
          </div>
          
          <div className="space-y-2">
             <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Fittings Progress</span>
                <span>28/32</span>
             </div>
             <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" style={{ width: '82%' }}></div>
             </div>
          </div>
      </div>
    </div>
  );
};

// --- Process Navigator ---
export const ProcessNavigator: React.FC = () => {
  const steps = [
    { label: "Event", icon: <Calendar size={14} />, active: true },
    { label: "Venue", icon: <MapPin size={14} />, active: false },
    { label: "Sponsors", icon: <CreditCard size={14} />, active: false },
    { label: "Deliverables", icon: <CheckCircle2 size={14} />, active: false },
    { label: "Tasks", icon: <FileText size={14} />, active: false },
    { label: "Analytics", icon: <AlertCircle size={14} />, active: false },
  ];

  return (
    <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      {steps.map((step, i) => (
        <button 
          key={i}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
            step.active 
              ? 'bg-black text-white shadow-lg shadow-gray-200 scale-105' 
              : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:text-black'
          }`}
        >
          {step.icon} {step.label}
        </button>
      ))}
    </div>
  );
};

// --- Milestones ---
export const UpcomingMilestones: React.FC = () => {
  const milestones = [
     { date: "Mar 1", title: "Final Guest List", days: "8 days", done: true },
     { date: "Mar 5", title: "Sponsor Approvals", days: "12 days", done: false },
     { date: "Mar 10", title: "Final Walkthrough", days: "17 days", done: false },
     { date: "Mar 14", title: "Rehearsal Day", days: "21 days", done: false },
     { date: "Mar 15", title: "Show Day", days: "22 days", done: false, highlight: true },
  ];

  return (
    <div className="mt-4">
       <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl text-gray-900">Upcoming Milestones</h3>
          <button className="text-xs font-bold uppercase tracking-widest text-purple-600 hover:text-purple-800 flex items-center transition-colors">
            View Calendar <ArrowRight size={14} className="ml-1" />
          </button>
       </div>
       <div className="flex gap-6 overflow-x-auto pb-6">
          {milestones.map((m, i) => (
             <div key={i} className={`min-w-[200px] p-5 rounded-2xl border flex flex-col justify-between h-32 transition-transform hover:scale-105 ${
               m.highlight 
                ? 'bg-black text-white border-black shadow-xl shadow-gray-300' 
                : m.done 
                  ? 'bg-gray-50 border-gray-100 opacity-60' 
                  : 'bg-white border-gray-100 shadow-sm'
             }`}>
                <div className="flex justify-between items-start">
                   <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${
                     m.highlight ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                   }`}>{m.date}</span>
                   {m.done && <CheckCircle2 size={16} className="text-green-500" />}
                </div>
                <div>
                   <h4 className="font-bold text-sm mb-1">{m.title}</h4>
                   <p className={`text-xs font-medium ${m.highlight ? 'text-purple-300' : 'text-purple-600'}`}>{m.days}</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};