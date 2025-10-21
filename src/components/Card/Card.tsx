import React from "react";
import { Project, TechType } from "../../assets/data/projectData";

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const bagdeStyles: Record<TechType, string> = {
    language: "bg-indigo-100 text-indigo-800", // e.g., TypeScript
    framework: "bg-cyan-100 text-cyan-800", // e.g., React
    build: "bg-purple-100 text-purple-800", // e.g., Vite, CRA Tooling
    data: "bg-teal-100 text-teal-800", // The CMS/API Source (Sanity, WordPress)
    styling: "bg-emerald-100 text-emerald-800", // e.g., Tailwind CSS
    architecture: "bg-gray-200 text-gray-800", // e.g., Monorepo, Prerendering
    content: "bg-teal-100 text-teal-800", // (Mapped to data source)
    contentStructure: "bg-orange-100 text-orange-800", // Data Format/Formatters (Portable Text)
    functionality: "bg-pink-100 text-pink-800", // e.g., i18n, Axios (Advanced App Features)
  };
  return (
    <article className="flex flex-col justify-between bg-lavender-100 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 h-full">
      <header className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          {project.title}
        </h3>
        {project.subtitle && (
          <span className="text-sm text-gray-700">{project.subtitle}</span>
        )}
        <p className="text-sm text-indigo-800 mb-3">
          {project.role} | {project.year}
        </p>
      </header>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech.name}
            className={`${
              bagdeStyles[tech.type as TechType]
            } text-xs font-medium px-2.5 py-0.5 rounded-full`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <footer className="flex justify-between items-center pt-2 border-t border-gray-100">
        <div className="flex justify-end w-full space-x-3">
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Live Site
          </a>
        </div>
      </footer>
    </article>
  );
};

export default Card;
