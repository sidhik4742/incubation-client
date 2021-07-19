import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../AdminDashboard.css";
import Sidebar from "../sidebar";
import { isAuthenticated, signup } from "../../Auth/helper/index";
import "./incubatees.css";

import IncubateesList from "./GetallIncubatee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { getAllUser, edituser } from "../../Auth/user";
const eye = <FontAwesomeIcon icon={faEye} />;

const initialObject = {
  name: "",
  lastName: "",
  email: "",
  role: "",
  phone: "",
};

function EditUser() {
  //   const {
  //     user: { name },
  //   } = isAuthenticated();
  const nav = () => {
    window.location = "/#/dashboard";
  };

  //   useEffect(async () => {

  //     // to load user data
  //     loadUserData();

  //     // onSubmit;
  //   }, []);

  useEffect(() => {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
    loadUserData();
  }, []);

  const history = useHistory();
  // show password
  //   const [passwordShown, setPasswordShown] = useState(false);
  //   const togglePasswordVisiblity = () => {
  //     setPasswordShown(passwordShown ? false : true);
  //   };

  //   To get data from the db and place it inside the fields
  const { id } = useParams();

  const [EditUser, setEdituser] = useState(initialObject);

  // destructuring the values
  const { name, lastName, email, role, phone } = EditUser;

  // handlechange method what we are passing to the db
  const onValueChange = (e) => {
    setEdituser({ ...EditUser, [e.target.name]: e.target.value });
  };

  const loadUserData = async () => {
    const response = await getAllUser(id);
    setEdituser(response.data);
  };

  // const edit user data
  const EdituserDetails = async () => {
    await edituser(id, EditUser);
  };
  // onsubmit fucntion

  /// use effect

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
              <h4 className="text-left ">Edit User </h4>
              <div className="row">
                {/* <div className="container">{performRedirect()}</div> */}

                <div className="col-12 col-md-12 login-modal">
                  <form>
                    <div className="row mb-3" style={{ paddingTop: "23px" }}>
                      <div className="col-md-12 form-group">
                        <i className="fa fa-user"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="inputFirstName"
                          placeholder="First Name"
                          onChange={(e) => onValueChange(e)}
                          name="name"
                          value={name}
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
                          onChange={(e) => onValueChange(e)}
                          name="lastName"
                          value={lastName}
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
                          onChange={(e) => onValueChange(e)}
                          name="email"
                          value={email}
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="row mb-3 ">
                      <div
                        className="col-md-12 form-group"
                        style={{ display: "flex" }}
                      >
                        <i
                          onClick={togglePasswordVisiblity}
                          className="password-icon"
                        >
                          {eye}
                        </i>
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
                    </div> */}
                    <div className="row mb-3">
                      <div className="col-md-12 form-group">
                        <i className="fa fa-user"></i>
                        <input
                          type="text"
                          className="form-control"
                          id="role"
                          placeholder="role"
                          onChange={(e) => onValueChange(e)}
                          name="role"
                          value={role}
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
                          onChange={(e) => onValueChange(e)}
                          name="phone"
                          value={phone}
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
                        onClick={() => EdituserDetails}
                        type="submit"
                        className="btn btn-add btn-lg "
                        style={{ marginRight: "8px" }}
                      >
                        Edit user
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
export default EditUser;
