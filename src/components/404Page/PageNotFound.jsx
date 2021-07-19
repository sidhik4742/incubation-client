import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import img1 from "./pagenot.jpg"
import("./PageNotFound.css")



function PageNotFound() {
    return (
        <>
            <div className="container" >
                <h1 className="text-center mt-3">oops!</h1>
                <div className="container" id="background-container">
                    <img src={img1} alt="no page" className="img-fluid" />

                    <Link to="/">
                        <button className="btn btn-lg btn-dark mt-2" >Back to Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
