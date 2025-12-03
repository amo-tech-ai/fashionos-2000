import React, { useEffect } from 'react';
import { ClothingHero } from '../components/clothing/ClothingHero';
import { ClothingIntro } from '../components/clothing/ClothingIntro';
import { ClothingServiceList } from '../components/clothing/ClothingServiceList';
import { ClothingFeatures } from '../components/clothing/ClothingFeatures';
import { ClothingFAQ, ClothingContact, ClothingBrands } from '../components/clothing/ClothingFAQContact';
import { ClothingVisuals } from '../components/clothing/ClothingVisuals';

export const ClothingPhotography: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ClothingHero />
      <ClothingIntro />
      <ClothingServiceList />
      <ClothingFeatures />
      <ClothingFAQ />
      <ClothingContact />
      <ClothingBrands />
      <ClothingVisuals />
    </>
  );
};