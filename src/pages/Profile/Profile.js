import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthState";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NavbarTwo from "../../components/NavbarTwo/NavbarTwo";
import "./Profile.scss";

const Profile = ({ users }) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  return (
    <section className="profile" >
      <NavbarTwo />
      {currentUser && <ProfileCard users={users} />}
    </section>
  );
};

export default Profile;
