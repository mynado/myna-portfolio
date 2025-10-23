import { GitHubIcon, LinkedInIcon } from "assets/index";

export default function Footer() {
  return (
    <div className="p-4 text-center">
      <ul className="list-none p-0 m-0">
        <li className="flex justify-center gap-2 font-semibold">
          <a href="https://github.com/mynado" target="_blank" rel="noreferrer">
            <img src={GitHubIcon} alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mynado/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
          </a>
        </li>
        <li className="flex justify-center gap-2 font-semibold">
          <a href="mailto: myna@mynado.se" className="h-full py-2 px-4">
            myna@mynado.se
          </a>
        </li>
      </ul>
    </div>
  );
}
