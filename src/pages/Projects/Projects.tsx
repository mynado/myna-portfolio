import { projectsCardData } from "../../assets/data/projectData";
import { Card } from "../../components";

export default function Projects() {
  const projects = projectsCardData.sort((a, b) => (a.year > b.year ? -1 : 1));
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Projects</h1>
      <p className="mb-8">
        Core Expertise: Backed by five years of professional experience in the
        industry, these selected independent and freelance projects demonstrate
        my capability in full-cycle product ownership and performance-driven
        architecture. I specialize in modern decoupled stacks, managing complex
        monorepos with Sanity.io and Vite, and achieving high-speed delivery via
        Prerendering (SSG).
      </p>
      <section>
        <div className="flex flex-wrap gap-4 justify-center items-stretch mx-auto w-full">
          {projects.map((project) => (
            <div className="lg:max-w-xs">
              <Card project={project}></Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
