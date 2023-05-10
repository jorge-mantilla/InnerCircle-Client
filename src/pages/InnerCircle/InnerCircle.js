import React from "react";
import "./InnerCircle.scss";
import users from "../../data/users.json";
import Navbar from "../../components/Navbar/Navbar";
import ItemCarousel from "../../components/ItemCarousel/ItemCarousel";
import CalendarPage from "../../components/CalendarPage/CalendarPage";


const InnerCircle = () => {
  return (
    <>
      <Navbar />
      <section className="ic">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className="ic__image-box">
                <img className="ic__image" src={user.image} alt="avatar" />
              </div>
              <div className="ic__email-box">
                <p className="ic__email">{`${user.email}`}</p>
              </div>
            </div>
          );
        })}
      </section>
      <ItemCarousel />
      <CalendarPage />
    </>
  );
};

export default InnerCircle;
