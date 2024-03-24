import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-68px)]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;