import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavbarDropdownList from "../dropdowns/NavbarDropdownList";

import "./Navbar.css";

function Navbar() {
  const { auth } = useAuth();

  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">LNSchool</span>
      </h1>
      <ul>
        {auth?.userType === "IsAdmin" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavbarDropdownList />
          </li>
        ) : auth?.userType === "IsHeadmaster" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavbarDropdownList />
          </li>
        ) : auth?.userType === "IsTeacher" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
          </li>
        ) : auth?.userType === "IsStudent" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
          </li>
        ) : (
          <li>
            <>
              <NavLink to="/">Start sida</NavLink>
              <NavLink to="/login">Logga in</NavLink>
            </>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
