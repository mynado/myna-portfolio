import githubIcon from "../../assets/icons/github.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="py-8 px-4 text-center">
      <ul className="list-none p-0 m-0">
        <li className="flex justify-center gap-2 font-semibold">
          <a href="https://github.com/mynado" target="_blank" rel="noreferrer">
            <img className="w-4" src={githubIcon} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mynado/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-4" src={linkedInIcon} alt="linkedin" />
          </a>
        </li>
        <li className="flex justify-center gap-2 font-semibold">
          <a href="mailto: myna@mynado.se">myna@mynado.se</a>
        </li>
      </ul>
    </div>
  );
}
