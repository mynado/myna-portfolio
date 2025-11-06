export default function About() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8">About me</h1>
      <section id="about-me">
        <h2 className="text-2xl font-semibold mb-4">
          Crafting Performance-Driven User Experiences
        </h2>
        <p>
          I am a <strong>Frontend Engineer</strong> with a{" "}
          <strong>full-stack mindset</strong>, specializing in crafting
          accessible, high-performance user experiences. My work is uniquely
          shaped by my background as a <strong>Multidisciplinary Artist</strong>
          , allowing me to excel at translating complex requirements into{" "}
          <strong>robust, scalable frontend architecture</strong> with
          exceptional <strong>UI/UX design fidelity</strong>. With over five
          years of experience in the full development lifecycle, I thrive on
          delivering beautiful yet maintainable applications.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg mt-10 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Professional Experience: BIMobject
          </h2>
          <p>
            My core capabilities were honed during{" "}
            <strong>five years at BIMobject</strong>, a large-scale enterprise
            environment. This experience provided deep expertise in{" "}
            <strong>
              long-term maintainability, security, and scaling applications
            </strong>
            .
          </p>
          <h3 className="text-xl font-medium">
            Frontend Developer | BIMobject | 2020–2025
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="list-disc ml-6">
              <strong>Architectural Contribution</strong>: Built and maintained
              core features in both <strong>Angular and SvelteKit</strong>.
              Developed and maintained a centralized{" "}
              <strong>CSS library, managed as an npm package</strong>, which
              streamlined feature development across the organization.
            </li>
            <li className="list-disc ml-6">
              <strong>Security & Compliance</strong>: Implemented secure login
              and account flows using <strong>OpenID Connect</strong> with{" "}
              <strong>Duende IdentityServer</strong>. Integrated{" "}
              <strong>OneTrust</strong> for cookie consent and{" "}
              <strong>GDPR compliance</strong>.
            </li>
            <li className="list-disc ml-6">
              <strong>Quality & DevOps</strong>: Improved product quality and
              deployment stability through <strong>E2E testing</strong> and{" "}
              <strong>CI/CD</strong> automation in <strong>Azure DevOps</strong>
              .
            </li>
          </ul>
        </div>
        <div className="bg-lavender-100 p-4 rounded-lg mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Technical Specialization & Quality Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Framework Agility</h3>
              <p className="text-gray-700">
                Deep expertise in leading frameworks like{" "}
                <strong>Angular, React, and SvelteKit</strong>. I leverage my
                architectural understanding to always choose the right tool for
                the job.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Rigorous Quality</h3>
              <p className="text-gray-700">
                My methodology incorporates <strong>TDD</strong> and utilizes{" "}
                <strong>Cypress</strong> and <strong>Playwright</strong> for E2E
                validation. I prioritize <strong>SEO</strong> and{" "}
                <strong>WCAG</strong> from the first line of code.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Frontend Architecture
              </h3>
              <p className="text-gray-700">
                Experienced in developing and maintaining centralized tools,
                such as creating a{" "}
                <strong>CSS library managed as an npm package</strong> to
                streamline large-scale development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Fullstack Perspective
              </h3>
              <p className="text-gray-700">
                My background in <strong>Computer Engineering</strong> ensures I
                approach the frontend with a complete understanding of API
                design, data flow optimization, and backend interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg mt-10 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            The Creative & Collaborative Mindset
          </h2>
          <p>
            My professional background is uniquely shaped by my decade-long
            experience as a <strong>Freelance Artist and Producer</strong>. This
            has equipped me with soft skills highly valuable in development
          </p>
          <ul className="flex flex-col gap-2">
            <li className="list-disc ml-6">
              <strong>Visual Design Acumen:</strong> A keen eye for visual
              principles and attention to detail, ensuring{" "}
              <strong>pixel-perfect implementation</strong> and effective
              translation of design specifications.
            </li>
            <li className="list-disc ml-6">
              <strong>Project Leadership:</strong> Proven ability in{" "}
              <strong>project management</strong> and self-direction, ensuring
              complex deliverables are met on time and within budget.
            </li>
            <li className="list-disc ml-6">
              <strong>Cross-Functional Collaboration:</strong> Expert in
              bridging communication gaps, having collaborated successfully with
              designers, product owners, and external partners.
            </li>
          </ul>
        </div>
        <p className="text-lg font-bold mt-8 rounded-lg p-4">
          I am currently immediately available for new opportunities in{" "}
          <strong>Stockholm, Sweden</strong>, and open to both{" "}
          <strong>hybrid</strong> and <strong>fully remote roles</strong>. I am
          fluent in <strong>Swedish</strong> and <strong>English</strong>.{" "}
          <strong>Teochew</strong> is my mother tongue, which I speak
          conversationally Let's connect and build something exceptional
          together!
        </p>
      </section>
    </div>
  );
}
