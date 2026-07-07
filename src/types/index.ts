export type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-up'
  | 'download'
  | 'menu'
  | 'close'
  | 'external'
  | 'quote'
  | 'award'
  | 'briefcase'
  | 'graduation'
  | 'sparkle'
  | 'copy'
  | 'check';

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  /** Rotating descriptors shown in the hero */
  roles: string[];
  tagline: string;
  summary: string;
  about: string[];
  location: string;
  email: string;
  phone?: string;
  /** Path under /public, e.g. "/avatar.jpg" */
  avatar?: string;
  /** Path under /public, e.g. "/cv.pdf" */
  resumeUrl?: string;
  availability: string;
  stats: Stat[];
}

export interface Social {
  name: string;
  url: string;
  handle?: string;
  icon: IconName;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  details?: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Path under /public or remote URL; omit for the gradient placeholder cover */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  year?: string;
  /** Marks demo/placeholder entries pending real content */
  placeholder?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  credentialId?: string;
  placeholder?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  placeholder?: boolean;
}

export interface TechItem {
  name: string;
}

export interface NavLink {
  id: string;
  label: string;
}
