import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthState";
import { getSingleUserByEmail } from "../../context/auth";
import "./Register.scss";

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ handleClose }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const userId = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getSingleUserByEmail(values.email);
    if (user) {
      console.log(user);
      setCurrentUser(user);
      navigate(`/profile/${user.id}`);
    } else {
      console.log("User not found!");
    }
  };

  return (
    <article className="register login">
      <h2 className="register__header">Welcome Back!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <motion.input
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 1.2 }}
          className="register__input"
          name="email"
          value={values.email}
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
        />
        <motion.input
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 1.2 }}
          className="register__input"
          type="password"
          name="password"
          value={values.password}
          placeholder="password"
          onChange={handleInputChange}
        />
        <div className="register__button-box">

        <motion.button
          className="btn"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 1.2 }}
          type="submit"
          >
          Log in
        </motion.button>
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.2 }}
        className="btn"
        onClick={handleClose}
        >
        Close
      </motion.button>
        </div>
      </form>
    </article>
  );
};

export default Login;
