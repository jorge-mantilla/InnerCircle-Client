import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import InnerCircle from "../pages/InnerCircle/InnerCircle";
import ItemCarousel from "../pages/ItemCarousel/ItemCarousel";
import Checkout from "../pages/Checkout/Checkout";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5051/users`).then((response) => {
      setUsers(response.data);
    });
    axios.get(`http://localhost:5051/items`).then((response) => {
      setUserItems(response.data);
    });
  }, []);

  if (userItems === null) {
    return <div>Loading!!...</div>;
  }

  return (
    <AnimatePresence>
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home users={users} loggedUser={loggedUser}/>} />
        <Route path="/profile/:userId" element={<Profile users={users} userItems={userItems} />} />
        <Route path="/circle" element={<InnerCircle users={users} />} />
        <Route
          path="/circle/:userId"
          element={<ItemCarousel userItems={userItems} />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
