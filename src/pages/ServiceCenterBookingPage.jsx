import React, { useState } from 'react';
import './ServiceCenterBookingPage.css';
import Modal from 'react-modal';

const ServiceCenterBookingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="service-center-booking">
      <h1 className="title">Scheduled Packages</h1>
      <div className="service-package">
        <h2>Basic Service</h2>
        <p>• 1000 Kms or 1 Month Warranty</p>
        <p>• Wiper Fluid Replacement</p>
        <p>• Car Wash</p>
        <p>• Engine Oil Replacement</p>
        <button onClick={openModal}>Select Car</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Book Now"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Book Your Service</h2>
        <form>
          {/* Add form elements here */}
          <button type="submit">Book Now</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default ServiceCenterBookingPage;
