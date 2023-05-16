import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "./Checkout.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [checkoutStartDate, setCheckoutStartDate] = useState(null);
    const [checkoutEndDate, setCheckoutEndDate] = useState(null);
  
    const handleDateSelection = (startDate, endDate) => {
      setCheckoutStartDate(startDate);
      setCheckoutEndDate(endDate);
    };
    // console.log(startDate, endDate)
    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <article className="checkout">
      <h1 className="checkout__header">Reserve</h1>
      <p className="checkout__setDate">Choose Dates</p>
      <div className="checkout__calendar">

        <Calendar onDateSelection={handleDateSelection} />
      </div>

      {checkoutStartDate && (
        <p className="checkout__start">Selected Start Date: {checkoutStartDate.toDateString()}</p>
      )}

      {checkoutEndDate && (
        <p className="checkout__end">Selected End Date: {checkoutEndDate.toDateString()}</p>
      )}

      <input className="checkout__email" placeholder="Send Email"></input>

      <button className="btn">Submit</button>
      <button className="btn" onClick={handleGoBack}>Go Back</button>
    </article>
  );
};

export default Checkout;
