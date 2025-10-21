import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-4 md:px-8  max-w-7xl flex justify-between md:justify-end items-start text-xl font-medium md:items-center">
      <Link
        to="/"
        className="md:absolute md:left-[50%] md:translate-x-[-50%] font-bold"
      >
        MYNA DO
      </Link>
      <ul className="flex flex-col justify-end items-end gap-4 gap-y-2 p-0 m-0 text-xl font-medium md:flex-row md:justify-center md:items-center">
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT ME</Link>
        </li>
      </ul>
    </div>
  );
}
