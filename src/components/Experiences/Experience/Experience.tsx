import { useState } from "react";
import { ExperienceModel } from "../models/Experiences.model";

export default function Experience(props: ExperienceModel) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  return (
    <li className="mb-4 w-full">
      <button
        className={`bg-none border-none text-start border-b-black border-b-2 flex justify-between items-center py-2 px-0 w-full ${
          props.moreInfo ? "hover:cursor-pointer" : ""
        }`}
        onClick={toggleMoreInfo}
      >
        <div>
          <div className="font-semibold mb-2">
            <div className="text-xl">{props.title}</div>
            {props.projectTitle && (
              <div className="text-xl">{props.projectTitle}</div>
            )}
            <div>{props.client}</div>
          </div>
          <div className="year-container">
            {`${props.startYear} - ${
              props.present ? "present" : props.endYear
            }`}
          </div>
          {props.degree && <span>{props.degree}</span>}
        </div>
        {props.moreInfo && <div className="text-4xl">+</div>}
      </button>
      {showMoreInfo && (
        <ul>
          {props.moreInfo?.map((info) => (
            <li>{info}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
