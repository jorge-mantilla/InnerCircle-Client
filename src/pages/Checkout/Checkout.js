import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthState";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from "../../components/Calendar/Calendar";
import "./Checkout.scss";

const Checkout = ({ handleHideCheckout }) => {
  const [checkoutStartDate, setCheckoutStartDate] = useState(null);
  const [checkoutEndDate, setCheckoutEndDate] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleDateSelection = (startDate, endDate) => {
    setCheckoutStartDate(startDate);
    setCheckoutEndDate(endDate);
  };
  const notify = () => { 
    toast("Message has been sent, Item reserved!");

   setTimeout(() => {handleHideCheckout()} , 2500);
  }
  console.log(notify)

  return (
    <article className="checkout">
      <h1 className="checkout__header">Reserve</h1>
      <p className="checkout__setDate">Choose Dates</p>
      <motion.div whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 1.1 }} className="checkout__calendar">
        <Calendar onDateSelection={handleDateSelection} />
      </motion.div>

      {/* <p className="">Accept Price</p> */}

      {/* {checkoutStartDate && (
        <p className="checkout__start">Selected Start Date: {checkoutStartDate.toDateString()}</p>
      )}

      {checkoutEndDate && (
        <p className="checkout__end">Selected End Date: {checkoutEndDate.toDateString()}</p>
      )} */}
      {/* <input className="checkout__input" placeholder="Send Email"></input> */}

        <div className="checkout__button-box">
      {/* <Link to={`/profile/${currentUser.id}`}> */}
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.2 }}
          className="btn"
          onClick={notify}
          >
          Reserve
        </motion.button>
        <ToastContainer />
      {/* </Link> */}
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
