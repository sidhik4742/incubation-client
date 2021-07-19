import React from "react";
import { Container } from "react-bootstrap";
import "./Showcase.css";

function Showcase() {
  return (
    <div>
      <Container fluid className="showcase-container">
        <h1 className="shape-heading">Welcome TO Incubation Management</h1>
        <div className="dynamic-txt">
          <h1>Center</h1>
        </div>
      </Container>
    </div>
  );
}

export default Showcase;
