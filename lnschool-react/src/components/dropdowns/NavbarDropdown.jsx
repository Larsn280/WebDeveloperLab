import React, { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";

import "./NavbarDropdown.css";

function NavbarDropdown() {
  const { auth } = useAuth();
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
        <ul></ul>
      </div>
    </div>
  );
}

export default NavbarDropdown;
