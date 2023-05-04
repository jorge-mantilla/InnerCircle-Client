import React from 'react';
import Logo from '../../assets/Images/Inner circle-2.png'
import './Navbar.scss'

const Navbar = () => {

  return (
    <nav className='header'>
        <h3 className='header__hero'>Inner Circle</h3>
        <img className='header__logo' src={Logo} alt='logo' />

        <ul className='header__list'>
            <li className='header__profile'>My profile</li>
            <li className='header__sign'>Sign up</li>
            <li className='header__login'>Log in</li>
        </ul>
    </nav>
  )
}

export default Navbar