import React, { useEffect } from 'react';
import { 
  EventHero, 
  CriticalTasks, 
  SponsorProgress, 
  DeliverablesStatus,
  VenueCastingRow,
  ProcessNavigator,
  UpcomingMilestones 
} from '../../features/events/components/EventDashboardComponents';
import { AIRightPanel } from '../../features/events/components/AIRightPanel';

export const EventDetailPage: React.FC = () => {
  // Use negative margin hack to break out of DashboardLayout's default padding if present, 
  // or just fill container if layout is flush.
  // We'll assume DashboardLayout structure is a flex row. 
  // This component represents the 'Outlet' content.
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-white -m-8"> 
      {/* -m-8 is used to counteract the p-8 padding from the DashboardLayout wrapper to allow full-height/width layout for this specific page */}
      
      {/* Main Center Content - Scrollable */}
      <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] scroll-smooth">
         <div className="p-8 max-w-[1600px] mx-auto">
             
             <ProcessNavigator />
             <EventHero />
             <CriticalTasks />

             {/* Bento Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                <div className="lg:col-span-4 flex flex-col h-full">
                   <SponsorProgress />
                </div>
                <div className="lg:col-span-4 flex flex-col h-full">
                   <DeliverablesStatus />
                </div>
                <div className="lg:col-span-4 flex flex-col h-full">
                   <VenueCastingRow />
                </div>
             </div>

             <UpcomingMilestones />
             
             {/* Bottom padding for scroll */}
             <div className="h-20"></div>
          </div>
       </div>

       {/* Right AI Sidebar - Fixed */}
       <AIRightPanel />
    </div>
  );
};