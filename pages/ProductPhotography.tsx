import React, { useEffect } from 'react';
import { ProductHero } from '../components/product/ProductHero';
import { 
  ExceptionalImagery, 
  StudioTrust, 
  ProductGallery, 
  ProductExperience, 
  EcommerceHighlight, 
  ProductTestimonial, 
  ProductBenefits, 
  ProductBrands, 
  ProductBTS 
} from '../components/product/ProductSections';
import { ProductContact } from '../components/product/ProductContact';

export const ProductPhotography: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProductHero />
      <ExceptionalImagery />
      <StudioTrust />
      <ProductGallery />
      <ProductExperience />
      <EcommerceHighlight />
      <ProductTestimonial />
      <ProductBenefits />
      <ProductBrands />
      <ProductContact />
      <ProductBTS />
    </>
  );
};