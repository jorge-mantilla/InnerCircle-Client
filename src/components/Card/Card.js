import React from 'react'
import Guy from '../../assets/Images/guy .jpeg'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>My Card
    <img className='card__image' src={Guy} alt='profile' />
    <h4>Name</h4>
    <p>Contact</p>
    <p>Inner Circles</p>
    <p>Upload</p>
    <p>info</p>
    
    </div>
  )
}

export default Card