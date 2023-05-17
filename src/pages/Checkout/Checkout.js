import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthState";
import Calendar from "../../components/Calendar/Calendar";
import "./Checkout.scss";

const Checkout = ({handleHideCheckout}) => {
    const [checkoutStartDate, setCheckoutStartDate] = useState(null);
    const [checkoutEndDate, setCheckoutEndDate] = useState(null);
    const {currentUser, setCurrentUser} = useContext(AuthContext);

  
    const handleDateSelection = (startDate, endDate) => {
      setCheckoutStartDate(startDate);
      setCheckoutEndDate(endDate);
    };


  return (
    <article className="checkout">
      <h1 className="checkout__header">Reserve</h1>
      <p className="checkout__setDate">Choose Dates</p>
      <div className="checkout__calendar">
        <Calendar onDateSelection={handleDateSelection} />
      </div>
      {/* <p className="">Accept Price</p> */}
      
      {/* {checkoutStartDate && (
        <p className="checkout__start">Selected Start Date: {checkoutStartDate.toDateString()}</p>
      )}

      {checkoutEndDate && (
        <p className="checkout__end">Selected End Date: {checkoutEndDate.toDateString()}</p>
      )} */}
      {/* <input className="checkout__input" placeholder="Send Email"></input> */}

      <Link to={`/profile/${currentUser.id}`}><button className="btn">Reserve</button></Link>
      <button className="btn" onClick={handleHideCheckout}>Close</button>
    </article>
  );
};

export default Checkout;
