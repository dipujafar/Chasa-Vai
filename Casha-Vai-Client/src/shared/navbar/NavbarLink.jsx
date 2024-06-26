import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavbarLink = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
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
          to="/order/vegetable"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/beFarmer"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Be A Farmer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      {user && isAdmin &&  (
        <>
        <li>
          <NavLink
            to="/dashboard/allUsers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           Dashboard
          </NavLink>
        </li>
        </>
      )}
      {user && !isAdmin &&  (
        <>
        <li>
          <NavLink
            to="/dashboard/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           <BsCart4 className="text-xl" /> <sup className="bg-pink-600  text-white text- rounded-full p-2">+{cart?.length}</sup>
          </NavLink>
        </li>

        </>
      )}
    </>
  );
};

export default NavbarLink;
