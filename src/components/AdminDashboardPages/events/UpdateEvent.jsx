import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import Sidebar from "../sidebar";
import { isAuthenticated } from "../../Auth/helper";
import Eventslist from "./Eventslist";
import { Link, useHistory } from "react-router-dom";
import "./Event.css";
import {
  GetsingleEvent,
  updateEventOne,
  uploadFile,
} from "../../Auth/eventapi";

function UpdateEvent({ match }) {
  const {
    user: { name },
  } = isAuthenticated();

  const history = useHistory();

  const [Eupdate, setEupdate] = useState({
    eventname: "",
    venu: "",
    description: "",
    organized: "",
    sdate: "",
    edate: "",
    photo: "",
  });

  const url = Eupdate.photo
    ? Eupdate.photo
    : "https://revanest.com/public/images/digest/1623347372664.jpg";
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      console.log(file);
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // api call
        console.log(data);

        const image = await uploadFile(data);
        Eupdate.photo = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  /// use effect
  useEffect(() => {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
    const fetchData = async () => {
      let response = await GetsingleEvent(match.params.id);
      setEupdate(response);
      console.log(response);
    };
    fetchData();
  }, []);

  //   handlechange
  const handleChange = (e) => {
    setEupdate({ ...Eupdate, [e.target.name]: e.target.value });
  };

  // create post event
  //   const saveEvent = async () => {
  //     await createEvent(eventvalues);
  //     // history.push("/admin/dashboard/Eventslist");
  //   };

  //update event operation
  const UpdateEvent = async () => {
    await updateEventOne(match.params.id, Eupdate);
    // history.push("/admin/dashboard/Eventslist");
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper" className="bg-light">
          <nav
            className="navbar navbar-expand-lg   py-4 px-4"
            style={{ backgroundColor: "#EFEFEF" }}
          >
            <div className="d-flex align-items-center ">
              <i className="fa fa-bars mr-3 fs-4 me-3" id="menu-toggle"></i>
              <h2 className="fs-2 m-0"> Dashboard</h2>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-user me-2"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  fw-bold"
                    href="#DSD"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#000000" }}
                  >
                    <i className="fa fa-user me-2"></i> {name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#DS">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          {/* ////////////////////////////////////////// */}
          {/* page contents starts from here  */}
          {/* ////////////////////////////////////////// */}
          <div className="container-fluid addevent-section">
            <div className="row">
              <div className="col-12 col-sm-12  col-md-8  event-section-body">
                <div className="event-section-content">
                  <h4> Update Event</h4>
                  <div class="col-md-12">
                    <form>
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-md-8 name-group">
                            <div className="form-group">
                              {/* <label className="control-label col-sm-2" for="fname">First Name:</label> */}
                              <div className="col-12 col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Event Name"
                                  value={Eupdate.eventname}
                                  name="eventname"
                                  onChange={(e) => handleChange(e)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              {/* <label className="control-label col-sm-2" for="lname">Last Name:</label> */}
                              <div className="col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Event Venu"
                                  value={Eupdate.venu}
                                  name="venu"
                                  onChange={(e) => handleChange(e)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              {/* <label className="control-label col-sm-2" for="email">Email:</label> */}
                              <div className="col-md-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Invited Person Name"
                                  value={Eupdate.organized}
                                  name="organized"
                                  onChange={(e) => handleChange(e)}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 text-center  image-section">
                            <img
                              src={url}
                              alt="event img"
                              style={{ width: "200px", height: "130px" }}
                            />
                            <br />
                            <label htmlFor="fileinput" className="upload-btn">
                              <i
                                className="fas fa-upload px-1"
                                id="uploadIcon"
                              ></i>
                              Upload Image
                              {/* <i class="fas fa-plus-circle fa-3x" id="uploadIcon"></i> */}
                            </label>
                            <input
                              type="file"
                              id="fileinput"
                              style={{ display: "none" }}
                              onChange={(e) => setFile(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-sm-6">
                          <input
                            className="form-control"
                            type="datetime-local"
                            name="sdate"
                            value={Eupdate.sdate}
                            onChange={(e) => handleChange(e)}
                            style={{ paddingLeft: "12px" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-6">
                          <input
                            className="form-control"
                            type="datetime-local"
                            name="edate"
                            value={Eupdate.edate}
                            onChange={(e) => handleChange(e)}
                            style={{ paddingLeft: "12px" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        {/* <label className="control-label col-sm-2" for="comment">Comment:</label> */}
                        <div className="col-sm-10 col-lg-12">
                          <textarea
                            className="form-control border"
                            rows="10"
                            placeholder="Description"
                            value={Eupdate.description}
                            name="description"
                            onChange={(e) => handleChange(e)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12 col-sm-10">
                          <button
                            type="submit"
                            className="btn add-event-btn "
                            onClick={UpdateEvent}
                          >
                            Update Event
                          </button>
                          <Link to="/admin/dashboard/Eventslist">
                            <button
                              className="btn upload-btn"
                              style={{ padding: "10px" }}
                            >
                              Back to Table
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateEvent;
