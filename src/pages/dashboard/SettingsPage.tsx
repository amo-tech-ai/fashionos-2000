
import React from 'react';
import { Button } from '../../components/Button';
import { Save, User, Bell, Lock } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8 border-b border-gray-200 pb-8">
        <h1 className="font-serif text-3xl mb-2">Settings</h1>
        <p className="text-gray-500 text-sm">Manage your account preferences and workspace configuration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="col-span-1">
          <nav className="space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white border border-gray-200 shadow-sm rounded-sm font-medium text-sm">
              <User size={16} />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-black rounded-sm transition-colors text-sm">
              <Bell size={16} />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-black rounded-sm transition-colors text-sm">
              <Lock size={16} />
              <span>Security</span>
            </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          
          {/* Profile Section */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="font-serif text-xl mb-6">Profile Information</h3>
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-6">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                 <Button variant="outline" className="text-xs py-2">Change Avatar</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" defaultValue="Barrie" className="w-full bg-gray-50 border-none p-3 text-sm focus:ring-1 focus:ring-black rounded-sm" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" defaultValue="Gordon" className="w-full bg-gray-50 border-none p-3 text-sm focus:ring-1 focus:ring-black rounded-sm" />
               </div>
            </div>
            
            <div className="mb-8">
               <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
               <input type="email" defaultValue="barrie@fashionos.com" className="w-full bg-gray-50 border-none p-3 text-sm focus:ring-1 focus:ring-black rounded-sm" />
            </div>

            <div className="flex justify-end">
               <Button className="flex items-center text-xs">
                 <Save size={14} className="mr-2" /> Save Changes
               </Button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
             <h3 className="font-serif text-xl mb-6">Preferences</h3>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div>
                      <h4 className="font-bold text-sm">Email Notifications</h4>
                      <p className="text-xs text-gray-500">Receive emails about new bookings.</p>
                   </div>
                   <div className="w-10 h-6 bg-black rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                   </div>
                </div>
                 <div className="flex items-center justify-between">
                   <div>
                      <h4 className="font-bold text-sm">Marketing Emails</h4>
                      <p className="text-xs text-gray-500">Receive news about FashionOS features.</p>
                   </div>
                   <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
