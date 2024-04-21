import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/signUpimg2.png";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { FaHome } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";

const DashboardLinks = () => {
  const [isAdmin] = useAdmin();
  const {user} = useAuth();
  const [cart] = useCart();
  if (isAdmin) {
    return (
      <>
       <li>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={logo} alt="logo-image" className="w-12" />
            <span>FarmEr</span>
          </Link>
        </li>
        <hr />
        <li>
          <NavLink
            to="/dashboard/allUsers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/farmerReq"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Farmer Request
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/allProduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            All Product
          </NavLink>
        </li>
      </>
    );
  }

  if (user) {
    return (
      <>
        <li>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={logo} alt="logo-image" className="w-12" />
            <span>FarmEr</span>
          </Link>
        </li>
        <hr />
        <li>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <FaHome /> User Home
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            to="/dashboard/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           <BsCart4 /> My Cart ({cart?.length})
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           <FaWallet /> Payment History
          </NavLink>
        </li>
      </>
    );
  }
};

export default DashboardLinks;
