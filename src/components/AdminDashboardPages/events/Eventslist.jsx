import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import { GetallEvent, DeleteEVent } from "../../Auth/eventapi";

function Eventslist() {
  // const [values, setValues] = useState([]);
  const [getallvalues, setallValues] = useState([]);
  // destructuring the values
  // const [eventname, venu, organized, sdate, edate, description] = setallValues;

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
    //  const fetchData=async()=>{
    //    let data = await GetallEvent();
    //    setallValues(data);
    //  }
    //   fetchData();
    AllEvents();
  }, []);

  const AllEvents = async () => {
    let response = await GetallEvent();
    console.log(response);
    setallValues(response);
  };

  //delete event  operation
  const deleteEventData = async (id) => {
    // await deleteuser(id);
    await DeleteEVent(id);
    // AllUsers();
    AllEvents();
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
              <th>EventName</th>
              <th>venue</th>
              <th>Oragnizer</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {getallvalues.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.eventname}</td>
                  <td>{val.venu}</td>
                  <td>{val.organized}</td>
                  <td>{val.sdate}</td>
                  <td>{val.edate}</td>
                  <td className="btn-flex-for-small-screen">
                    <Link to={`/admin/dashboard/updateEvent/${val._id}`}>
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
                      onClick={() => deleteEventData(val._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>

    // {/* End of  incubatees table  */}
  );
}

export default Eventslist;
