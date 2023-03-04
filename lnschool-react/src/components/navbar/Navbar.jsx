import { NavLink } from "react-router-dom";
import NavbarDropdownList from "../dropdowns/NavbarDropdownList";

import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">LNSchool</span>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Start sida</NavLink>
          <NavbarDropdownList />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
