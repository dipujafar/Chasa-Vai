import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useFarmer = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isFarmer, isLoading, refetch} = useQuery({
        queryKey: [user?.email, "isFarmer"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/farmer/${user?.email}`);
            return res?.data?.farmer;
        }
    })
    return [isFarmer, isLoading, refetch];
};

export default useFarmer;