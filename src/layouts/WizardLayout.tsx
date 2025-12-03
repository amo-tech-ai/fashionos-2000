
import React from 'react';
import { useBooking } from '../features/booking/BookingContext';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const WizardLayout: React.FC<Props> = ({ children, title, subtitle }) => {
  const { estimatedPrice, step, nextStep, prevStep } = useBooking();

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left: Form Area */}
      <div className="flex-1 p-8 md:p-16 flex flex-col">
        <div className="mb-12 flex justify-between items-center">
           <Link to="/" className="font-serif text-xl font-bold">FashionOS.</Link>
           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Step {step} of 4</span>
        </div>

        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">
           <h1 className="font-serif text-3xl md:text-4xl mb-2">{title}</h1>
           {subtitle && <p className="text-gray-500 mb-8">{subtitle}</p>}
           
           <div className="flex-1">
             {children}
           </div>

           <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
              <button 
                onClick={prevStep} 
                disabled={step === 1}
                className="text-sm font-bold text-gray-500 hover:text-black disabled:opacity-30 uppercase tracking-widest"
              >
                Back
              </button>
              <button 
                onClick={nextStep}
                className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                {step === 4 ? 'Confirm Booking' : 'Next Step'}
              </button>
           </div>
        </div>
      </div>

      {/* Right: Receipt (Hidden on mobile) */}
      <div className="hidden md:block w-96 bg-gray-50 border-l border-gray-100 p-12">
         <div className="sticky top-12">
            <h2 className="font-serif text-2xl mb-8">Estimated Cost</h2>
            <div className="space-y-4 mb-8">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Base</span>
                  <span>£500.00</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Production Fee</span>
                  <span>£150.00</span>
               </div>
               <div className="pt-4 border-t border-gray-200 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>£{estimatedPrice + 650}</span>
               </div>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
               <h4 className="font-bold text-xs uppercase tracking-widest mb-4">What's included</h4>
               <ul className="text-xs text-gray-500 space-y-2">
                  <li>• Professional Studio Team</li>
                  <li>• High-End Retouching</li>
                  <li>• Usage Rights (Digital)</li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
};
