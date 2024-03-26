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
          to="/order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contract
        </NavLink>
      </li>
    </>
  );
};

export default NavbarLink;
