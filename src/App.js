import React from 'react'
import "./App.css";
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