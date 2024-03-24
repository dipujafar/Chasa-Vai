import { useNavigate } from "react-router-dom";
import { BiSolidErrorCircle } from "react-icons/bi";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center gap-4 bg-base-300 h-screen bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
            <BiSolidErrorCircle className="text-4xl text-red-500"/>
            <h1 className="text-3xl font-medium"> Something Went Wrong!</h1>
            <div className="flex gap-2">
            <button onClick={()=>navigate(-1)} className="btn btn-outline btn-sm text-white">Go Back</button>
            <button onClick={()=>navigate("/")} className="btn btn-outline btn-sm text-white">Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;