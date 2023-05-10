import React from 'react'
import "./App.css";
// import Home from "./pages/Home/Home"
// import Profile from "./pages/Profile/Profile"
// import InnerCircle from './pages/InnerCircle/InnerCircle';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';

const App = () => {
  return (
    <>
    <Router>
    <AnimatedRoutes />
    </Router>
    </>
  )
}

export default App;