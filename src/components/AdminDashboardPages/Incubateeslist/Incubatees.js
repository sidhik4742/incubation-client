import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import Sidebar from "../sidebar";
import { isAuthenticated, signup } from "../../Auth/helper/index";
import "./incubatees.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IncubateesList from "./GetallIncubatee";

function Incubatees() {
  const {
    user: { name },
  } = isAuthenticated();
  const nav = () => {
    window.location = "/#/dashboard";
  };

  const history = useHistory();
  ////////////////////////////////////////
  //////////////start of  backend talk ////////////
  ///////////////////////////////////////

  // const [values, setValues] = useState({
  //   name: "",
  //   LastName: "",
  //   email: "",
  //   password: "",
  //   role: "",
  //   phone: "",
  //   error: "",
  //   success: false,
  // });
  // // destructuring the values
  // const { name, lastName, email, password, role, phone, error, success } =
  //   values;

  // // handlechange method what we are passing to the db
  // const handleChange = (name) => (event) => {
  //   setValues({ ...values, error: false, [name]: event.target.value });
  // };
  // // onsubmit fucntion
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setValues({ ...values, error: false });
  //   signup({ name, lastName, email, password, role, phone })
  //     .then((data) => {
  //       // setValues([...values, { name: name, lastName: lastName, email: email, role: role, phone: phone }]);
  //       //
  //       if (data.error) {
  //         setValues({ ...values, error: data.error, success: false });
  //       } else {
  //         // setValues([...values, { name: name, lastName: lastName, email: email, role: role, phone: phone }]);

  //         setValues({
  //           ...values,
  //           fname: "",
  //           lastName: "",
  //           email: "",
  //           password: "",
  //           role: "",
  //           phone: "",
  //           error: "",
  //           success: true,
  //         });
  //         //   history.push("/admin/dashboard/incubatees");
  //       }
  //     })
  //     .catch(console.log("Error in adding user..."));
  // };

  // sucess message
  // const successMessage = () => {
  // if (data.error) {
  //     toast("User is added successfuly..")
  // }
  // else {
  //     toast("Please provide the required fields..")
  // }

  // return (
  //   // toast("User is Added Successfuly."),
  //   <div
  //     className="alert alert-success alert-dismissible fade show"
  //     role="alert"
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     <p>User is added successfuly</p>
  //   </div>
  // );
  // };

  // error message
  // const errorMessage = () => {
  //   return (
  //     <div
  //       className="alert alert-danger"
  //       style={{ display: error ? "" : "none" }}
  //     >
  //       {error}
  //     </div>
  //   );
  // };
  ////////////////////////////////////////
  //////////////end of  backend talk ////////////
  ///////////////////////////////////////

  useEffect(async () => {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
  }, []);

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
                    <i className="fa fa-user mx-1 fa-2x"></i> {name}
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
          <div className="container-fluid text-center mt-5">
            <div className="container-fluid">
              <div className="container-fluid" id="incubatees-heading">
                <h4 className="text-left ">Users List </h4>

                {/* <!-- Button trigger modal --> */}
                {/* <!-- Button trigger modal --> */}
                {/* <button
                  type="button"
                  className="btn btn-info-adduser"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  New User
                </button> */}
                <Link to="/admin/dashboard/incubatees/Adduser">
                  <button type="button" className="btn btn-info-adduser">
                    New User
                  </button>
                </Link>
              </div>
            </div>

            {/* End of  incubatees table  */}
            <IncubateesList />
            {/* /// modal design  */}

            {/* <!-- Modal --> */}
            {/* <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            > */}
            {/* <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">
                      Add Member
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className=" modal-body"> */}
            {/* member form section style  */}

            {/* <div
                      className="container"
                      id="User-login-section"
                      style={{ marginTop: "-5px" }}
                    > */}
            {/* <div className="row"> */}
            {/* <div className="container">{performRedirect()}</div> */}

            {/* <div className="col-12 col-md-12 login-modal"> */}
            {/* {errorMessage()} */}
            {/* {successMessage()} */}

            {/* <form>
                            <div
                              className="row mb-3"
                              style={{ paddingTop: "23px" }}
                            >
                              <div className="col-md-12 form-group">
                                <i className="fa fa-user"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputFirstName"
                                  placeholder="First Name"
                                  value={fname}
                                  onChange={handleChange("fname")}
                                  autoFocus
                                  required
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12 form-group">
                                <i className="fa fa-user"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputFirstName"
                                  placeholder="Last Name"
                                  value={lastName}
                                  onChange={handleChange("lastName")}
                                  required
                                />
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-md-12 form-group">
                                <i class="fas fa-at"></i>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail3"
                                  placeholder="Email"
                                  value={email}
                                  onChange={handleChange("email")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="row mb-3 ">
                              <div className="col-md-12 form-group">
                                <i className="fa fa-lock"></i>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="inputPas3"
                                  placeholder="Password"
                                  value={password}
                                  onChange={handleChange("password")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12 form-group">
                                <i className="fa fa-user"></i>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="role"
                                  placeholder="role"
                                  value={role}
                                  onChange={handleChange("role")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12 form-group">
                                <i className="fas fa-phone-square fa-2x"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phoneNumber"
                                  placeholder="Phone"
                                  value={phone}
                                  onChange={handleChange("phone")}
                                  maxlength="10"
                                  required
                                />
                              </div>
                            </div> */}
            {/* <div className="form-group text-right">
                <a href="#nmn" className="text-dark">
                  Forgot Password?
                </a>
              </div> */}
            {/* <div className="text-center">
                              <button
                                onClick={onSubmit}
                                type="submit"
                                className="btn btn-login btn-lg btn-block"
                              >
                                Add User
                              </button>
                            </div> */}
            {/* <p className="text-center">{JSON.stringify(values)}</p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link to="/admin/dashboard">
                      <a
                        href="##"
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        style={{ padding: "5px 34px", background: "#000000" }}
                      >
                        Back to Table
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <!-- Modal --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Incubatees;
