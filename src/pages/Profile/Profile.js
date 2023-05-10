import React from "react";
import "./Profile.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Navbar from "../../components/Navbar/Navbar";
import UploadCard from "../../components/UploadCard/UploadCard";
// import AddFriend from "../../components/AddFriend/AddFriend";

const Profile = () => {
  return (
    <section className="profile">
      <Navbar />
      <ProfileCard />
      <UploadCard />
      {/* <AddFriend /> */}
    </section>
  );
};

export default Profile;
