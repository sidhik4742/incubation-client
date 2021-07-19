import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import "./incubatees.css";
import { getAllUser, deleteuser } from "../../Auth/user";

function GetallIncubatee() {
  const [users, setUsers] = useState([]);

  const [values, setValues] = useState([]);
  // destructuring the values
  const { name, lastName, email, role, phone } = values;

  useEffect(() => {
    // // get all users data into the table
    // Axios.get("/user")
    //   .then((response) => {
    //     // console.log(response);
    //     setValues(response.data);
    //   })
    //   .catch(() => {
    //     console.log("Error");
    //   });

    // get all user
    AllUsers();
  }, []);

  const AllUsers = async () => {
    const response = await getAllUser();
    console.log(response.data);
    setUsers(response.data);
  };

  //delete user operation
  const deleteUserData = async (id) => {
    await deleteuser(id);
    AllUsers();
  };

  return (
    <>
      {/* start of incubatees table  */}
      <div
        className="table-responsive table-striped table-hover"
        // style={{ overflowX: "auto", height: "600px", overflow: "scroll" }}
        // style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-fixed-user">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td className="btn-flex-for-small-screen">
                  <Link to={`/admin/dashboard/incubatees/user/${user._id}`}>
                    <button
                      type="button"
                      className="btn btn-Update-table"
                      style={{ marginRight: "3px" }}
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-delete-table"
                    style={{ marginLeft: "0px" }}
                    onClick={() => deleteUserData(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

    // {/* End of  incubatees table  */}
  );
}

export default GetallIncubatee;
