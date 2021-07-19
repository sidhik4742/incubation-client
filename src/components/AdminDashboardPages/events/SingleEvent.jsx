import React, { useDebugValue, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Event.css";
import "../../Home/Header/Header.css";
import "../../Home/footer/footer.css";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/footer/Footer";
import { GetsingleEvent } from "../../Auth/eventapi";

function SingleEvent({ match }) {
  const url = "https://revanest.com/public/images/digest/1623347372664.jpg";
  const [getevent, setevent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let response = await GetsingleEvent(match.params.id);
      console.log(response);
      setevent(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container" id="single-event-section">
        <div className="row">
          <div className="container-fluid single-event-body">
            <div className="row text-center">
              <img src={getevent.photo} alt="img" className="img-fluid " />
            </div>
          </div>
          <div className="container">
            <hr />
            <ul className="Event-head-section ">
              <li>
                Event Name :<p>{getevent.eventname}</p>
              </li>
              <li>
              Venue:
                <p>{getevent.venu}</p>
              </li>
              <li>
                Start Date :<p>{getevent.sdate}</p>
              </li>
              <li>
                End Date :<p>{getevent.edate}</p>
              </li>
              <li>
                Organized by :<p>{getevent.organized}</p>
              </li>
            </ul>
            <hr />
            <p style={{ fontSize: "20px" }}>{getevent.description}</p>
            <Link to="/Events">
              <button className="btn upload-btn px-3">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleEvent;
