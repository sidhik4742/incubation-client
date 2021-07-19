import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { API } from "../Auth/helper/backend.js";
import { Link, Redirect, withRouter, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./UserProfile.css";
import { signout, isAuthenticated } from "../Auth/helper/index.js";
import Footer from "../Home/footer/Footer.jsx";

import { getPaymentDetails } from "../../routes/payment";
import { displayRazorPay } from "../Payment/Payment";
import { getAllPlans } from "../../routes/user.js";
// signout method

function UserProfile() {
  const [succesOpen, setSuccesOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    plan: "",
    country: "",
    zip: "",
    town: "",
  });
  const [allPlans, setAllPlans] = useState([]);

  useEffect(() => {
    const getAllPans = async () => {
      let allPlans = await getAllPlans();
      console.log(allPlans);
      setAllPlans(allPlans);
    };
    getAllPans();
  }, []);

  useEffect(() => {
    console.log("succes useeffect worked");
    setTimeout(() => {
      setSuccesOpen(false);
    }, 1000);

  }, [succesOpen]);

  useEffect(() => {
    setTimeout(() => {
      setErrorOpen(false);
    }, 1000);
  }, [errorOpen]);

  const inputHandler = (event) => {
    setBillingDetails({
      ...billingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(billingDetails);
    const orderInitiated = await getPaymentDetails(billingDetails);
    console.log(orderInitiated);
    if (orderInitiated.result) {
      let paymentDetails = {
        id: orderInitiated.result.id,
        fullName: `${billingDetails.firstName} ${billingDetails.lastName}`,
        email: billingDetails.email,
        contactNo: billingDetails.contactNo,
        amount: orderInitiated.result.amount, // now support INR only for convert to rupeese, 1 rupeese to 100 paise
        currency: orderInitiated.result.currency,
      };
      const paymentResult = await displayRazorPay(paymentDetails);
      console.log(paymentResult);
      if (
        paymentResult.razorpay_payment_id &&
        paymentResult.razorpay_signature
      ) {
        setSuccesOpen(true);
      }
    } else {
      setErrorOpen(true);
    }
  };

  let history = useHistory();
  const {
    user: { name, email },
  } = isAuthenticated();
  return (
    <>
      <div className="container-fluid user-navbar">
        <div className="row ">
          <Navbar
            className=" navbar navbar-padding "
            id="main-nav"
            variant="dark"
            fixed="top"
            expand="lg"
          >
            <Navbar.Brand className="small-screen-logo1">
              <Link to="#Home">
                <img
                  src="/assets/logo.png"
                  width="60"
                  height="70"
                  className="d-inline-block align-top"
                  alt="REVA NEST logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="main-navbar1" id="navbarScroll">
              <Nav
                className="ml-auto"
                style={{ minHeight: "90px" }}
                navbarScroll
              >
                <Nav.Item className="nav-link1">
                  <Link to="#dash">
                    <i className="far fa-user px-1"></i> {name}
                  </Link>
                </Nav.Item>
                {isAuthenticated() && (
                  <Nav.Item className="nav-link1">
                    <Link to="#dash">
                      <i class="fas fa-sign-out-alt px-2"></i>
                      <span
                        onClick={() => {
                          signout(() => {
                            history.push("/payment");
                          });
                        }}
                      >
                        log out
                      </span>
                    </Link>
                  </Nav.Item>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div id="main-payment-section">
        <div className="conatainer">
          <h2>Enter your billing information</h2>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-control"
                    id="exampleInputName"
                    onChange={inputHandler}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="exampleInputName"
                      onChange={inputHandler}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="exampleInputName"
                      onChange={inputHandler}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={inputHandler}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="contactNo"
                    className="form-control"
                    id="exampleInputPhone"
                    onChange={inputHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">
                    Choose your plan
                  </label>
                  <select
                    className="form-control"
                    name="plan"
                    id="exampleFormControlSelect1"
                    onChange={inputHandler}
                  >
                    <option value=" ">Choose your plan</option>
                    {allPlans
                      ? allPlans.map((plan) => (
                          <option value={plan.name}>{plan.name}</option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    id="exampleInputName"
                    onChange={inputHandler}
                    required
                  />
                </div>
                <div className="row">
                  <div className="mb-3 col-md-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Zip
                    </label>
                    <input
                      type="number"
                      name="zip"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={inputHandler}
                      required
                    />
                  </div>
                  <div className="mb-7 col-md-9 ">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Town
                    </label>
                    <input
                      type="text"
                      name="town"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={inputHandler}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* modal */}

      <div className="model">
        {/* <div className="info-msg">
            <i className="fa fa-info-circle" />
            This is an info message.
          </div> */}
        {succesOpen && (
          <div className="success-msg">
            <i className="fa fa-check" />
            Payment procedure has been successfully completed
          </div>
        )}
        {errorOpen && (
          <div className="error-msg">
            <i className="fa fa-times-circle" />
            No matching plans found
          </div>
        )}
      </div>
    </>
  );
}
export default UserProfile;
