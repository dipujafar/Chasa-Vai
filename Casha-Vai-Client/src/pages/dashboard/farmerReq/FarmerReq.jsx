import { Helmet } from "react-helmet-async";
import useFarmerReq from "../../../hooks/useFarmerReq";
import Swal from "sweetalert2";

const FarmerReq = () => {
  const [farmerReq] = useFarmerReq();
  const reverseArray = [...farmerReq];
  console.log(farmerReq);

  const  handleApprove = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be approve this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        // const res = await axiosSecure.put(`/users/teacherReq/${email}`);
        // if(res?.data?. userUpdate?.modifiedCount > 0 && res?.data?. reqUpdate?.modifiedCount > 0){
        //   Swal.fire({
        //     title: "Successfully!",
        //     text: "Accepted this request",
        //     icon: "success"
        //   });
        //   refetch();
        // }       
      }
    });
  }

  const handleReject = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be reject this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        // const res = await axiosSecure.put(`/users/teacherReq/reject/${email}`);
        // if(res?.data?.modifiedCount > 0 ){
        //   Swal.fire({
        //     title: "Successfully!",
        //     text: "Rejected this request",
        //     icon: "error"
        //   });
        //   refetch();
        // }       
      }
    });
  }
  return (
    <div>
      <div>
        <Helmet>
          <title>farmEr| Farmer Req.</title>
        </Helmet>
        <h2 className="text-3xl font-medium ">
          Total Request : {farmerReq?.length}
        </h2>
        <div className="overflow-x-auto rounded">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Candidate</th>
                <th>Farm Name</th>
                <th>NID Number</th>
                <th>Card Number</th>
                <th>Location</th>
                <th>Category</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {reverseArray?.map((req, inx) => (
              <tbody key={req?._id}>
                {/* row 1 */}
                <tr>
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={req?.image} alt="userProfile" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{req?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{req?.farmName}</td>
                  <td>{req?.nidNum}</td>
                  <td>{req?.cardNum}</td>
                  <td>{req?.location}</td>
                  <td>{req?.category}</td>
                  <td>{req?.status}</td>
                  <td>
                    {req?.status === "pending" ? (
                      <button
                        onClick={() => handleApprove(req?.email)}
                        className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded"
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm rounded"
                        disabled
                      >
                        {" "}
                        Approve
                      </button>
                    )}
                  </td>
                  <td>
                    {req?.status === "pending" ? (
                      <button
                        onClick={() => handleReject(req?.email)}
                        className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded"
                      >
                        Reject
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm rounded "
                        disabled
                      >
                        {" "}
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default FarmerReq;
