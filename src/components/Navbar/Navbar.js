import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ handleModalOpen, setSignInType }) => {
  
  const handleClick = (type) => {
    handleModalOpen();
    setSignInType(type);
  };

  return (
    <nav className="header">
      <motion.h3
        className="header__hero"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.4 }}
      >
        Inner Circle
      </motion.h3>
      <ul className="header__list">
        <motion.li
          className="header__register"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.1 }}
          onClick={() => handleClick("register")}
        >
          Register
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.1 }}
          className="header__login"
          onClick={() => handleClick("login")}
        >
          Log in
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
