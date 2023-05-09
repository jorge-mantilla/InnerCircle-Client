import React from 'react'
import Logo from '../../assets/Images/Inner circle-2.png'
import './IndustryNav.scss'
import { motion } from 'framer-motion'


const IndustryNav = () => {

    return (
      <nav className='header'>
          <motion.ul className='header__list' animate={{
            x:1450,
            opacity: 1
          }}
          initial={{
            opacity:0.1
          }}
          transition={{
            type:"spring",
            stiffness: 100
          }}
          >
              <li className='header__profile'>My profile</li>
              <li className='header__sign'>Sign up</li>
              <li className='header__login'>Log in</li>
          </motion.ul>

          <motion.img className='header__logo' src={Logo} alt='logo'
            animate={{
              scale:[1,1.4,1.4,1.4,1],
              borderRadius: ['20%',"20%","50%","50%","20%"],
              rotate: [0, 0, 360, 360, 0]
            }}
            transition={{
              duration: 3
            }} />

            <motion.h3 className='header__hero' animate={{
            x:-1550,
            opacity: 1
          }}
          initial={{
            opacity:0.1
          }}
          transition={{
            type:"spring",
            stiffness: 100
          }}
          >Inner Circle
          </motion.h3>
      </nav>
    )
  }
  
  export default IndustryNav;