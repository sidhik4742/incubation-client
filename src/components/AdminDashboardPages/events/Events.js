import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import Sidebar from "../sidebar";
import { isAuthenticated } from "../../Auth/helper";
import Eventslist from "./Eventslist";
import { Link } from "react-router-dom";
import "./Event.css";

function Events() {
  const {
    user: { name },
  } = isAuthenticated();
  const nav = () => {
    window.location = "/#/dashboard";
  };

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
              <i className="fa fa-user "></i>
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
                    <i className="fa fa-user mx-1 fa-2x"></i>
                    {name}
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
          <div className="container-fluid  mt-5">
            <div className="row" style={{ display: "flex", justifyContent: "space-between", marginLeft: "12px", marginRight: "12px" }}>
              <h4>Events list </h4>
              <Link to="/admin/dashboard/Events/addEvent">
                <button type="button" className="btn btn-info-adduser">
                  New Event
                </button>
              </Link>
            </div>

            <Eventslist />
          </div>
        </div>
      </div>
    </>
  );
}
export default Events;
