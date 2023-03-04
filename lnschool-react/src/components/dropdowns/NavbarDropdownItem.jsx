import { NavLink } from "react-router-dom";

function NavbarDropdownItem(props) {
  return (
    <li className="dropdownItem">
      <NavLink to={props.navLink}>
        <h3>{props.text}</h3>
      </NavLink>
    </li>
  );
}

export default NavbarDropdownItem;
