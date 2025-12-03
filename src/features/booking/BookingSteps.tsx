
import React from 'react';
import { useBooking } from './BookingContext';
import { Camera, Video, Sparkles, Shirt } from 'lucide-react';
import { Button } from '../../components/Button';

// STEP 1: Category
export const StepCategory: React.FC = () => {
  const { state, updateState } = useBooking();
  const options = [
    { id: 'ecom', label: 'E-Commerce', icon: <Shirt size={24}/>, desc: 'On-model or mannequin for sales.' },
    { id: 'editorial', label: 'Editorial', icon: <Camera size={24}/>, desc: 'Creative campaign imagery.' },
    { id: 'video', label: 'Video Production', icon: <Video size={24}/>, desc: 'Reels, TikToks, and Campaign films.' },
    { id: 'social', label: 'Social Content', icon: <Sparkles size={24}/>, desc: 'Quick-turnaround lifestyle content.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => updateState({ serviceType: opt.id })}
          className={`p-6 text-left border rounded-lg transition-all ${
            state.serviceType === opt.id 
              ? 'border-black bg-gray-50 ring-1 ring-black' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="mb-4 text-gray-800">{opt.icon}</div>
          <h3 className="font-serif text-lg font-bold mb-1">{opt.label}</h3>
          <p className="text-xs text-gray-500">{opt.desc}</p>
        </button>
      ))}
    </div>
  );
};

// STEP 2: Quantity
export const StepQuantity: React.FC = () => {
  const { state, updateState } = useBooking();
  return (
    <div className="py-8">
      <label className="block text-sm font-bold uppercase tracking-widest mb-8">
        How many looks/products? <span className="text-2xl ml-4 font-serif">{state.shotCount}</span>
      </label>
      <input 
        type="range" 
        min="1" 
        max="100" 
        value={state.shotCount}
        onChange={(e) => updateState({ shotCount: parseInt(e.target.value) })}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-4">
        <span>1 Look</span>
        <span>100+ Looks</span>
      </div>
    </div>
  );
};

// STEP 3: Brief
export const StepBrief: React.FC = () => {
  const { state, updateState } = useBooking();
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Creative Brief</label>
        <textarea 
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm h-48 focus:outline-none focus:border-black transition-colors"
          placeholder="Describe your vision, mood, and requirements..."
          value={state.brief}
          onChange={(e) => updateState({ brief: e.target.value })}
        ></textarea>
      </div>
      <div className="flex justify-end">
         <button className="flex items-center text-xs font-bold uppercase tracking-widest text-purple-600 hover:text-purple-800">
           <Sparkles size={14} className="mr-2" /> AI Polish
         </button>
      </div>
    </div>
  );
};

// STEP 4: Review
export const StepReview: React.FC = () => {
  const { state } = useBooking();
  return (
    <div className="bg-gray-50 p-8 border border-gray-100">
       <h3 className="font-serif text-xl mb-6">Summary</h3>
       <dl className="space-y-4 text-sm">
          <div className="flex justify-between">
             <dt className="text-gray-500">Service Type</dt>
             <dd className="font-bold capitalize">{state.serviceType}</dd>
          </div>
          <div className="flex justify-between">
             <dt className="text-gray-500">Quantity</dt>
             <dd className="font-bold">{state.shotCount} items</dd>
          </div>
           <div className="flex justify-between">
             <dt className="text-gray-500">Brief Length</dt>
             <dd className="font-bold">{state.brief.length} chars</dd>
          </div>
       </dl>
    </div>
  );
};
