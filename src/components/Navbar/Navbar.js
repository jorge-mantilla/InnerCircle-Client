import React from 'react'

const Navbar = () => {

  return (
    <nav className='header'>
        <div className='header__logo'>My logo</div>
        <div className='header__ hero'>Hero Nav</div>
        <ul className='header__list'>
            <li className='header__profile'>My profile</li>
            <li className='header__sign'>Sign up</li>
            <li className='header__login'>Log in</li>
        </ul>
    </nav>
  )
}

export default Navbar