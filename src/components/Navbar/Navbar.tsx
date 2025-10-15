import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="py-8 px-4">
      <ul className="flex flex-col justify-end items-end gap-4 p-0 m-0 text-2xl font-semibold md:flex-row md:justify-center md:items-center">
        <li>
          <Link to="/">HOME</Link>
        </li>
        {/* <li>
          <Link to="/projects">PROJECTS</Link>
        </li> */}
        <li>
          <Link to="/about">ABOUT ME</Link>
        </li>
      </ul>
    </div>
  );
}
