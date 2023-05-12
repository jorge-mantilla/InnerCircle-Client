import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import InnerCircle from '../pages/InnerCircle/InnerCircle';
import ItemCarousel from '../pages/ItemCarousel/ItemCarousel';

const AnimatedRoutes = () => {
  const location = useLocation();
  const [users, setUsers] = useState([])
  const [userItems, setUserItems] = useState([])
  console.log(users)

  useEffect(() => {
      axios.get(`http://localhost:5051/users`)
      .then((response) => {
          setUsers(response.data);
          console.log()
      })
  }, []);

    useEffect(() => {
    axios.get(`http://localhost:5051/items`).then((response) => {
      setUserItems(response.data)
          console.log(response.data)
    })
}, []);

if (userItems === null) {
  return <div>Loading!!...</div>
}

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={ <Home /> } />
    <Route path="/profile" element={ <Profile /> } />
    <Route path="/circle" element={ <InnerCircle users={users} /> } />
    <Route path="/circle/:userId" element={ <ItemCarousel userItems={userItems}/> } />

    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes