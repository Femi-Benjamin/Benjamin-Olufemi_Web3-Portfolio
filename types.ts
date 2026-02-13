import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link: string;
  demoLink?: string;
  image: string;
  screenshots?: string[];
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