import React from 'react'
import "./UploadCard.scss"

const UploadCard = () => {
  return (
    <div className='upload'>
      <h1>Upload Item</h1>
      <div className='upload__image-box'>
      <img className='upload__image' src='#' alt='item'/>
      </div>
      <button className='btn'>Upload Picture</button>
      <form className='upload__form'>
        <input className='upload__input' name='' type='text' placeholder='title'/>
        <input className='upload__input' name='' type='text' placeholder='description'/>
        <input className='upload__input' name='' type='text' placeholder='size'/>
        <input className='upload__input' name='' type='text' placeholder='price'/>
      </form>
        <button className='btn'>Submit</button>

      </div>
  )
}

export default UploadCard