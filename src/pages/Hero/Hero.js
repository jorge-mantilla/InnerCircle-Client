import React from 'react'
import './Hero.scss'
import Heroimage from '../../assets/Images/Inner circle-1.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__image-box'>
        <img className='hero__image' src={Heroimage} alt="hero logo" />
        </div>
        <div className='hero__card'>
            <h2>Welcome</h2>
            <p>Click here to get started</p>
        <button className='hero__start'>Get Started !</button>
        </div>
    </section>
  )
}

export default Hero