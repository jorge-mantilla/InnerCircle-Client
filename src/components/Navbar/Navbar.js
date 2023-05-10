import React from "react";
import Logo from "../../assets/Images/Inner circle-2.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Navbar = ({ handleModalOpen }) => {
  return (
    <nav className="header">
      <div className="header__logo-box">
        <Link to="/">
          <motion.img
            className="header__logo"
            src={Logo}
            alt="logo"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
          />
        </Link>
        <h3 className="header__hero">Inner Circle</h3>
      </div>
      <Link to="/circle">
        <button className="btn">Browse</button>
      </Link>
      <button className="btn" onClick={handleModalOpen}>
        Get Started
      </button>

      {/* <ul className='header__list'>
            <li className='header__profile'>Profile</li>
            <li className='header__sign'>Sign up</li>
            <li className='header__login'>Log in</li>
          </ul> */}
    </nav>
  );
};

export default Navbar;
