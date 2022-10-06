import Experience from "../../components/Experiences/Experience/Experience";
import {
  educationExperiences,
  workExperiences,
} from "../../components/Experiences/models/Experiences.model";
import styles from "./AboutPage.module.scss";

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
    <div className={`page-container ${styles.aboutPageContainer}`}>
      <div className={styles.headerContainer}>
        <h1>ABOUT</h1>
      </div>
      <div>
        {" "}
        <div className={styles.section}>
          <h2>EXPERIENCE</h2>
          <ul className={styles.experiencesContainer}>
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
        <div className={styles.section}>
          <h2>EDUCATION</h2>
          <ul className={styles.experiencesContainer}>
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
        <div className={styles.skillsSection}>
          <div className={styles.section}>
            <h2>SKILLS</h2>
            <ul>
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2>OTHER SKILLS</h2>
            <ul>
              {otherSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h2>LANGUAGES</h2>
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
