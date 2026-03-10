# Portfolio — Paweł Kozłowski

Personal portfolio of Paweł Kozłowski, Senior Frontend Engineer. Built with React and TypeScript, featuring bilingual support, dark/light mode, and smooth scroll animations.

Portfolio osobiste Pawła Kozłowskiego, Senior Frontend Engineera. Zbudowane w React i TypeScript z obsługą dwóch języków, trybem ciemnym/jasnym i płynnymi animacjami.

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 18, TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4, CSS custom properties |
| UI components | Radix UI, Lucide React |
| Animations | CSS keyframes, IntersectionObserver |
| Package manager | pnpm |

---

## Features

- **Bilingual** — Polish / English toggle
- **Dark / Light mode** — toggle with smooth transitions
- **Scroll animations** — staggered entrance animations, animated counters
- **CV download** — generates and downloads a plain-text CV file
- **Responsive** — mobile-first layout, works on all screen sizes
- **SEO ready** — proper `<title>`, `<meta description>`, Open Graph tags

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Root component, scroll tracking, settings panel
│   └── components/
│       ├── page-landing.tsx     # Hero / landing section
│       ├── page-home.tsx        # Overview dashboard
│       ├── page-about.tsx       # Profile, contact, experience timeline
│       ├── page-projects.tsx    # Project gallery
│       ├── page-education.tsx   # Education & certifications
│       ├── page-contact.tsx     # Contact form
│       ├── section-nav.tsx      # Prev/next section navigation
│       ├── section-footer.tsx   # Reusable section footer bar
│       └── portfolio-data.ts    # All content data (projects, skills, etc.)
├── context/
│   └── AppContext.tsx           # Theme context — darkMode, lang, onOpenSection
├── lib/
│   └── constants.ts            # Design tokens (colors, animation timings)
├── styles/
│   ├── index.css               # Global styles, animations, dot-grid
│   ├── fonts.css               # Font-face declarations
│   └── tailwind.css            # Tailwind entry point
└── assets/                     # Project screenshot images
docs/
└── COMMENTS.md                 # Technical commentary on non-obvious code decisions
```
