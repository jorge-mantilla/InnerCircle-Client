import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import items from "../../data/items";
// import guy from "../../assets/Images/guy .jpeg"
import blackgown from "../../assets/Images/Items/black gown.jpeg"
import pressure from "../../assets/Images/Items/pressurewasher2020-2048-0698.jpg"
import paddle from "../../assets/Images/Items/paddleboard.webp"
import snowboard from "../../assets/Images/Items/snowboard-essentials-Photos-Jende-1-1.jpg"
import "./ItemCarousel.scss";

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
      <h1>Email</h1>
      <Carousel responsive={responsive}>
        <div className="items__card">
          <img className="items__image" src={blackgown} alt="guy" />
          <h2>Sports sneaker</h2>
          <p>$50</p>
          <p>description</p>
          <button className="btn" >Accept</button>
        </div>
        <div className="itemcard">
          <img className="items__image" src={pressure} alt="guy" />
          <h2>Sports sneaker</h2>
          <p>$50</p>
          <p>description</p>
          <button className="btn" >Accept</button>
        </div>
        <div className="itemcard">
          <img className="items__image" src={paddle} alt="guy" />
          <h2>Sports sneaker</h2>
          <p>$50</p>
          <p>description</p>
          <button className="btn" >Accept</button>
        </div>
        <div className="itemcard">
          <img className="items__image" src={snowboard} alt="guy" />
          <h2>Sports sneaker</h2>
          <p>$50</p>
          <p>description</p>
          <button className="btn" >Accept</button>
        </div>
      </Carousel>
    </article>
  );
};

export default ItemCarousel;
