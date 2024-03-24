import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/items"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
         Items
        </NavLink>
      </li>
    </>
  );
};

export default NavbarLink;
