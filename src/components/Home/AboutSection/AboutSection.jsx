import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./AboutSection.css";

function About() {
  return (
    <div className="aboutus-section">
      <Container className="about-container">
        <Row>
          <Col>
            <h1 className="about-heading">About us</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div className="card-box-shadow">
              <Card className="mt-3 card1">
                <Card.Img
                  className="icon-img"
                  variant="top"
                  src="/assets/Home/icons/creation.png"
                />
                <Card.Body>
                  <Card.Title className="card-heading">
                    <h4>Creation</h4>
                  </Card.Title>
                  <Card.Text className="card-body-text">
                    This program is specially designed to help young startups
                    innovate and grow. We will help them with workspaces,
                    mentorship, education and access to the investors for
                    startups and sole entrepreneurs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="card-box-shadow">
              <Card className="mt-3 card2">
                <Card.Img
                  className="icon-img"
                  variant="top"
                  src="/assets/Home/icons/vision.png"
                />
                <Card.Body>
                  <Card.Title className="card-heading">
                    <h4>Vision</h4>
                  </Card.Title>
                  <Card.Text className="card-body-text">
                    To create a center that will foster and support academia and
                    the industry that fuels entrepreneurship spirit. To incubate
                    research bent of mind among students to help them innovate
                    technological ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="card-box-shadow">
              <Card className="mt-3 card3">
                <Card.Img
                  className="icon-img"
                  variant="top"
                  src="/assets/Home/icons/mission.png"
                />
                <Card.Body>
                  <Card.Title className="card-heading">
                    <h4>Mission</h4>
                  </Card.Title>
                  <Card.Text className="card-body-text">
                    To provide conducive support system that helps in nurturing
                    technology based innovative start-ups towards sustainability
                    and scalability.To create entrepreneurial opportunities for
                    students, faculties.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
