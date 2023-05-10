import React from 'react'
import "./CalendarPage.scss"
import calendar from "../../assets/Images/calendar.jpeg"

const CalendarPage = () => {
  return (
    <article className='deal'>
    <div>CalendarPage</div>
    <img src={calendar} alt='calendar'/>
    <p>Price Slider</p>
    <p>Send Notification Email</p>
    <button className='btn'>Submit</button>

    </ article>
  )
}

export default CalendarPage