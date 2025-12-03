import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Hero } from '../components/Hero';
import { LatestCampaigns } from '../components/LatestCampaigns';
import { AboutStudio } from '../components/AboutStudio';
import { SignatureStory } from '../components/SignatureStory';
import { EcommerceProduct } from '../components/EcommerceProduct';
import { Testimonial } from '../components/Testimonial';
import { CreativeServices } from '../components/CreativeServices';
import { FashionDirectory } from '../components/FashionDirectory';
import { Marketplace } from '../components/Marketplace';
import { BehindTheScenes } from '../components/BehindTheScenes';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Hero />
      <LatestCampaigns />
      <AboutStudio />
      <SignatureStory />
      <EcommerceProduct />
      <Testimonial />
      <CreativeServices />
      <FashionDirectory />
      <Marketplace />
      <BehindTheScenes />
      <Contact />
    </>
  );
};