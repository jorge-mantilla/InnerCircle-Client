import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthState";
import "./Profile.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NavbarTwo from "../../components/NavbarTwo/NavbarTwo";

const Profile = ({ users, loggedUser }) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

console.log(currentUser)
  // useEffect(() => {
  //   console.log("check auth:", currentUser )
  // }, [currentUser])
  


  return (
    <motion.section className="profile" initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <NavbarTwo />
      <ProfileCard users={users} loggedUser={loggedUser}  />
    </motion.section>
  );
};

export default Profile;
