import React from "react";
import { motion } from "framer-motion"
import "./Profile.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Navbar from "../../components/Navbar/Navbar";
import UploadCard from "../../components/UploadCard/UploadCard";
// import AddFriend from "../../components/AddFriend/AddFriend";

const Profile = () => {
  return (
    <motion.section className="profile" initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <Navbar />
      <ProfileCard />
      <UploadCard />
      {/* <AddFriend /> */}
    </motion.section>
  );
};

export default Profile;
