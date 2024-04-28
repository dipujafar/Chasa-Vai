import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFarmerReq = () => {
    const axiosSecure = useAxiosSecure();
    const {data: farmerReq = [], isLoading, refetch} = useQuery({
        queryKey: ["FarmerReq"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/farmerReq");
            return res.data; 
        }
    })
    return [farmerReq, isLoading, refetch]
};

export default useFarmerReq;