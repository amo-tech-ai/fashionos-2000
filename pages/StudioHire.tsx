import React, { useEffect } from 'react';
import { StudioHero } from '../components/studio/StudioHero';
import { StudioPricingAndIntro } from '../components/studio/StudioPricingAndIntro';
import { StudioFacilities } from '../components/studio/StudioFacilities';
import { StudioSocial } from '../components/studio/StudioSocial';
import { StudioDetails } from '../components/studio/StudioDetails';

export const StudioHire: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <StudioHero />
      <StudioPricingAndIntro />
      <StudioFacilities />
      <StudioSocial />
      <StudioDetails />
    </div>
  );
};