export type Project = {
  title: string;
  subtitle?: string;
  role: string;
  year: number;
  description: string;
  techStack: string[];
  id: string;
  externalUrl: string;
};
const projectsCardData: Project[] = [
  {
    title: "Folketsadvokatbyra.se",
    role: "Frontend Developer | Collaborated with UI/UX Designer",
    year: 2022,
    description:
      "Engineered a highly performant, multilingual static application. I was responsible for the technical implementation and translating the UI/UX designer's vision into clean, accessible code, leveraging Prerendering (SSG) for instantaneous loading.",
    techStack: [
      "React (v18)",
      "Prerendering (SSG)",
      "i18n (Multilingual)",
      "WordPress Headless CMS",
      "Axios",
      "CRA / Legacy Tooling",
    ],
    id: "folketsadvokatbyra",
    externalUrl: "https://folketsadvokatbyra.se",
  },
  {
    title: "Pono ya Moya",
    subtitle: "Modern Headless Application",
    role: "Sole Contributor | Full-Cycle Developer & Designer",
    year: 2025,
    description:
      "Designed, architected, and built this application as the sole contributor. It serves as a demonstration of best practices, combining a monorepo structure, Vite tooling, TypeScript, and a modern design system using Tailwind CSS v4.",
    techStack: [
      "TypeScript",
      "React (v18)",
      "Vite",
      "Sanity.io Headless CMS",
      "Monorepo",
      "Tailwind CSS v4",
      "Portable Text",
    ],
    id: "ponoyamoya",
    externalUrl: "https://ponoyamoya.com",
  },
  {
    title: "Open Letter Platform",
    subtitle: "Dynamic Content & i18n",
    role: "Sole Contributor | Full-Cycle Developer & Designer",
    year: 2024,
    description:
      "Designed, architected, and fully developed this platform as the sole contributor. The project showcases end-to-end ownership, managing a monorepo (Sanity.io + React) to deliver complex, multilingual rich-text content.",
    techStack: [
      "TypeScript",
      "React (v18)",
      "Sanity.io Headless CMS",
      "Monorepo",
      "i18n (Multilingual)",
      "Portable Text",
    ],
    id: "openletter",
    externalUrl: "https://sthlmculture4pal.netlify.app",
  },
];

export { projectsCardData };
