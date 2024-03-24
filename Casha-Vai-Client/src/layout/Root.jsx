import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-gradient-to-r from-green-950 via-green-700 to-green-800 text-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;