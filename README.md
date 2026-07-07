# Shaharyal — Portfolio

Premium, highly animated personal portfolio built with **React 19 + Vite + Tailwind CSS v4 + TypeScript**.

Dark, glassmorphic design with a fully custom, dependency-free animation system: scroll reveals, staggered headline text, magnetic buttons, 3D tilt cards, cursor glow, parallax, aurora gradient backgrounds, and infinite marquees — all IntersectionObserver / requestAnimationFrame based, respecting `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
├── App.tsx                  # Page composition (below-fold sections are lazy-loaded)
├── main.tsx                 # Entry point
├── index.css                # Design tokens (@theme), keyframes, base styles, utilities
├── components/
│   ├── sections/            # Hero, About, Skills, Experience, Projects, Certificates,
│   │                        # Education, TechStack, Testimonials, Contact
│   ├── layout/              # Navbar (floating glass, hide-on-scroll), Footer
│   ├── animations/          # Reveal, StaggerText, Magnetic, TiltCard, CountUp,
│   │                        # AuroraBackground, CursorGlow, ScrollProgress, Marquee
│   └── ui/                  # Icon, Button, Chip, SectionHeading, GlassCard
├── data/                    # ← ALL content lives here (edit these, not components)
├── hooks/                   # useInView, useScrollDirection, useActiveSection, etc.
├── lib/                     # cn, clamp, lerp, scrollToId
├── constants/               # Nav links / section ids
└── types/                   # Shared interfaces
```

## Updating content

Everything renders from `src/data/`:

| File | Section | Status |
| --- | --- | --- |
| `profile.ts` | Hero, About, Contact, Footer | ✅ From CV |
| `socials.ts` | Everywhere | ⚠️ Verify LinkedIn/GitHub URLs |
| `skills.ts` | Skills | ✅ From CV |
| `experience.ts` | Experience timeline | ✅ From CV |
| `education.ts` | Education | ✅ From CV |
| `projects.ts` | Projects | ✅ From CV (add `image` paths for real covers) |
| `certificates.ts` | Certificates | 🔲 Placeholder — replace and remove `placeholder: true` |
| `testimonials.ts` | Testimonials | 🔲 Placeholder — replace and remove `placeholder: true` |
| `techstack.ts` | Tech Stack marquee | ✅ From CV |

Also update when deploying:

- `index.html` — canonical URL / OG image domain (currently `https://shaharyalbeg.dev` placeholder)
- `public/robots.txt` and `public/sitemap.xml` — same domain
- Drop `Shaharyal_Beg_Resume.pdf`, `avatar.jpg`, and `og-image.png` into `public/`

## Optional upgrades

The animation layer is architected so these can slot in without API changes:

- `framer-motion` — swap `Reveal` / `StaggerText` internals for `motion` components
- `lenis` — route `src/lib/scroll.ts` through `lenis.scrollTo`
- `gsap` — for timeline-based scenes
