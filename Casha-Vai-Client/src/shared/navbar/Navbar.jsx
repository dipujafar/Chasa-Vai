import Container from "../Container";
import logo from "../../assets/image/FarmerCap.png"
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useRef, useState } from "react";
import profile from "../../assets/image/profile.png"
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut} = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const handleLogout = () => {
    logOut().then(() => toast("Successfully Logout"));
  };

  return (
    <div className="bg-black bg-opacity-40">
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            <NavbarLink></NavbarLink>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img src={logo} alt="logo-image" className="w-10" />
            <span className="hidden md:block text-green-100">Cashi Vai</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <NavbarLink></NavbarLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <img
                ref={imgRef}
                onClick={() => setOpen(!open)}
                src={user?.photoURL}
                className="w-10 h-10 rounded-full object-cover"
              />
              {open && (
                <div
                  ref={menuRef}
                  className="absolute top-14 right-0 z-10 bg-gradient-to-r from-sky-800 to-sky-600 rounded  text-gray-200 w-52 p-4 space-y-2"
                >
                  <img src={user?.photoURL} alt="ProfileImg" className="w-24 h-24 mx-auto rounded-full" />
                  <p className="text-center text-xl">{user?.displayName}</p>
                  <hr />
                  <Link to="/">
                    <p className=" mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FaHome /> Home
                    </p>
                  </Link>
                  <hr />
                  <button
                    onClick={handleLogout}
                    className="mt-1 flex items-center gap-1 hover:text-sky-300"
                  >
                    <CgLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <img
                ref={imgRef}
                onClick={() => setOpen(!open)}
                src={profile}
                className="w-12 rounded-full object-cover"
              />
              {open && (
                <div
                  ref={menuRef}
                  className="absolute top-14 right-0 z-10 bg-gradient-to-r from-sky-800 to-sky-600 rounded text-gray-200 w-52 p-4 space-y-2"
                >
                  <p>User not available</p>
                  <hr />
                  <Link to="/">
                    <p className=" mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FaHome /> Home
                    </p>
                  </Link>
                  <hr />
                  <Link to="/login">
                    <button className="mt-1 flex items-center gap-1 hover:text-sky-300">
                      <FiLogIn /> Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Navbar;
