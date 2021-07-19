import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Event.css";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/footer/Footer";
import { GetallEvent, uploadFile } from "../../Auth/eventapi";

function DisplayEventList() {
  //   const date = new Date();
  //   const currenttime = date.getFullYear();

  // const arr1 = [1, 2, 3, 4, 5, 6, 7, 9];

  const [getallvalues, setallValues] = useState([]);

  // const url1 = getallvalues.photo
  //   ? getallvalues.photo
  //   : "https://revanest.com/public/images/digest/1623347372664.jpg";

  useEffect(() => {
    AllEvents();
  }, []);

  const AllEvents = async () => {
    let response = await GetallEvent();
    console.log(response);

    setallValues(response);
  };
  return (
    <>
      <Header />
      <div className="container-fluid mt-5 " id="event-display">
        <div className="row eventlist-header-section">
          <div className="container">
            <h1> RECENT EVENTS </h1>
          </div>
        </div>

        <div className="container-fluid card-section">
          <div className="row">
            {getallvalues.map((valuesEvent) => {
              return (
                <div className="col-12 col-md-3">
                  <div className="card eventCard">
                    <img
                      src={valuesEvent.photo}
                      className="card-img-top img-fluid"
                      alt="EventImage"
                      style={{ width: "100%", height: "220px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{valuesEvent.eventname}</h5>
                      <p
                        className="card-text"
                        style={{ fontSize: "13px", color: "#777" }}
                      >
                        Starts: {valuesEvent.sdate} <br /> Ends:
                        {valuesEvent.edate}
                      </p>
                      <p className="card-text" style={{ color: "#fd933c" }}>
                        {valuesEvent.venu}
                      </p>
                      <Link to={`/Events/singleEvent/${valuesEvent._id}`}>
                        <a href="#ddd" className="btn upload-btn px-4">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DisplayEventList;
