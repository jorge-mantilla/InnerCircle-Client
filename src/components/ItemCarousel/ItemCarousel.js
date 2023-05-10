import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ItemCarousel.scss";
// import items from "../../data/items.json"
import users from "../../data/users.json"

const ItemCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <article className="items">
      <Carousel responsive={responsive}>
        {users.map((user, i)=>{
          console.log(user.items[i].image)
          return (
        <div className="items__card" key={user.items[i].id}>
          <img className="items__image" src={user.items[i].image} alt="item" />
          <div className="items__info-box">
          <h2>{user.items[i].title}</h2>
          <p>{user.items[i].price}</p>
          <p>{user.items[i].description}</p>
          <button className="btn">Terms</button>
          </div>
        </div>
          )
        })}
      </Carousel>
    </article>
  );
};

export default ItemCarousel;
