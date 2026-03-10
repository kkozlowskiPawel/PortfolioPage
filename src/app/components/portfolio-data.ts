export const profileData = {
  name: "Paweł Kozłowski",
  initials: "PK",
  title: "Senior Frontend Engineer",
  subtitle: "Architekt interfejsów webowych · React · TypeScript · Next.js",
  location: "Gdańsk, Polska",
  bio: `Jestem Senior Frontend Engineerem z ponad 5-letnim doświadczeniem w budowaniu skalowalnych aplikacji webowych dla sektora enterprise i fintech. Specjalizuję się w ekosystemie React, TypeScript i architekturze mikrofrontendów.

Prowadzę zespoły frontendowe, projektuję systemy designu i dostarczam produkty obsługujące setki tysięcy użytkowników. Łączę głęboką wiedzę techniczną z silnym zmysłem estetycznym i dbałością o UX.`,
  bioEn: `I'm a Senior Frontend Engineer with 5+ years of experience building scalable web applications for enterprise and fintech sectors. I specialize in the React ecosystem, TypeScript, and micro-frontend architecture.

I lead frontend teams, design component systems, and deliver products serving hundreds of thousands of users. I combine deep technical expertise with a strong eye for design and UX.`,
  availability: "Otwarty na propozycje",
  availabilityEn: "Open to opportunities",
  contact: {
    email: "pawel.kozlowski@proton.me",
    phone: "+48 512 345 678",
    linkedin: "pawelkozlowski-dev",
    github: "pkozlowski-dev",
    website: "pawelkozlowski.dev",
  },
};

export const skillsWithLevel = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "JavaScript ES6+", level: 96 },
  { name: "HTML / CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 78 },
  { name: "Git / CI/CD", level: 85 },
  { name: "Figma / Design", level: 72 },
  { name: "REST / GraphQL", level: 82 },
  { name: "PostgreSQL", level: 65 },
  { name: "Docker / K8s", level: 58 },
  { name: "Testing (Jest/Cypress)", level: 80 },
];

export const skills = skillsWithLevel.map((s) => s.name);

export const skillCategories = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API", "GraphQL", "Prisma"],
  tools: ["Git", "Docker", "Figma", "Jest", "Cypress", "Webpack", "Vite", "Storybook"],
};


export const experience = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    roleEn: "Senior Frontend Engineer",
    company: "FinTech Solutions Sp. z o.o.",
    period: "2023 — Obecnie",
    periodEn: "2023 — Present",
    description:
      "Prowadzenie zespołu 4 frontend developerów. Architektura mikrofrontendowa dla platformy bankowej obsługującej 200K+ użytkowników. Wdrożenie design systemu (60+ komponentów), redukcja czasu ładowania o 40%. Współpraca z product ownerami i zespołem UX.",
    descriptionEn:
      "Leading a team of 4 frontend developers. Micro-frontend architecture for a banking platform serving 200K+ users. Implemented a design system (60+ components), reduced load time by 40%. Collaboration with product owners and UX team.",
    icon: "briefcase" as const,
    highlights: ["Team Lead", "Design System", "200K+ users"],
    highlightsEn: ["Team Lead", "Design System", "200K+ users"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    roleEn: "Frontend Developer",
    company: "CloudBase Technologies",
    period: "2021 — 2023",
    periodEn: "2021 — 2023",
    description:
      "Budowanie dashboardów analitycznych w React i Next.js. Implementacja real-time data visualization z WebSocket. Optymalizacja wydajności (Lighthouse 95+). Wprowadzenie TypeScript do istniejącego codebase.",
    descriptionEn:
      "Building analytics dashboards with React and Next.js. Real-time data visualization with WebSocket. Performance optimization (Lighthouse 95+). Introduced TypeScript to existing codebase.",
    icon: "code" as const,
    highlights: ["React", "Next.js", "Lighthouse 95+"],
    highlightsEn: ["React", "Next.js", "Lighthouse 95+"],
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    roleEn: "Junior Frontend Developer",
    company: "Digital Agency Nordic",
    period: "2020 — 2021",
    periodEn: "2020 — 2021",
    description:
      "Tworzenie responsywnych interfejsów dla klientów e-commerce. Współpraca z designerami UI/UX. Nauka best practices, code review, agile/scrum. Realizacja 12+ projektów komercyjnych.",
    descriptionEn:
      "Building responsive interfaces for e-commerce clients. Collaboration with UI/UX designers. Learning best practices, code review, agile/scrum. Delivered 12+ commercial projects.",
    icon: "graduation" as const,
    highlights: ["E-commerce", "12+ projects", "Agile"],
    highlightsEn: ["E-commerce", "12+ projects", "Agile"],
  },
];

export const education = [
  {
    id: 1,
    school: "Politechnika Gdańska",
    schoolEn: "Gdańsk University of Technology",
    degree: "Informatyka — Inżynier (BSc)",
    degreeEn: "Computer Science — BSc",
    period: "2016 — 2020",
    description:
      "Specjalizacja: Inżynieria Oprogramowania. Praca dyplomowa: 'Architektura mikrofrontendów w aplikacjach enterprise'. Średnia ocen: 4.5/5.0.",
    descriptionEn:
      "Specialization: Software Engineering. Thesis: 'Micro-frontend Architecture in Enterprise Applications'. GPA: 4.5/5.0.",
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2024", org: "Amazon Web Services" },
  { name: "Meta Frontend Developer Professional Certificate", year: "2023", org: "Meta / Coursera" },
  { name: "Google UX Design Certificate", year: "2023", org: "Google / Coursera" },
  { name: "Advanced React Patterns", year: "2022", org: "Frontend Masters" },
  { name: "TypeScript Complete Developer", year: "2022", org: "Udemy" },
];

export const projects = [
  {
    id: 1,
    name: "NexusFlow",
    nameDisplay: "NexusFlow",
    subtitle: "Platforma workflow automation",
    subtitleEn: "Workflow automation platform",
    description:
      "Enterprise-grade platforma do automatyzacji procesów biznesowych. Drag & drop workflow builder, integracja z 30+ serwisami zewnętrznymi, real-time monitoring.",
    descriptionEn:
      "Enterprise-grade platform for business process automation. Drag & drop workflow builder, integration with 30+ external services, real-time monitoring.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Enterprise SaaS",
    featured: true,
    metrics: "15K+ użytkowników",
    metricsEn: "15K+ users",
  },
  {
    id: 2,
    name: "DataVault",
    nameDisplay: "DataVault",
    subtitle: "Dashboard analityczny",
    subtitleEn: "Analytics dashboard",
    description:
      "Real-time analytics dashboard dla sektora fintech. Wizualizacja danych finansowych, customizable widgets, eksport raportów PDF.",
    descriptionEn:
      "Real-time analytics dashboard for the fintech sector. Financial data visualization, customizable widgets, PDF report export.",
    tags: ["Next.js", "D3.js", "WebSocket", "Tailwind"],
    category: "FinTech",
    featured: false,
    metrics: "200K+ transakcji/dzień",
    metricsEn: "200K+ transactions/day",
  },
  {
    id: 3,
    name: "CloudSync",
    nameDisplay: "CloudSync",
    subtitle: "Cloud infrastructure monitoring",
    subtitleEn: "Cloud infrastructure monitoring",
    description:
      "System monitoringu infrastruktury chmurowej. Alerty, logi, metryki serwerów w jednym dashboardzie. Integracja z AWS, GCP, Azure.",
    descriptionEn:
      "Cloud infrastructure monitoring system. Alerts, logs, server metrics in a single dashboard. Integration with AWS, GCP, Azure.",
    tags: ["React", "Go", "Docker", "GraphQL"],
    category: "DevOps",
    featured: false,
    metrics: "99.9% uptime",
    metricsEn: "99.9% uptime",
  },
  {
    id: 4,
    name: "PixelForge",
    nameDisplay: "PixelForge",
    subtitle: "Design System & Component Library",
    subtitleEn: "Design System & Component Library",
    description:
      "Autorski design system z 60+ komponentami. Storybook, testy wizualne, tokeny designu, pełna dokumentacja. Używany przez 4 zespoły produktowe.",
    descriptionEn:
      "Custom design system with 60+ components. Storybook, visual tests, design tokens, full documentation. Used by 4 product teams.",
    tags: ["React", "Storybook", "Figma", "CSS-in-JS"],
    category: "Design System",
    featured: false,
    metrics: "60+ komponentów",
    metricsEn: "60+ components",
  },
  {
    id: 5,
    name: "SwiftPay",
    nameDisplay: "SwiftPay",
    subtitle: "Interfejs bramki płatniczej",
    subtitleEn: "Payment gateway interface",
    description:
      "Interfejs użytkownika dla bramki płatniczej obsługującej karty, BLIK, przelewy. Checkout flow z konwersją 94%. WCAG 2.1 AA compliant.",
    descriptionEn:
      "User interface for a payment gateway handling cards, BLIK, transfers. Checkout flow with 94% conversion. WCAG 2.1 AA compliant.",
    tags: ["Next.js", "Stripe", "TypeScript", "Prisma"],
    category: "FinTech",
    featured: false,
    metrics: "94% konwersja",
    metricsEn: "94% conversion",
  },
  {
    id: 6,
    name: "EcoTrack",
    nameDisplay: "EcoTrack",
    subtitle: "Platforma śledzenia emisji",
    subtitleEn: "Emissions tracking platform",
    description:
      "Platforma ESG do monitorowania i raportowania emisji CO₂. Interaktywne wykresy, benchmarking branżowy, eksport do formatu GRI.",
    descriptionEn:
      "ESG platform for monitoring and reporting CO₂ emissions. Interactive charts, industry benchmarking, GRI format export.",
    tags: ["React", "Recharts", "Node.js", "MongoDB"],
    category: "GreenTech",
    featured: false,
    metrics: "50+ firm",
    metricsEn: "50+ companies",
  },
];

export const badges = [
  { id: 1, name: "React Expert", color: "#61DAFB", icon: "⚛️" },
  { id: 2, name: "TypeScript", color: "#3178C6", icon: "🔷" },
  { id: 3, name: "Full Stack", color: "#22C55E", icon: "🔗" },
  { id: 4, name: "Team Lead", color: "#F59E0B", icon: "👥" },
  { id: 5, name: "UI/UX Design", color: "#8B5CF6", icon: "🎨" },
  { id: 6, name: "Performance", color: "#EF4444", icon: "⚡" },
  { id: 7, name: "Accessibility", color: "#06B6D4", icon: "♿" },
];

export const stats = {
  projects: 50,
  yearsExperience: 5,
  users: 200,
  technologies: 15,
};

export const cvText = `CURRICULUM VITAE - Paweł Kozłowski
Senior Frontend Engineer

KONTAKT:
Email: pawel.kozlowski@proton.me
Telefon: +48 512 345 678
LinkedIn: pawelkozlowski-dev
GitHub: pkozlowski-dev
Strona: pawelkozlowski.dev

DOSWIADCZENIE:
Senior Frontend Engineer - FinTech Solutions Sp. z o.o. (2023 - Obecnie)
Frontend Developer - CloudBase Technologies (2021 - 2023)
Junior Frontend Developer - Digital Agency Nordic (2020 - 2021)

EDUKACJA:
Politechnika Gdanska - Informatyka Inzynier BSc (2016 - 2020)

CERTYFIKATY:
AWS Certified Cloud Practitioner (2024)
Meta Frontend Developer Professional Certificate (2023)
Google UX Design Certificate (2023)

UMIEJETNOSCI:
React, Next.js, TypeScript, Node.js, Tailwind CSS, Figma, Git, Docker, JavaScript, HTML/CSS, REST API, GraphQL, PostgreSQL
`;