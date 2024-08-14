import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [selectedService, setSelectedService] = useState("all");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const filteredCarData = selectedService === "all" 
    ? carData 
    : carData.filter((item) => item.serviceType === selectedService);

  return (
    <Helmet title="Cars">
      <CommonSection title="Services" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleServiceChange}>
                  <option value="all">All</option>
                  <option value="water-service">Water Service</option>
                  <option value="full-service">Full Service</option>
                  <option value="tyre">Tyre Rotation and Balancing</option>
                  <option value="wiper">Wiper Blades Replacement</option>
                  <option value="safety">Safety check</option>
                  <option value="engine">Engine and Cabin Air Filter Replacements</option>
                  <option value="oil">Oil change</option>
                </select>
              </div>
            </Col>

            {filteredCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
