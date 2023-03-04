import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./NavbarDropdown.css";

function NavbarDropdown() {
  const { auth, setAuth } = useAuth();
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const logOut = () => {
    localStorage.clear();
    setAuth({});
  };

  return (
    <div className="dropDown-container" ref={menuRef}>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={auth.profileImage} alt="profileImage" />
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          {auth.userName}
          <br />
          <span>Website Designer</span>
        </h3>
        <ul>
          {auth?.userType === "IsAdmin" ? (
            <li>
              <NavLink onClick={logOut} to="/login">
                <h3>Logga ut som Admin</h3>
              </NavLink>
            </li>
          ) : auth?.userType === "IsHeadmaster" ? (
            <li>
              <NavLink to="studentList">
                <h3>Studenter</h3>
              </NavLink>
              <NavLink to="addCourse">
                <h3>Lägg till kurs</h3>
              </NavLink>
              <NavLink onClick={logOut} to="/login">
                <h3>Logga ut som Rektor</h3>
              </NavLink>
            </li>
          ) : auth?.userType === "IsTeacher" ? (
            <li>
              <NavLink onClick={logOut} to="/login">
                <h3>Logga ut som Lärare</h3>
              </NavLink>
            </li>
          ) : auth?.userType === "IsStudent" ? (
            <li>
              <NavLink onClick={logOut} to="/login">
                <h3>Logga ut som Student</h3>
              </NavLink>
            </li>
          ) : auth?.userType === "IsUser" ? (
            <li>
              <NavLink onClick={logOut} to="/login">
                <h3>Logga ut som Användare</h3>
              </NavLink>
            </li>
          ) : (
            <li>
              <>
                <NavLink to="/login">
                  <h3>Logga in</h3>
                </NavLink>
              </>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavbarDropdown;
