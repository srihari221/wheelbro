import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import driverImg from "../../assets/all-images/toyota-offer-2.png";
import "../../styles/become-driver.css";

const BecomeDriverSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate('/cars'); // Navigate to the Services page
  };

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Book your Service At low cost 
            </h2>

            <button 
              className="btn become__driver-btn mt-4"
              onClick={handleButtonClick} // Attach click handler
            >
              Book here
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
