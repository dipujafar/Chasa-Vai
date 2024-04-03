import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();
    const { data: cart = [], isLoading, refetch } = useQuery({
      queryKey: ["cart"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(`/cart/${user?.email}`);
        return res?.data;
      },
    });
  
  return [cart, isLoading, refetch];
};

export default useCart;