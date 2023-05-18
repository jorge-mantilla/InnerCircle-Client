import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from "../../components/Calendar/Calendar";
import "./Checkout.scss";

const Checkout = ({ handleHideCheckout }) => {
  const [checkoutStartDate, setCheckoutStartDate] = useState(null);
  const [checkoutEndDate, setCheckoutEndDate] = useState(null);

  const handleDateSelection = (startDate, endDate) => {
    setCheckoutStartDate(startDate);
    setCheckoutEndDate(endDate);
  };
  const notify = () => { 
    toast(`Message has been sent, Item reserved! ${checkoutStartDate.toDateString()}, to ${checkoutEndDate.toDateString()}`, {postion:"top-center"});

   setTimeout(() => {handleHideCheckout()} , 311500);
  }

  return (
    <article className="checkout">
      <h1 className="checkout__header">Reserve</h1>
      <p className="checkout__setDate">Choose Dates</p>
      <motion.div whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 1.1 }} className="checkout__calendar">
        <Calendar onDateSelection={handleDateSelection} />
      </motion.div>

        <div className="checkout__button-box">
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.2 }}
          className="btn"
          onClick={notify}
          >
          Reserve
        </motion.button>

        <ToastContainer  position="top-center" />

      <motion.button
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className="btn"
        onClick={handleHideCheckout}
        >
        Close
      </motion.button>
        </div>
    </article>
  );
};

export default Checkout;
