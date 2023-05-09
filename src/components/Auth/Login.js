import React, { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ handleClose }) => {
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
      <h2>Welcome Back!</h2>
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
      <button>Log in</button>
    </>
  );
};

export default Login;
