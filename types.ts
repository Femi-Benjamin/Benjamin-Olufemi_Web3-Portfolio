import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  screenshots?: string[];
  
  // New fields for enhanced portfolio
  repoUrl?: string;
  liveUrl?: string; // Replaces demoLink
  caseStudyUrl?: string;
  
  highlights?: string[]; // measurable impact
  role?: string;
  stack?: string[]; // detailed tech stack
  challenges?: string[];
  category: 'frontend' | 'web3' | 'tools' | 'all';
}

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number; // 0-100
  category: 'frontend' | 'web3' | 'tools';
}

export interface NavItem {
  label: string;
  href: string;
}