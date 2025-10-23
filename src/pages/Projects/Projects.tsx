import { Card } from "components/index";
import { projectsCardData } from "../../assets/data/projectData";

export default function Projects() {
  const projects = projectsCardData.sort((a, b) => (a.year > b.year ? -1 : 1));
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Projects</h1>
      <p className="mb-12">
        Core Expertise: Backed by five years of professional experience in the
        industry, these selected independent and freelance projects demonstrate
        my capability in full-cycle product ownership and performance-driven
        architecture. I specialize in modern decoupled stacks, managing complex
        monorepos with Sanity.io and Vite, and achieving high-speed delivery via
        Prerendering (SSG).
      </p>
      <section>
        <div className="flex flex-wrap gap-8 justify-center items-stretch mx-auto w-full">
          {projects.map((project) => (
            <Card project={project}></Card>
          ))}
        </div>
      </section>
    </div>
  );
}
