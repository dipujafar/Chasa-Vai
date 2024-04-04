import { Helmet } from "react-helmet-async";
import Container from "../../../shared/Container";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";


const AllUser = () => {
    const [users] = useUsers();


    return (
        <div className="text-white">
      <Helmet>
        <title>Knack | Admin All User</title>
      </Helmet>
      <Container>
        <div className="mb-2 flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-3xl font-medium ">Total User : {users.length}</h2>
        </div>
        <div className="overflow-x-auto bg-gradient-to-r from-sky-950 to-sky-900 rounded">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th className="text-white">User</th>
                <th className="text-white">Email</th>
                <th className="text-white">Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {users?.map((user, inx) => (
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
                      <button
                        className="btn btn-disabled btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white" 
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleAdmin(user)}
                        className="btn btn-sm bg-gradient-to-r from-cyan-950 to-sky-900 rounded text-white"
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
      </Container>
    </div>
    );
};

export default AllUser;