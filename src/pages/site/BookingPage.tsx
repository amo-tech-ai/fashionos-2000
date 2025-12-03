
import React from 'react';
import { BookingProvider, useBooking } from '../../features/booking/BookingContext';
import { WizardLayout } from '../../layouts/WizardLayout';
import { StepCategory, StepQuantity, StepBrief, StepReview } from '../../features/booking/BookingSteps';

const WizardContent: React.FC = () => {
  const { step } = useBooking();
  
  const renderStep = () => {
    switch(step) {
      case 1: return <StepCategory />;
      case 2: return <StepQuantity />;
      case 3: return <StepBrief />;
      case 4: return <StepReview />;
      default: return <StepCategory />;
    }
  };

  const titles = [
    "What are we shooting today?",
    "How large is the collection?",
    "Tell us about the creative vision.",
    "Review & Confirm"
  ];

  return (
    <WizardLayout title={titles[step - 1]}>
       {renderStep()}
    </WizardLayout>
  );
};

export const BookingPage: React.FC = () => {
  return (
    <BookingProvider>
      <WizardContent />
    </BookingProvider>
  );
};
