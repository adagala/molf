import { ReactNode } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface PracticeArea {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
