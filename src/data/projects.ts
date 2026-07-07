import type { Project } from '@/types';

/*
 * From CV "Projects". Add `image: '/projects/<name>.png'` (files under
 * /public/projects) to replace the generated gradient covers.
 */
export const projects: Project[] = [
  {
    title: 'Gift Unwrap',
    description:
      'Full-stack MERN e-commerce platform supporting authentication, cart management, order processing, and product reviews — with a responsive storefront and an admin dashboard for managing products and orders.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'E-commerce'],
    liveUrl: 'https://giftunwrap-puce.vercel.app/',
    featured: true,
    year: '2024',
  },
  {
    title: 'Internet Banking Portal',
    description:
      'Enterprise digital banking portal used by financial institutions. Built UI modules for account management, debit card services, bill payment, transaction history, and request management.',
    tags: ['ASP.NET Core', 'Enterprise', 'Fintech'],
    featured: true,
    year: '2024',
  },
  {
    title: 'Merchant Onboarding Portal',
    description:
      'Platform where merchants are onboarded and granted access to payment gateways based on their usage requirements. Built the complete UI, session management, and integration of all APIs.',
    tags: ['Next.js', 'Payments', 'Fintech'],
    featured: true,
    year: '2025',
  },
  {
    title: 'Agency Portal',
    description:
      'Agent portal enabling small business owners to manage financial processes — send/receive money, cash-in/out, and bill payments. Owned the Receive Money, Transaction History, and Dashboard modules.',
    tags: ['Next.js', 'Fintech', 'Dashboards'],
    year: '2025',
  },
  {
    title: 'Skill Matrix',
    description:
      'Internal employee management platform. Built a dashboard of interactive graphs integrated with multiple APIs, and an org-hierarchy view letting employees trace their reporting line up to the CEO.',
    tags: ['React', 'Data Visualization', 'Internal Tools'],
    year: '2025',
  },
];
