import React from "react";
import styles from "./Footer.module.scss";
import githubIcon from "../../assets/icons/github.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul>
        <li>
          <a href="https://github.com/mynado" target="_blank" rel="noreferrer">
            <img className={styles.socialIcon} src={githubIcon} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mynado/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.socialIcon}
              src={linkedInIcon}
              alt="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="mailto: myna@mynado.se">myna@mynado.se</a>
        </li>
      </ul>
    </div>
  );
}
