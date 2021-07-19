import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../AdminDashboard.css";
import Sidebar from "../sidebar";
import { isAuthenticated, signup } from "../../Auth/helper/index";
import "./incubatees.css";
import IncubateesList from "./GetallIncubatee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;




function Incubatees() {
  //   const {
  //     user: { name },
  //   } = isAuthenticated();
  const nav = () => {
    window.location = "/#/dashboard";
  };
  const history = useHistory();
  // show password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [values, setValues] = useState({
    name: "",
    LastName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    error: "",
    success: false,
  });
  // destructuring the values
  const { name, lastName, email, password, role, phone, error, success } =
    values;

  // handlechange method what we are passing to the db
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // onsubmit fucntion
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, lastName, email, password, role, phone })
      .then((data) => {
        // setValues([...values, { name: name, lastName: lastName, email: email, role: role, phone: phone }]);
        //
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          // setValues([...values, { name: name, lastName: lastName, email: email, role: role, phone: phone }]);

          setValues({
            ...values,
            name: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
            phone: "",
            error: "",
            success: true,
          });
          // history.push("/admin/dashboard/incubatees");
        }
      })
      .catch(console.log("Error in adding user..."));
  };

  /// use effect
  useEffect(() => {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
    // onSubmit;
  }, []);

  ////////////////////////////////////////
  //////////////start of  backend talk ////////////
  ///////////////////////////////////////

  // sucess message
  const successMessage = () => {
    // if (data.error) {
    //     toast("User is added successfuly..")
    // }
    // else {
    //     toast("Please provide the required fields..")
    // }

    return (
      // toast("User is Added Successfuly."),
      <div
        className="alert alert-success alert-dismissible fade show mt-2"
        role="alert"
        style={{ display: success ? "" : "none" }}
      >
        User is added successfuly
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  };

  // error message
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-1"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  ////////////////////////////////////////
  //////////////end of  backend talk ////////////
  ///////////////////////////////////////

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
                    <i className="fa fa-user me-2"></i> iqbal
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
          <div className="container-fluid text-center mt-3">
            <div className="container">
              <div className="container-fluid" id="incubatees-heading">
                {/* <!-- Button trigger modal --> */}
                {/* <!-- Button trigger modal --> */}
              </div>
            </div>

            {/* End of  incubatees table  */}

            {/* /// modal design  */}

            {/* <!-- Modal --> */}

            <div
              className="container "
              id="User-add-section"
              style={{ marginTop: "-5px" }}
            >
              <h4 className="text-left ">Add User </h4>
              <div className="row">
                {/* <div className="container">{performRedirect()}</div> */}

                <div className="col-12 col-md-12 login-modal">
                  {errorMessage()}
                  {successMessage()}

                  <form>
                    <div className="row mb-3" style={{ paddingTop: "23px" }}>
                      <div className="col-md-12 form-group">
                        <i className="fa fa-user"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="inputFirstName"
                          placeholder="First Name"
                          value={name}
                          onChange={handleChange("name")}
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
                      <div className="col-md-12 form-group" style={{ display: "flex" }}>
                        <i onClick={togglePasswordVisiblity} className="password-icon">{eye}</i>
                        <input
                          type={passwordShown ? "text" : "password"}
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
                          type="text"
                          className="form-control"
                          id="role"
                          placeholder="role"
                          value={role}
                          onChange={handleChange("role")}
                          maxLength="1"
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
                    </div>
                    {/* <div className="form-group text-right">
                <a href="#nmn" className="text-dark">
                  Forgot Password?
                </a>
              </div> */}
                    <div className="text-center">
                      <button
                        onClick={onSubmit}
                        type="submit"
                        className="btn btn-add btn-lg "
                        style={{ marginRight: "8px" }}
                      >
                        Add User
                      </button>
                      <Link to="/admin/dashboard/incubatees">
                        <button
                          type="button"
                          className="btn btn-add-user"
                          style={{ marginLeft: "8px" }}
                        >
                          Back to Table
                        </button>
                      </Link>
                    </div>
                    {/* <p className="text-center">{JSON.stringify(values)}</p> */}
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Incubatees;
