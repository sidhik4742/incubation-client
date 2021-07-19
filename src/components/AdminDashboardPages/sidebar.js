import React from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../Auth/helper";

const Sidebar = () => {
  let history = useHistory();

  const nav = () => {
    window.location = "/#/dashboard";
  };
  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper">
        <div className="sidebar-heading py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <img
            src="/assets/logo.png"
            alt="NEST LOGO"
            width="120px"
            height="140px"
            style={{ marginRight: "auto", marginLeft: "16px" }}
          />
        </div>
        <div className="list-group list-group-flush my-3">
          <Link to="/dashboard">
            <a
              href="#D"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-user me-2"></i> Applicant List
            </a>
          </Link>
          <Link to="/record">
            <a
              href="#D"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-table"></i> Record Track
            </a>
          </Link>
          <Link>
            <a
              href="#D"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-book me-2"></i> Booking Slots
            </a>
          </Link>

          {/* <Link to="/aboutus"> About us</Link> */}
          <Link to="/admin/dashboard/events">
            <a
              href="##dd"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-paperclip me-2"></i> Events Scheduale
            </a>
          </Link>
          <Link to="/admin/dashboard/incubatees">
            <a
              href="##"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i class="fas fa-users me-2"></i> Users List
            </a>
          </Link>
          <Link>
            <a
              href="#D"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-image me-2"></i> E-learing
            </a>
          </Link>
          <Link to="/admin/dashboard/payment" >
            <a
              href="##"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
            >
              <i className="fa fa-credit-card me-2"></i> Payments
            </a>
          </Link>

          {isAuthenticated() && (
            <Link to="#dash">
              <a
                href="##"
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold text-white"
              >
                <i className="fa fa-power-off me-4"></i>
                <span
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                  style={{ paddingLeft: "8px" }}
                >
                  Log out
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
