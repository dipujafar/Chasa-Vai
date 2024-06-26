/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, isLoading, refetch] = useCart();
  const reverseCart = [...cart]?.reverse() || [];
  const totalPrice = cart.reduce((acc, current) => acc + current.totalPrice, 0);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

 

  return (
    <div>
      <Helmet>
        <title>Products Cart</title>
      </Helmet>
      <div className="flex justify-evenly mb-4">
        <h1 className="text-3xl"> Items: {cart.length}</h1>
        <h1 className="text-3xl"> TotalPrice: ${totalPrice.toFixed(2)}</h1>
        <button
          disabled={!cart.length}
          className="btn btn-sm text-white bg-gradient-to-r from-pink-500 to-pink-700"
        >
          <Link to="/dashboard/payment">pay</Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reverseCart.map((item, inx) => (
              <tr key={item._id}>
                <th>{inx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="food_image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost"
                  >
                    <FaTrashAlt className="text-red-400"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
