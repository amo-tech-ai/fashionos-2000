
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
  Video,
  MapPin,
  Clock,
  Shirt
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isEventContext = location.pathname.includes('/dashboard/events/') && !location.pathname.includes('/new');
  
  // Parse ID if in event context
  const eventId = isEventContext ? location.pathname.split('/events/')[1].split('/')[0] : null;

  const globalMenu = [
    { icon: <LayoutDashboard size={18} />, label: 'Overview', path: '/dashboard' },
    { icon: <FolderKanban size={18} />, label: 'Projects', path: '/dashboard/projects' },
    { icon: <CalendarDays size={18} />, label: 'Events', path: '/dashboard/events' },
    { icon: <Users size={18} />, label: 'CRM & Sponsors', path: '/dashboard/sponsors' },
    { icon: <CreditCard size={18} />, label: 'Finance', path: '/dashboard/finance' },
  ];

  const eventMenu = [
    { icon: <LayoutDashboard size={18} />, label: 'Command Center', path: `/dashboard/events/${eventId}` },
    { icon: <Clock size={18} />, label: 'Timeline', path: `/dashboard/events/${eventId}/timeline` },
    { icon: <MapPin size={18} />, label: 'Logistics', path: `/dashboard/events/${eventId}/logistics` },
    { icon: <Shirt size={18} />, label: 'Casting', path: `/dashboard/events/${eventId}/casting` },
    { icon: <Users size={18} />, label: 'Sponsors', path: `/dashboard/events/${eventId}/sponsors` },
  ];

  return (
    <aside className="w-64 h-screen bg-[#121212] text-white flex flex-col fixed left-0 top-0 border-r border-gray-800">
      <div className="p-6 border-b border-gray-800">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight">FashionOS.</Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4">
        {isEventContext && (
          <div className="mb-6 pb-6 border-b border-gray-800">
             <Link to="/dashboard/events" className="flex items-center text-xs text-gray-400 hover:text-white transition-colors mb-4">
                <ArrowLeft size={14} className="mr-2" /> Back to Global
             </Link>
             <div className="px-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 block mb-1">Active Event</span>
                <h3 className="font-serif text-lg leading-tight">SS25 Runway <br/> Milan</h3>
             </div>
          </div>
        )}

        <ul className="space-y-1">
          {(isEventContext ? eventMenu : globalMenu).map((item, i) => {
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            return (
              <li key={i}>
                <Link 
                  to={item.path} 
                  className={`flex items-center px-4 py-3 text-sm rounded-md transition-all ${
                    isActive 
                      ? 'bg-white text-black font-medium' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span className={`mr-3 ${isActive ? 'text-black' : 'text-gray-500'}`}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-800">
        <Link to="/dashboard/settings" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
           <Settings size={18} className="mr-3" />
           Settings
        </Link>
      </div>
    </aside>
  );
};
