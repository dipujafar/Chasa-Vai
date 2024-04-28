import { Helmet } from "react-helmet-async";
import useAllProducts from "../../../hooks/useAllProducts";


const AllProducts = () => {
    const [allProducts, isLoading] = useAllProducts();
    const reverseArray = [...allProducts].reverse();

    const handleApprove = () =>{
        //
    }

    const handleReject = () =>{
        //
    }

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-green-600"></span>
          </div>
        );
      }
    return (
        <div>
           <Helmet>
                <title>Farmer | All Products</title>
           </Helmet>
           <h2 className="text-3xl font-medium ">
              Total Classes : {reverseArray?.length}
            </h2>
            {<div className="overflow-x-auto">
              <table className="table">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Farmer Name & Location</th>
                    <th>Email</th>
                    <th>Short Details</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                {reverseArray?.map((product, inx) => (
                  <tbody key={product?._id}>
                    {/* row 1 */}
                    <tr>
                      <th>{inx + 1}</th>
                      <td>{product?.name}</td>
                      <td>
                        
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              <img src={product?.image} alt="product_Image" />
                            </div>
                          </div>
                        
                      </td>
                      <td>{product?.farmerName} <br /> {product?.location?.district},{product?.location?.upazilla},{product?.location?.village}</td>
                      <td>{product?.email}</td>
                      <td>{product?.details}</td>
                      <td>${product?.price}</td>
                      <td>{product?.status === "pending" ? "pending" : "Accepted"}</td>
                    
                      
                      <td>
                        {product?.status === "pending" ? (
                          <button onClick={()=>handleApprove(product?._id)} className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded">
                            Approve
                          </button>
                        ) : (
                          <button className="btn btn-sm rounded" disabled> Approve</button>
                        )}
                      </td>
                      <td>
                        {product.status === "pending" ? (
                          <button onClick={()=>handleReject(product?._id)} className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded">
                            Reject
                          </button>
                        ) : (
                          <button className="btn btn-sm  rounded" disabled> Reject</button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div> }
        </div>
    );
};

export default AllProducts;