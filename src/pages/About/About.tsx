export default function About() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">About me</h1>
      <section id="about-me">
        <h2 className="text-2xl font-semibold mb-4">
          Crafting Performance-Driven User Experiences
        </h2>
        <p>
          I am a Frontend Developer with a solid full-stack mindset,
          specializing in crafting accessible, high-performance user
          experiences. With over five years of experience in the full
          development lifecycle, I excel at translating complex requirements
          into robust, scalable frontend architecture. I thrive on building
          applications that are not just beautiful, but also robust,
          maintainable, and seamlessly integrated with modern backends.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Technical Specialization & Quality Commitment
        </h2>
        <div className="grid md:grid-cols-2 gap-6 bg-lavender-100 p-4 rounded-lg">
          <div>
            <h3 className="text-xl font-medium mb-2">Framework Agility</h3>
            <p className="text-gray-700">
              Deep expertise in leading frameworks like Angular, React, and
              SvelteKit. I leverage my architectural understanding to always
              choose the right tool for the job.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Rigorous Quality</h3>
            <p className="text-gray-700">
              My methodology incorporates TDD and utilizes Cypress and
              Playwright for E2E validation. I prioritize SEO and WCAG from the
              first line of code.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Frontend Architecture</h3>
            <p className="text-gray-700">
              Experienced in developing and maintaining centralized tools, such
              as creating a CSS library managed as an npm package to streamline
              large-scale development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Fullstack Perspective</h3>
            <p className="text-gray-700">
              My background in Computer Engineering ensures I approach the
              frontend with a complete understanding of API design, data flow
              optimization, and backend interaction.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          The Creative & Collaborative Mindset
        </h2>
        <p>
          My professional background is uniquely shaped by my decade-long
          experience as a Freelance Artist and Producer. This has equipped me
          with soft skills highly valuable in development
        </p>
        <ul className="bg-lavender-100 p-4 rounded-lg mt-4">
          <li className="list-disc ml-6 mt-2">
            <strong>Visual Design Acumen:</strong> A keen eye for visual
            principles and attention to detail, ensuring pixel-perfect
            implementation and effective translation of design specifications.
          </li>
          <li className="list-disc ml-6 mt-2">
            <strong>Project Leadership:</strong> Proven ability in project
            management and self-direction, ensuring complex deliverables are met
            on time and within budget.
          </li>
          <li className="list-disc ml-6 mt-2">
            <strong>Cross-Functional Collaboration:</strong> Expert in bridging
            communication gaps, having collaborated successfully with designers,
            product owners, and external partners.
          </li>
        </ul>
        <p className="text-lg font-bold mt-8">
          I am currently immediately available for new opportunities in
          Stockholm, Sweden. I am fluent in Swedish, English, and Teochew. Let's
          connect and build something exceptional together!
        </p>
      </section>
    </div>
  );
}
