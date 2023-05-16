import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthState";
import { getSingleUserByEmail } from "../../context/auth";
import "./Register.scss";

const initialValues = {
  user_name: "",
  email: "",
};

const Login = ({ handleClose, users, loggedUser }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const usersEmail = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(" possible current User?:", values);
  console.log("this is the current user:", currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailToSet = await getSingleUserByEmail(values.email);
    setCurrentUser(emailToSet);
    navigate(`/profile/${values.email}`);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Check if email is valid
  //   // const isValid = users.some((user) => user.email === values.email);
  //   // setIsEmailValid(isValid);
  //   // if (isValid) {
    
  return (
    <article className="register login">
      <button className="btn-x" onClick={handleClose}>
        X
      </button>
      <h2 className="register__header">Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
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
          name="email"
          value={values.email}
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
        />

        <motion.button
          className="btn"
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 1.4 }}
          type="submit"
        >
          Log in
        </motion.button>
      </form>
    </article>
  );
};

export default Login;
