import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./Navbar.css";

function Navbar() {
  const { auth, setAuth } = useAuth();

  const logOut = () => {
    localStorage.clear();
    setAuth({});
  };

  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">LNSchool</span>
      </h1>
      <ul>
        {auth?.userType === "IsAdmin" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavLink to="/list">Aktuella Kurser</NavLink>
            <NavLink to="employeeList">Anställda</NavLink>
            <NavLink to="studentList">Studenter</NavLink>
            <NavLink onClick={logOut} to="/login">
              Logga ut som Admin
            </NavLink>
            <NavLink to="addCourse">Lägg till kurs</NavLink>
            <NavLink to="addEmployee">Lägg till anställd</NavLink>
          </li>
        ) : auth?.userType === "IsHeadmaster" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavLink to="/list">Aktuella Kurser</NavLink>
            <NavLink to="studentList">Studenter</NavLink>
            <NavLink onClick={logOut} to="/login">
              Logga ut som Rektor
            </NavLink>
            <NavLink to="addCourse">Lägg till kurs</NavLink>
          </li>
        ) : auth?.userType === "IsTeacher" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavLink to="/list">Aktuella Kurser</NavLink>
            <NavLink onClick={logOut} to="/login">
              Logga ut som Lärare
            </NavLink>
            <NavLink to="addCourse">Lägg till kurs</NavLink>
          </li>
        ) : auth?.userType === "IsStudent" ? (
          <li>
            <NavLink to="/">Start sida</NavLink>
            <NavLink to="/list">Aktuella Kurser</NavLink>
            <NavLink onClick={logOut} to="/login">
              Logga ut som Student
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
