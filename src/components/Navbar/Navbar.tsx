import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between items-start text-xl font-medium md:items-center">
      <Link to="/">MYNA DO</Link>
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
