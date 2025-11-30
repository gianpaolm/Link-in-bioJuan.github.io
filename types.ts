import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}