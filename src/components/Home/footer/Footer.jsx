import React from "react";

import "./footer.css";
const date = new Date();
let CurrentYear = date.getFullYear();
function Footer() {
  return (
    <>
      <footer className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <h2>corporate office</h2>
              <p>
                REVA NEST <br />
                REVA University <br />
                Rukmini Knowledge Park <br />
                Kattigenahalli, Yelahanka <br />
                Bangalore-560064
              </p>
            </div>
            <div className="col-12 col-md-4 incubation-qoute">
              <h2>Incubation Center</h2>
              <p className="text-justify">
                "We Are Proudly Accountable to a better way of doing business.
                we actively pursue the wellbeing of staff, communities and
                environment and help the brands we work with do so as well."
              </p>
            </div>
            <div className="col-12 col-md-4 followClass">
              <h2>Follow us</h2>
              <div className="d-flex">
                <a href="#an">
                  <i className="fab fa-facebook-square fa-2x me-2"></i>
                </a>
                <a href="#an">
                  <i className="fab fa-twitter-square fa-2x me-2"></i>
                </a>
                <a href="#an">
                  <i className="fab fa-linkedin fa-2x me-2"></i>
                </a>
              </div>

              <h2 className="mt-3">Contact us</h2>

              <div className="d-flex">
                <p>
                  <a href="#an">
                    <i className="fas fa-phone-square fa-2x"></i>
                  </a>
                </p>
                <p className="pt-1 ps-2"> 46966966 (Ext:165 Or 455)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-start pt-2 rights-section">
          <p>All Rights Reserved &copy; {CurrentYear} Incubation Center</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
