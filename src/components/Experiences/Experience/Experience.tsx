import { useState } from "react";
import { ExperienceModel } from "../models/Experiences.model";
import style from "./Experience.module.scss";

export default function Experience(props: ExperienceModel) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  return (
    <li className={style.experienceContainer}>
      <div className={style.buttonContainer} onClick={toggleMoreInfo}>
        <div>
          <div className={style.titleContainer}>
            <div>{props.title}</div>
            <div>{props.client}</div>
          </div>
          <div className="year-container">
            {`${props.startYear} - ${
              props.present ? "present" : props.endYear
            }`}
          </div>
        </div>
        <div className={style.iconContainer}>+</div>
      </div>
      {showMoreInfo && (
        <div className={style.moreInfoDropdown}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          tempora dolorem, non iusto deleniti aut dicta itaque quae temporibus
          unde veritatis harum fugit numquam at deserunt accusamus, maiores ad
          vitae?
        </div>
      )}
    </li>
  );
}
