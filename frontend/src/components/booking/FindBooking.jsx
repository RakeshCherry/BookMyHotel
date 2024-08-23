import React from "react";
import { useState } from "react";
import {
  getBookingByConfirmationCode,
  cancelBooking,
} from "../utils/ApiFunctions";

const FindBooking = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    id: "",
    room: { id: "" },
    bookingConfirmationCode: "",
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
    guestFullName: "",
    guestEmail: "",
    numOfAdults: "",
    numOfChildren: "",
    totalNumOfGuest: "",
  });

  const clearBookingInfo = {
    id: "",
    room: { id: "" },
    bookingConfirmationCode: "",
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
    guestFullName: "",
    guestEmail: "",
    numOfAdults: "",
    numOfChildren: "",
    totalNumOfGuest: "",
  };

  const [isDeleted, setIsDeleted] = useState(false);

  const handleInputChange = (e) => {
    setConfirmationCode(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await getBookingByConfirmationCode(confirmationCode);
      setBookingInfo(data);
      setError(null);
    } catch (error) {
      setBookingInfo(clearBookingInfo);
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleBookingCancellation = async (bookingId) => {
    try {
      await cancelBooking(bookingInfo.id);
      setIsDeleted(true);
      setBookingInfo(clearBookingInfo);
      setConfirmationCode("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="container mt-5 d-flex flex-column justify-content-center align-content-center">
        <h2>Find My Booking</h2>
        <form onSubmit={handleFormSubmit} className="col-md-6">
          <div className="input-group mb-3">
            <input
              value={confirmationCode}
              className="form-control"
              id="confirmationCode"
              name="confirmationCode"
              onChange={handleInputChange}
              placeholder="Enter Booking Confirmation Code"
            />
            <button className="btn btn-hotel input-group-text">
              Find Booking...
            </button>
          </div>
        </form>
        {isLoading ? (
          <div>Finding your bookings</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : bookingInfo.bookingConfirmationCode ? (
          <div className="col-md-6 mt-4 mb-5">
            <h3>Booking Information</h3>
            <p>Confirmation Code : {bookingInfo.bookingConfirmationCode}</p>
            <p>Booking ID : {bookingInfo.bookingId}</p>
            <p>Room No : {bookingInfo.room.id}</p>
            <p>Check-In Date : {bookingInfo.checkInDate}</p>
            <p>Check-Out Date : {bookingInfo.checkOutDate}</p>
            <p>Full Name : {bookingInfo.guestFullName}</p>
            <p>Email Address : {bookingInfo.guestEmail}</p>
            <p>Adults : {bookingInfo.numOfAdults}</p>
            <p>Children : {bookingInfo.numOfChildren}</p>
            <p>Total Guest : {bookingInfo.totalNumOfGuest}</p>
            {!isDeleted && (
              <button
                className="btn btn-danger"
                onClick={() => handleBookingCancellation(bookingInfo.bookingId)}
              >
                Cancle Booking
              </button>
            )}
          </div>
        ) : (
          <div>Find Booking</div>
        )}
        {isDeleted && (
          <div className="alert alert-success mt-3" role="alert">
            Booking has been cancelled successfully
          </div>
        )}
      </div>
    </>
  );
};

export default FindBooking;
