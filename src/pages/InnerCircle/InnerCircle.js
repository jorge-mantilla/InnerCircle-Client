import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
// import axios from "axios";
import "./InnerCircle.scss";
import Navbar from "../../components/Navbar/Navbar";
import CalendarPage from "../../components/CalendarPage/CalendarPage";

const InnerCircle = ({users}) => {

  return (
    <motion.article initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <Navbar />
      <div className="ic">
      {users.map((user) => (
        <div className="ic__image-box" key={user.id}>
        <Link to="/circle/:userId"><img className="ic__image" src={user.image} alt="heads" /></Link>
        </div>
    ))}
      </div>
      <CalendarPage />
    </motion.article>
  );
};

export default InnerCircle;

{/* <div className="ic">
  {users.map((user) => {
    return (
      <div key={user.id}>
        <Link to={`/circle/${user.id}`}><motion.div 
        className="ic__image-box"
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 1.1 }}
        >
          <motion.img className="ic__image" src={user.image} alt="avatar" />
        </motion.div></Link>
        <div className="ic__email-box">
        <p className="ic__email">{`${user.email}`}</p> */}