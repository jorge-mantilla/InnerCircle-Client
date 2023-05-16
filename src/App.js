import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";
import  { AuthProvider }from "./context/AuthState";



const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <AnimatedRoutes />
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
