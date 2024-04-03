import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/image/signUpimg2.png"

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button absolute top-0 left-0 lg:hidden "
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 md:w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img src={logo} alt="logo-image" className="w-12" />
            <span >FarmEr</span></Link>
          </li>
          <li>
          <NavLink
            to="/dashboard/allUser"
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
           farmerReq
          </NavLink>
        </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Dashboard;
