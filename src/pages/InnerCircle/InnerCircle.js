import React, { useState } from "react";
import "./InnerCircle.scss";
import users from "../../data/users.json";
import Navbar from "../../components/Navbar/Navbar";
import ItemCarousel from "../../components/ItemCarousel/ItemCarousel";
import CalendarPage from "../../components/CalendarPage/CalendarPage";
import { motion } from "framer-motion";

const InnerCircle = () => {

  // const [chosenUser, setChosenUser] = useState("")
  // const user = 

  //  const renderItems = () => {
  //   if (setChosenUser === "user.name") {
  //     setChosenUser(user.name)
  //   }
  // };

  return (
    <motion.article initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <Navbar />
      <div className="ic">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <motion.div 
              className="ic__image-box"
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 1.1 }}
              // animate={{
              //   // scale:[1.0,1.1,1.2,1.2,1.1],
              //   borderRadius: ['50%',"10%","50%","10%","5%"],
              //   // rotate: [15, 0, 30, 0, 0]
              // }}
              // transition={{
              //   duration: 0.5
              // }}
              >
                <motion.img className="ic__image" src={user.image} alt="avatar" 
                animate={{
              scale:[1.0,1.1,1.3,1.4,1.3,1.1],
              // borderRadius: ['50%',"10%","50%","10%","40%"],
              rotate: [15, -5, 15, -5, 0]
            }}
            transition={{
              duration: 2
            }} />
              </motion.div>
              <div className="ic__email-box">
                {/* <p className="ic__email">{`${user.email}`}</p> */}
              </div>
            </div>
          //    <motion.button
          //    className="button"
          //    whileHover={{ scale: 1.2 }}
          //    whileTap={{ scale: 1.1 }}
          //  >
          );
        })}
      </div>
      <ItemCarousel />
      <CalendarPage />
    </motion.article>
  );
};

export default InnerCircle;
