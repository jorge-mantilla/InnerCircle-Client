import React from 'react'
import "./App.css";
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import InnerCircle from './pages/InnerCircle/InnerCircle';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/profile" element={ <Profile /> } />
    <Route path="/circle" element={ <InnerCircle /> } />
    </Routes>
    </>
  )
}

export default App;