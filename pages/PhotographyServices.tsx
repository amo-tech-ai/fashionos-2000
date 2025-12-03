import React, { useEffect } from 'react';
import { PhotoHero } from '../components/photography/PhotoHero';
import { PhotoPackages } from '../components/photography/PhotoPackages';
import { 
  PhotoFeatureGrid, 
  PhotoBrandStatement, 
  PhotoServicesOverview, 
  PhotoShowcase, 
  PhotoBTS, 
  PhotoTrust, 
  PhotoFAQ, 
  PhotoTestimonials, 
  PhotoMoreServices, 
  PhotoCTA 
} from '../components/photography/PhotoSections';

export const PhotographyServices: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PhotoHero />
      <PhotoFeatureGrid />
      <PhotoPackages />
      <PhotoBrandStatement />
      <PhotoServicesOverview />
      <PhotoShowcase />
      <PhotoBTS />
      <PhotoTrust />
      <PhotoFAQ />
      <PhotoTestimonials />
      <PhotoMoreServices />
      <PhotoCTA />
    </>
  );
};