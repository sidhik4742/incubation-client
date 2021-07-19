import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <Navbar className="navbar" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand className="small-screen-logo">
            <Link to="/">
              <img
                src="/assets/logo.png"
                width="50"
                height="60"
                className="d-inline-block align-top"
                alt="REVA NEST logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="main-navbar" id="navbarScroll">
            <Nav className="m-auto" style={{ maxHeight: "200px" }} navbarScroll>
              <Nav.Item className="nav-link1">
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/aboutus"> About us</Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/UserProfile"> Incubatees</Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/Events">Events</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">
                  <img
                    src="/assets/logo.png"
                    className="large-screen-logo"
                    alt="reva nest logo"
                  />
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/Elearning">E-learning</Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/payment">Payment</Link>
              </Nav.Item>
              <Nav.Item className="nav-link1">
                <Link to="/login">Login</Link>
              </Nav.Item>
              <Link className="btn-header" to="/apply">
                <Button>Apply Now</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
