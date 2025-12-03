import { ReactNode } from 'react';

export interface SectionProps {
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
}

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CampaignCardProps {
  image: string;
  title: string;
  tag: string;
}

export interface DirectoryCardProps {
  image: string;
  name: string;
  category: string;
}