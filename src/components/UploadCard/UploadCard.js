import React from 'react'
import "./UploadCard.scss"

const UploadCard = () => {
  return (
    <div className='upload'>
      <h1>Upload Item</h1>
      <div className='upload__image-box'>
      <img className='upload__image' src='#' alt='item'/>
      <img className='upload__image' src='#' alt='item'/>
      <img className='upload__image' src='#' alt='item'/>
      <img className='upload__image' src='#' alt='item'/>
      </div>
      <button>Upload Picture</button>
      <form className='upload__form'>
        <input name='' type='text' placeholder='title'/>
        <input name='' type='text' placeholder='description'/>
        <input name='' type='text' placeholder='price per week'/>
        <input name='' type='text' placeholder=''/>
      </form>
        <button>Submit</button>

      </div>
  )
}

export default UploadCard