import type { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/** Every observable section on the page, in document order (navbar highlights a subset). */
export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'certificates',
  'education',
  'stack',
  'testimonials',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
