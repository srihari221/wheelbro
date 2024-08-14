import React from "react";
import "../../styles/find-car-form.css";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  return (
    <div className="paragraph-section">
      <p>
         Your trusted intermediary between customers and service centers. Our mission is to make vehicle maintenance and servicing hassle-free for you. Whether you need a two-wheeler or four-wheeler service, we've got you covered. Book a service with us, and our team will ensure your vehicle is picked up, serviced, and returned to you in no time.
      </p>
  
      <p>
        Click the button below to find your nearest service center and book an appointment today!
      </p>
      <button className="btn find__car-btn">
        <Link to="/cars" className="car">Find Your Service Centre</Link>
      </button>
    </div>
  );
};

export default FindCarForm;
