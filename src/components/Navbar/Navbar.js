import React from 'react';
import Logo from '../../assets/Images/Inner circle-2.png'
import './Navbar.scss'

const Navbar = ({handleModalOpen}) => {

  return (
    <nav className='header'>
        <div className="header__logo-box">
        <img className='header__logo' src={Logo} alt='logo' />
        <h3 className='header__hero'>Inner Circle</h3>
        </div>
        <button className='header__btn' onClick={handleModalOpen}>Get Started</button>

        {/* <ul className='header__list'>
            <li className='header__profile'>Profile</li>
            <li className='header__sign'>Sign up</li>
            <li className='header__login'>Log in</li>
          </ul> */}
          </nav>
  )
}

export default Navbar