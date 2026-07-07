import type { ExperienceItem } from '@/types';

/* From CV "Work Experience", newest first. */
export const experience: ExperienceItem[] = [
  {
    company: 'TPS Worldwide',
    role: 'Front-End Engineer',
    period: 'Oct 2023 — Present',
    location: 'Karachi, Pakistan',
    type: 'Full-time',
    summary:
      'Building banking portals and financial platforms used by multiple institutions, with a focus on performance, reusability, and consistent cross-device experiences.',
    highlights: [
      'Build and refine responsive, high-performance UIs using React, ensuring consistent user experiences across devices and platforms.',
      'Develop reusable React components for maintainability, enabling faster development cycles and improving code modularity.',
      'Integrate frontend features with backend data efficiently, collaborating closely with backend and design teams.',
      'Utilize jQuery and vanilla JavaScript for legacy systems and lightweight features across diverse environments.',
      'Participate in daily stand-ups, sprint planning, and code reviews as part of Agile development processes.',
    ],
    tech: ['React.js', 'Next.js', 'JavaScript', 'jQuery', 'ASP.NET', 'REST APIs'],
  },
  {
    company: 'TPS Worldwide',
    role: 'Front-End Engineer Intern',
    period: 'Jun 2023 — Sept 2023',
    location: 'Karachi, Pakistan',
    type: 'Internship',
    summary:
      'Completed company product training and contributed to internal projects, gaining practical experience and technical skills.',
    highlights: [
      'Trained on TPS product suites and internal engineering standards.',
      'Contributed to internal projects under senior guidance.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Git'],
  },
];
