export default function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">About me</h1>
      <section id="about-me">
        <h2 className="text-2xl font-semibold mb-4">
          Crafting Performance-Driven User Experiences
        </h2>
        <p>
          I am a <strong>Frontend Developer</strong> with a solid{" "}
          <strong>fullstack mindset</strong>, dedicated to crafting accessible,
          high-performance user experiences. With over five years of experience
          in the full development lifecycle, I specialize in translating complex
          requirements into elegant, scalable frontend architecture. I thrive on
          the challenge of building applications that are not just beautiful,
          but also robust, maintainable, and designed to integrate seamlessly
          with the modern backend.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Technical Specialization & Quality Commitment
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-medium mb-2">Framework Agility</h4>
            <p className="text-gray-700">
              Deep expertise in leading frameworks like{" "}
              <strong>Angular, React, and SvelteKit</strong>. I have proven
              ability to adapt to the best tool for the job.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Rigorous Quality</h3>
            <p className="text-gray-700">
              My methodology incorporates <strong>TDD</strong> and utilizes{" "}
              <strong>Cypress and Playwright</strong> for E2E validation. I
              prioritize <strong>SEO and WCAG</strong> from the first line of
              code.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Frontend Architecture</h3>
            <p className="text-gray-700">
              Experienced in developing and maintaining centralized tools, such
              as creating a{" "}
              <strong>CSS library managed as an npm package</strong>, to
              streamline large-scale development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Fullstack Perspective</h3>
            <p className="text-gray-700">
              My background in <strong>Computer Engineering</strong> and
              experience with Node.js/Express ensures I approach the frontend
              with a complete understanding of API design and optimization.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          The Creative & Collaborative Mindset
        </h2>
        <p>
          My professional background is uniquely shaped by over a decade as a{" "}
          <strong>Freelance Artist and Producer</strong>. This experience has
          equipped me with soft skills highly valuable in development:
        </p>
        <ul>
          <li className="list-disc ml-6 mt-2">
            <strong>Visual Design Acumen:</strong> A keen eye for visual
            principles and attention to detail, ensuring precise implementation
            of design specifications.
          </li>
          <li className="list-disc ml-6 mt-2">
            <strong>Project Leadership:</strong> Proven ability in{" "}
            <strong>project management and team coordination</strong>, ensuring
            complex deliverables are met on time and within budget.
          </li>
          <li className="list-disc ml-6 mt-2">
            <strong>Cross-Functional Collaboration:</strong> Expert in bridging
            communication gaps, having collaborated successfully with designers,
            product owners, and external partners.
          </li>
        </ul>
        <p className="text-lg font-bold mt-8">
          I am currently <strong>immediately available</strong> for new
          opportunities in Stockholm, Sweden. I am fluent in{" "}
          <strong>Swedish, English, and Teochew</strong>. Let's connect and
          build something exceptional together!
        </p>
      </section>
    </div>
  );
}
