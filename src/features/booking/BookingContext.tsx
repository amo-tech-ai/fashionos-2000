
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingState {
  serviceType: string;
  category: string;
  shotCount: number;
  date: Date | null;
  brief: string;
}

interface BookingContextType {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
  estimatedPrice: number;
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<BookingState>({
    serviceType: 'ecom',
    category: '',
    shotCount: 20,
    date: null,
    brief: '',
  });

  const updateState = (updates: Partial<BookingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  // Mock pricing logic
  const estimatedPrice = state.shotCount * (state.serviceType === 'editorial' ? 150 : 80);

  return (
    <BookingContext.Provider value={{ state, updateState, estimatedPrice, step, setStep, nextStep, prevStep }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
};
