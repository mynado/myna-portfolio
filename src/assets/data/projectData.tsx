import {
  ProjectThumbFolkets,
  ProjectThumbnPonoYaMoya,
  ProjectThumbOpenLetter,
} from "..";

export type Project = {
  title: string;
  subtitle?: string;
  thumbnail: string;
  role: string;
  year: number;
  description: string;
  techStack: { type: TechType; name: string }[];
  id: string;
  externalUrl: string;
};

export type TechType =
  | "language"
  | "framework"
  | "build"
  | "data"
  | "styling"
  | "architecture"
  | "content"
  | "contentStructure"
  | "functionality";

const projectsCardData: Project[] = [
  {
    title: "Folkets Advokatbyrå",
    thumbnail: ProjectThumbFolkets,
    role: "Frontend Developer | Collaborated with UI/UX Designer",
    year: 2022,
    description:
      "Engineered a highly performant, multilingual static application. I was responsible for the technical implementation and translating the UI/UX designer's vision into clean, accessible code, leveraging Prerendering (SSG) for instantaneous loading.",
    techStack: [
      { type: "framework", name: "React (v18)" },
      { type: "architecture", name: "Prerendering (SSG)" },
      { type: "content", name: "Wordpress Headless CMS" },
      { type: "functionality", name: "i18n (Multilingual)" },
      { type: "data", name: "Axios" },
    ],
    id: "folketsadvokatbyra",
    externalUrl: "https://folketsadvokatbyra.se",
  },
  {
    title: "Pono ya Moya",
    subtitle: "Modern Headless Application",
    thumbnail: ProjectThumbnPonoYaMoya,
    role: "Sole Contributor | Full-Cycle Developer & Designer",
    year: 2025,
    description:
      "A complete headless application. I was responsible for the entire UI/UX design and its engineering, utilizing a monorepo structure, Vite tooling, and a custom Tailwind CSS v4 design system for performance and scalability.",
    techStack: [
      { type: "language", name: "TypeScript" },
      { type: "framework", name: "React (v18)" },
      { type: "build", name: "Vite" },
      { type: "architecture", name: "Monorepo" },
      { type: "content", name: "Sanity.io Headless CMS" },
      { type: "styling", name: "Tailwind CSS v4" },
      { type: "contentStructure", name: "Portable Text" },
    ],
    id: "ponoyamoya",
    externalUrl: "https://ponoyamoya.com",
  },
  {
    title: "Open Letter Platform",
    subtitle: "Dynamic Content & i18n",
    thumbnail: ProjectThumbOpenLetter,
    role: "Sole Contributor | Full-Cycle Developer & Designer",
    year: 2024,
    description:
      "This platform showcases end-to-end product ownership, covering UI/UX design and the robust engineering required to deliver complex, multilingual rich-text content. The architecture is built on a Sanity.io + React monorepo designed for dynamic i18n at scale.",
    techStack: [
      { type: "language", name: "TypeScript" },
      { type: "framework", name: "React (v18)" },
      { type: "architecture", name: "Monorepo" },
      { type: "content", name: "Sanity.io Headless CMS" },
      { type: "functionality", name: "i18n (Multilingual)" },
      { type: "contentStructure", name: "Portable Text" },
    ],
    id: "openletter",
    externalUrl: "https://sthlmculture4pal.netlify.app",
  },
];

export { projectsCardData };
