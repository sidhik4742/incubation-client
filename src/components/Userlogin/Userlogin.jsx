import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Userlogin.css";
import userIcon from "./user.png";
import backimg from "./back.jpg";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../Auth/helper";
import Header from "../Home/Header/Header";
import Footer from "../Home/footer/Footer";

function Userlogin() {
  const [values, setValues] = useState({
    email: "satar@gmail.com",
    password: "123",
    error: "",
    loading: false,
    didRedirect: false,
  });
  /// decoustructing
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  // taking inputs values
  const handlchange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // onSubmit button method
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: true, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...setValues,
              email: "",
              password: "",
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed."));
  };

  // redirect method
  const performRedirect = () => {
    // todo : redirect
    if (didRedirect) {
      if (user && user.role === 0) {
        // return <p>Redirect to admin</p>;
        // return <Redirect to="/admin/dashboard" />;
        return <Redirect to="/user/dashboard" />;
        // return <Redirect to="UserProfile" />;
      } else {
        return <Redirect to="/login" />;
      }
      // else {
      // return <p>Redirect to the user dashboard</p>;
      // return <Redirect to="/user/dashboard" />;
      // return <Redirect to={UserProfile} />;
      // }
    }
    // if (isAuthenticated()) {
    //   return <Redirect to="/" />
    // }
  };

  // sucess message
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>loading.....</h2>
        </div>
      )
    );
  };
  // error message
  const errorMessage = () => {
    return (
      <div className="row mt-3">
        <div className="col-md-12">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {/* {error} */}
            <p>please type the correct password and email !</p>
          </div>
        </div>
      </div>
    );
  };
   

  return (
    <>
      <Header />
      <div className="container" id="User-login-section">
        {loadingMessage()}

        <div className="row">
          <div className="container">{performRedirect()}</div>

          <div className="col-md-8 img-fluid p-1 showcase-img-background">
            <img
              src={backimg}
              alt="backgroundimg"
              className="img-fluid"
              width="100%"
            />
          </div>
          <div className="col-12 col-md-4 login-modal">
            {errorMessage()}
            <div className="avatar-login text-center">
              <img src={userIcon} alt="userAvatar" />
            </div>
            <h3 className="text-center">Member Login </h3>

            <form>
              <div className="row mb-4">
                <div className="col-md-12 form-group">
                  <i className="fa fa-user"></i>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                    value={email}
                    onChange={handlchange("email")}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 form-group">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                    value={password}
                    onChange={handlchange("password")}
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
                  className="btn btn-login btn-lg btn-block"
                >
                  Login
                </button>
              </div>
              {/* <p className="text-center">{JSON.stringify(values)}</p> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Userlogin;
