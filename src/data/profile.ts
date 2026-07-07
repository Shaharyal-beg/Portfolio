import type { Profile } from '@/types';

/* Populated from Shaharyal Beg's CV (July 2026). Keep index.html meta in sync. */
export const profile: Profile = {
  name: 'Shaharyal',
  firstName: 'Shaharyal',
  role: 'Frontend Developer',
  roles: [
    'Frontend Developer',
    'React.js Engineer',
    'Next.js Developer',
    'UI Engineer',
  ],
  tagline: 'I build scalable, high-performance web experiences.',
  summary:
    'Frontend Developer with 3+ years of experience building scalable, high-performance web applications with React.js, Next.js, and JavaScript — currently crafting banking portals and financial platforms at TPS Worldwide.',
  about: [
    'I’m a frontend developer with 3+ years of experience building scalable, high-performance web applications using React.js, Next.js, and JavaScript. I currently work at TPS Worldwide, contributing to banking portals and financial platforms used by multiple institutions.',
    'My day-to-day is responsive UI systems, reusable component libraries, and REST API integration in fintech and enterprise applications — where performance, cross-browser reliability, and clean maintainable code aren’t nice-to-haves, they’re the job.',
    'Beyond enterprise work, I’ve shipped a full-stack MERN e-commerce platform (Gift Unwrap) end-to-end — authentication, cart, order processing, reviews, and an admin dashboard. I’m passionate about performance optimization and modern frontend architecture.',
  ],
  location: 'Karachi, Pakistan',
  email: 'Shaharyal.beg@gmail.com',
  phone: '+92 346 5987104',
  avatar: undefined, // drop a photo in /public and set '/avatar.jpg'
  resumeUrl: '/Shaharyal_Beg_Resume.pdf', // drop your CV PDF into /public with this exact filename
  availability: 'Open to new opportunities',
  stats: [
    { value: 3, suffix: '+', label: 'Years of experience' },
    { value: 6, suffix: '', label: 'Major products shipped' },
    { value: 4, suffix: '', label: 'Enterprise fintech platforms' },
    { value: 15, suffix: '+', label: 'Technologies in the toolkit' },
  ],
};
