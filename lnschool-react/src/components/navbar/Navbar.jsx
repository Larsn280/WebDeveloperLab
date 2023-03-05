import { NavLink } from "react-router-dom";
import NavbarDropdownList from "../dropdowns/NavbarDropdownList";

import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">
          <NavLink to="/">LNSchool</NavLink>
        </span>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Start sida</NavLink>
          <NavLink to="/customerList">Aktuella kurser</NavLink>
          <NavbarDropdownList />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
