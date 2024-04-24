import { Helmet } from "react-helmet-async";
import useUsers from "../../../hooks/useUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  const [users, isLoading, refetch] = useUsers();
  const reverseArr = [...users].reverse();
  const axiosSecure = useAxiosSecure();

  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be make admin ${user?.name} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.put(`/users/admin/${user?.email}`);
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulation",
            text: `Now ${user?.name} is an Admin.`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>FarmEr | Admin All User</title>
      </Helmet>

      <div className="mb-2 flex flex-col md:flex-row items-center justify-between gap-3">
        <h2 className="text-3xl font-medium ">Total User : {users.length}</h2>
      </div>
      <div className="overflow-x-auto rounded">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {reverseArr?.map((user, inx) => (
            <tbody key={user?._id}>
              {/* row 1 */}
              <tr>
                <th>{inx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.image} alt="userProfile" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>

                <td>{user?.role ? user?.role : "normal user"}</td>

                <th>
                  {user?.role === "admin" ? (
                    <button className="btn btn-sm btn-disabled rounded">
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded "
                    >
                      Make Admin
                    </button>
                  )}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
