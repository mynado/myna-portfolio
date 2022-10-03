import Experience from "../../components/Experiences/Experience/Experience";
import {
  educationExperiences,
  workExperiences,
} from "../../components/Experiences/models/Experiences.model";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <div>
        <h1>ABOUT</h1>
      </div>
      <div className={styles.workSection}>
        <h2>EXPERIENCE</h2>
        <ul className={styles.experiencesContainer}>
          {workExperiences.map((experience) => (
            <Experience
              title={experience.title}
              client={experience.client}
              startYear={experience.startYear}
              endYear={experience.endYear}
              present={experience.present}
              moreInfo={experience.moreInfo}
            />
          ))}
        </ul>
      </div>
      <div className={styles.educationSection}>
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
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
