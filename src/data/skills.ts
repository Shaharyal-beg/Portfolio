import type { SkillCategory } from '@/types';

/* From CV "Core Strengths". */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Frameworks & Languages',
    description: 'The core of every interface I ship.',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'JavaScript (ES6+)' },
      { name: 'ASP.NET' },
      { name: 'jQuery' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    title: 'UI & Styling',
    description: 'Design systems and pixel-perfect, responsive UI.',
    skills: [
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'Shadcn UI' },
      { name: 'React Bootstrap' },
      { name: 'Responsive Design' },
      { name: 'Cross-browser Compatibility' },
    ],
  },
  {
    title: 'Architecture & Integration',
    description: 'Connecting frontends to the systems behind them.',
    skills: [
      { name: 'RESTful APIs' },
      { name: 'JWT Authentication' },
      { name: 'State Management' },
      { name: 'SSR / CSR' },
      { name: 'Localization (i18n)' },
      { name: 'Ajax' },
    ],
  },
  {
    title: 'Tooling & Practices',
    description: 'The craft around the code — shipping with confidence.',
    skills: [
      { name: 'Git' },
      { name: 'Webpack' },
      { name: 'Babel' },
      { name: 'Unit Testing' },
      { name: 'Performance Optimization' },
      { name: 'Agile Methodologies' },
    ],
  },
];
