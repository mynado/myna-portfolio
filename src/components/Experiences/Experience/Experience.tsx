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
      <div
        className={`${style.buttonContainer} ${
          props.moreInfo && style.expandable
        }`}
        onClick={toggleMoreInfo}
      >
        <div>
          <div className={style.titleContainer}>
            <div className={style.title}>{props.title}</div>
            {props.projectTitle && (
              <div className={style.projectTitle}>{props.projectTitle}</div>
            )}
            <div className={style.client}>{props.client}</div>
          </div>
          <div className="year-container">
            {`${props.startYear} - ${
              props.present ? "present" : props.endYear
            }`}
          </div>
          {props.degree && <span>{props.degree}</span>}
        </div>
        {props.moreInfo && <div className={style.iconContainer}>+</div>}
      </div>
      {showMoreInfo && (
        <div
          className={`${style.moreInfoDropdown} ${
            props.moreInfo && style.expanded
          }`}
        >
          {props.moreInfo?.map((info) => info)}
        </div>
      )}
    </li>
  );
}
