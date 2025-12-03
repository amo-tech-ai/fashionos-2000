import React, { useEffect } from 'react';
import { RetouchingHero } from '../components/retouching/RetouchingHero';
import { RetouchingServices as Services } from '../components/retouching/RetouchingServices';
import { RetouchingGallery } from '../components/retouching/RetouchingGallery';
import { RetouchingContact } from '../components/retouching/RetouchingContact';

export const RetouchingServices: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RetouchingHero />
      <Services />
      <RetouchingGallery />
      <RetouchingContact />
    </>
  );
};