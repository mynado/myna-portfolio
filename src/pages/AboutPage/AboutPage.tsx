import Experience from "../../components/Experiences/Experience/Experience";
import {
  educationExperiences,
  workExperiences,
} from "../../components/Experiences/models/Experiences.model";

export default function AboutPage() {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "ReactJS",
    "SASS",
    "LESS",
    "REST API",
    "Git versioning",
    "Testing/Debugging",
  ];
  const otherSkills = [
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Figma",
    "Adobe XD",
    "Agile",
    "SCRUM",
  ];
  const languages = ["Swedish", "English", "Teochew"];
  return (
    <div className="pt-0 pb-24 px-4">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center">
          ABOUT
        </h1>
      </div>
      <div>
        {" "}
        <div className="max-w-3xl w-full mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold">EXPERIENCE</h2>
          <ul className="w-full">
            {workExperiences.map((experience) => (
              <Experience
                title={experience.title}
                client={experience.client}
                startYear={experience.startYear}
                endYear={experience.endYear}
                present={experience.present}
                projectTitle={experience.projectTitle}
                moreInfo={experience.moreInfo}
              />
            ))}
          </ul>
        </div>
        <div className="max-w-3xl w-full mx-auto mb-4">
          <h2 className="text-2xl md:text-4xl font-semibold">EDUCATION</h2>
          <ul className="w-full">
            {educationExperiences.map((experience) => (
              <Experience
                title={experience.title}
                client={experience.client}
                startYear={experience.startYear}
                endYear={experience.endYear}
                present={experience.present}
                moreInfo={experience.moreInfo}
                degree={experience.degree}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-between gap-4 flex-wrap w-full max-w-3xl mx-auto">
          <div className="max-w-md mb-1">
            <h2 className="text-2xl md:text-4xl font-semibold">SKILLS</h2>
            <ul>
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="max-w-md mb-1">
            <h2 className="text-2xl md:text-4xl font-semibold">OTHER SKILLS</h2>
            <ul>
              {otherSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="max-w-md mb-1">
            <h2 className="text-2xl md:text-4xl font-semibold">LANGUAGES</h2>
            <ul>
              {languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
