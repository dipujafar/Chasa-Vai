/* eslint-disable react/prop-types */

import ProductDetails from "./ProductDetails";

const ProductsCard = ({ product }) => {
  return (
    <div className="card  bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product?.image}
          alt="productImage"
          className="rounded-xl w-full h-56"
        />
        <p className="absolute bg-slate-700 text-white py-1 font-medium rounded px-2 top-4 right-8">
          ${product?.price} per kg
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product?.name}</h2>
        <p>{product?.details}</p>
        <div className="card-actions">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn  text-white bg-gradient-to-r from-pink-500 to-pink-700"
            onClick={() =>
              document.getElementById(`my_modal_${product?._id}`).showModal()
            }
          >
            See More
          </button>
          <dialog id={`my_modal_${product._id}`} className="modal">
            <ProductDetails product={product}></ProductDetails>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
