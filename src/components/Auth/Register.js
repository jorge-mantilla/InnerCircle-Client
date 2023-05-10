import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Register = ({ setSignInType, handleClose }) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <button onClick={handleClose}>X</button>
      <div>Register</div>
      <h2>Join Inner Cicle</h2>
      <input
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        name="password"
        value={values.password}
        placeholder="Password"
        type="password"
        onChange={handleInputChange}
      />
      <Link to="/profile"><button>Submit</button></Link>
      <p>
        Already have an Account?{" "}
        <span onClick={() => setSignInType("login")}>Sign in</span>
      </p>
    </>
  );
};

export default Register;
