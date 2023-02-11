import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./Navbar.css";

function Navbar() {
  const { auth } = useAuth();

  const logOut = () => {
    localStorage.clear();
    auth.clear();
  };

  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">LNSchool</span>
      </h1>
      <ul>
        {auth?.userName ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavLink to="/list">Aktuella Kurser</NavLink>
            <NavLink onClick={logOut} to="/login">
              Logga ut
            </NavLink>
            <NavLink to="addCourse">Lägg till kurs</NavLink>
          </li>
        ) : (
          <li>
            <>
              <NavLink to="/">Start sida</NavLink>
              <NavLink to="/list">Aktuella Kurser</NavLink>
              <NavLink to="/login">Logga in</NavLink>
            </>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
