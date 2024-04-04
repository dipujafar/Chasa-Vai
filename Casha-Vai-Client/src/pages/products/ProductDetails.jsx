/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from 'react-toastify';
import useCart from "../../hooks/useCart";

const ProductDetails = ({ product }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useCart();

  const handleAddCart = async(event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form?.quantity?.value;

    const productData = {
      productId: product?._id,
      name:product?.name,
      farmerName: product?.farmerName,
      farmerEmail: product?.email,
      email: user?.email,
      price: product?.price,
      totalPrice: parseFloat(product?.price)*quantity,
      image: product?.image
    }
   
    const res = await axiosSecure.post("/cart", productData);
    if(res?.data?.insertedId){
      toast.success("Successfully added in you Cart");
      form.reset();
      refetch();
    }
  };
  return (
    <div className="modal-box bg-gray-700">
      <div className="card bg-transparent ">
        <figure>
          <img
            src={product?.image}
            alt="productImage"
            className="w-full h-60"
          />
          <p className="absolute bg-slate-700 text-white py-1 font-medium rounded px-2 top-4 right-8">
            ${product?.price} per kg
          </p>
        </figure>
        <div className="card-body text-white text-lg">
          <h2 className="card-title ">{product?.name}</h2>
          <p>{product?.details}</p>
          <p>A product by {product?.farmerName}</p>
          <p>Contract : {product?.email}</p>
          <p>
            Location : {product?.location?.district},{" "}
            {product?.location?.upazila}, {product?.location?.village}
          </p>

          <div className="">
            {/* <p className="text-lg font-medium inline mr-5">${course?.price}</p>
            <s className="">${course?.old_price}</s> */}
          </div>
        </div>
      </div>
      <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        {user ? (
          <form className="inline" onSubmit={handleAddCart}>
            <input
              type="number"
              name="quantity"
              className="mr-2 py-2 px-2 w-32 rounded"
              placeholder="Quantity (KG)"
              required
            />
            <input
              type="submit"
              value="Add Cart"
              className=" btn  mr-2 text-white bg-gradient-to-r from-pink-500 to-pink-700"
            />
          </form>
        ) : (
          // <button
          //   //   onClick={() => handleAddCart(course)}
          //   className="btn mr-2  text-white bg-gradient-to-r from-pink-500 to-pink-700"
          // >
          //   Add to cart
          // </button>
          <button
            onClick={() => navigate("/login", { state: location?.pathname })}
            className="btn mr-2   text-white bg-gradient-to-r from-pink-500 to-pink-700"
          >
            Add to cart
          </button>
        )}
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
