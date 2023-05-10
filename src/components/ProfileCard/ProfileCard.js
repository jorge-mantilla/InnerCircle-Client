import React from 'react'
// import Guy from '../../assets/Images/guy .jpeg'
import './ProfileCard.scss'
import InfoBox from '../InfoBox/InfoBox'

const Card = () => {
  return (
    <div className='card'>
    <div className='card__image-box'>
    {/* <img className='card__image' src={Guy} alt='profile' /> */}
    </div>
    <div className='card__info-box'>
      <InfoBox />
    </div>
    </div>
  )
}

export default Card