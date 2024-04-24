import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {data: allProducts = [], isLoading, refetch} = useQuery({
        queryKey: ["allProducts"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/allProducts")
            return res.data
        } 
    })
    return [allProducts, isLoading, refetch]
};

export default useAllProducts;