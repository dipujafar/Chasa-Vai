import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useFarmerReq = () => {
    const axiosSecure = useAxiosSecure();
    const {loading} = useAuth();
    const {data: farmerReq = [], isLoading, refetch} = useQuery({
        queryKey: ["FarmerReq"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get("/farmerReq");
            return res.data; 
        }
    })
    return [farmerReq, isLoading, refetch]
};

export default useFarmerReq;