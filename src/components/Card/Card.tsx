import React from "react";
import { Project } from "../../assets/data/projectData";

const Card: React.FC<{ project: Project }> = ({ project }) => {
  return (
    // <a href="/projects/folketsadvokatbyra" className="block">
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

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Links */}
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
    // </a>
  );
};

export default Card;
