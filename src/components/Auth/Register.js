import React, { useState } from "react";
import { motion } from "framer-motion";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import "./Register.scss";


const initialValues = {
  id: uuidv4(),
  user_name: "",
  password: "",
  email: "",
  image: "",
};

const Register = ({ setSignInType, handleClose }) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send POST request to server
    try {
      const response = await axios.post("http://localhost:5051/users", values);
      setValues(initialValues);

      if (response.status !== 201) {
        throw new Error("Failed to register user.");
      }
      window.alert('User has been registered successfully!');

      setSignInType("login")
      // Close the registration modal
      // handleClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="register">
      <button className="btn-x" onClick={handleClose}>
        X
      </button>
      <p className="register__top-text">Register</p>
      <h2 className="register__header">Join Inner Cicle!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <motion.input
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          className="register__input"
          name="user_name"
          value={values.user_name}
          placeholder="User Name"
          onChange={handleInputChange}
        />
        <motion.input
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          className="register__input"
          name="password"
          value={values.password}
          placeholder="password"
          type="password"
          onChange={handleInputChange}
        />
        <motion.input
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          className="register__input"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <motion.input
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          className="register__input"
          name="image"
          value={values.image}
          placeholder="Avatar Image Url"
          type="text"
          onChange={handleInputChange}
        />

        <motion.button
          className="btn"
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </article>
  );
};

export default Register;
