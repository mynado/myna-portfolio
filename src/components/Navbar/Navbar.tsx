import { ExternalUrl } from "assets/index";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <div className="p-4 md:px-8  max-w-7xl flex justify-between items-start text-xl font-medium md:items-center mx-auto w-full">
      <Link to="/" className="font-bold">
        MYNA DO
      </Link>
      <ul className="flex flex-col justify-end items-end gap-4 gap-y-2 p-0 m-0 text-xl font-medium md:flex-row md:justify-center md:items-center">
        <li>
          <Link
            to="/projects"
            className={`${
              currentPage === "/projects"
                ? "underline font-bold"
                : "hover:font-bold"
            } underline-offset-8`}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <a
            href="https://mahoyo.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-start hover:font-bold"
          >
            CREATIVE WORK{" "}
            <img
              src={ExternalUrl}
              alt="External Link Icon"
              className="inline w-4 h-4 mb-1 mt-1"
            />
          </a>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              currentPage === "/about"
                ? "underline font-bold"
                : "hover:font-bold"
            } underline-offset-8`}
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}
