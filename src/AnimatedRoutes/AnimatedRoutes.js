import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import InnerCircle from '../pages/InnerCircle/InnerCircle';
import { AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={ <Home /> } />
    <Route path="/profile" element={ <Profile /> } />
    <Route path="/circle" element={ <InnerCircle /> } />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes