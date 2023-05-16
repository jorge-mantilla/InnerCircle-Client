import React from "react";
import Logo from "../../assets/Images/Inner circle-2.png";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const NavbarTwo = () => {
  return (
    <nav className="header">
        <Link to="/"><motion.h3 className="header__hero">Inner Circle</motion.h3></Link>
        <ul className='header__list'>
            <Link to="/profile/:email"><motion.li className='header__register'whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}> Profile</motion.li></Link>
            <Link to="/circle"><motion.li className='header__login' whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}>My Circle</motion.li></Link>
          </ul>
    </nav>
  );
};

export default NavbarTwo;
