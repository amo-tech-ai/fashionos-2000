import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  CalendarDays, 
  Users, 
  CreditCard, 
  Settings, 
  ArrowLeft,
  Zap,
  PlusCircle,
  Layers,
  Gem,
  LogOut,
  PieChart,
  UserCheck
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isEventContext = location.pathname.includes('/dashboard/events/') && !location.pathname.includes('/new');
  
  // Parse ID if in event context
  const eventId = isEventContext ? location.pathname.split('/events/')[1].split('/')[0] : null;

  const globalMenu = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FolderKanban size={18} />, label: 'Projects', path: '/dashboard/projects' },
    { icon: <CalendarDays size={18} />, label: 'Events', path: '/dashboard/events' },
    { icon: <Users size={18} />, label: 'CRM & Sponsors', path: '/dashboard/sponsors' },
    { icon: <CreditCard size={18} />, label: 'Finance', path: '/dashboard/finance' },
  ];

  const eventMenu = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Zap size={18} />, label: 'Command Center', path: `/dashboard/events/${eventId}` },
    { icon: <PieChart size={18} />, label: 'Event Dashboard', path: `/dashboard/events/${eventId}/overview` },
    { icon: <PlusCircle size={18} />, label: 'Create Event Wizard', path: `/dashboard/events/new` },
    { icon: <Layers size={18} />, label: 'Runway & Layout', path: `/dashboard/events/${eventId}/layout` },
    { icon: <UserCheck size={18} />, label: 'Casting & Models', path: `/dashboard/events/${eventId}/casting` },
    { icon: <Gem size={18} />, label: 'Designer & Sponsors', path: `/dashboard/events/${eventId}/sponsors` },
    { icon: <Settings size={18} />, label: 'Settings', path: `/dashboard/events/${eventId}/settings` },
  ];

  return (
    <aside className="w-64 h-screen bg-white text-editorial-black flex flex-col fixed left-0 top-0 border-r border-gray-100 z-30 hidden md:flex font-sans">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight">FashionOS.</Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4">
        {isEventContext && (
          <div className="mb-6 pb-6 border-b border-gray-100 px-2">
             <Link to="/dashboard/events" className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-4 group">
                <ArrowLeft size={12} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Global
             </Link>
             <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-1">Active Event</span>
                <h3 className="font-serif text-lg leading-tight">NYFW SS25 <br/> Runway Show</h3>
             </div>
          </div>
        )}

        <ul className="space-y-1">
          {(isEventContext ? eventMenu : globalMenu).map((item, i) => {
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname === item.path);
            // Special case for Command Center being active root
            const isCommandCenter = item.label === 'Command Center' && location.pathname === `/dashboard/events/${eventId}`;
            
            return (
              <li key={i}>
                <Link 
                  to={item.path} 
                  className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all ${
                    isActive || isCommandCenter
                      ? 'bg-gray-50 text-black font-medium shadow-sm' 
                      : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <span className={`mr-3 ${isActive || isCommandCenter ? 'text-black' : 'text-gray-400'}`}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-100 space-y-1">
        <button className="w-full flex items-center px-4 py-3 text-sm text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
           <LogOut size={18} className="mr-3" />
           Logout
        </button>
      </div>
    </aside>
  );
};