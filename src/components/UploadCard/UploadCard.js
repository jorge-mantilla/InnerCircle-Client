import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthState";
import { motion } from "framer-motion"
import axios from 'axios';
import "./UploadCard.scss";

const UploadCard = ({ userId, handleUserItemAdd }) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      user_id: userId,
      title: title,
      price: price,
      description: description,
      image: imageUrl
    };

    try {
      const response = await axios.post('http://localhost:5051/items', newItem);
      const { id: itemId } = response.data; // Extract the generated item ID from the response
      console.log('Item uploaded:', response.data);
      handleUserItemAdd({ ...newItem, id: itemId }); // Pass the item with generated ID to the handler
      alert('Item Uploaded');
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error uploading item:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className='upload'>
      <h1 className='upload__header'>Upload Item</h1>
      <p className='upload__user'>{currentUser.user_name}</p>
      <form className='upload__form' onSubmit={handleSubmit}>
        <motion.input
         whileHover={{ scale: 1.4 }}
         whileTap={{ scale: 1.2 }}
          className='upload__input'
          name='title'
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <motion.input
         whileHover={{ scale: 1.4 }}
         whileTap={{ scale: 1.2 }}
          className='upload__input'
          name='price'
          type='text'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <motion.input
         whileHover={{ scale: 1.4 }}
         whileTap={{ scale: 1.2 }}
          className='upload__input'
          name='description'
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
          {imageUrl && (
            <div className='upload__image-preview'>
              <img className='upload__image-view' src={imageUrl} alt='Image Preview' />
            </div>
          )}
      <motion.input
       whileHover={{ scale: 1.4 }}
       whileTap={{ scale: 1.2 }}
          className='upload__input'
          name='image'
          type='text'
          placeholder='Image URL'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <motion.button  whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.2 }} className='btn' type='submit'>Submit</motion.button>
      </form>
    </div>
  );
};

export default UploadCard;
