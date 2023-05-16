import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ItemCarousel.scss";
import Checkout from "../Checkout/Checkout";

const ItemCarousel = ({ userItems }) => {
  const { userId } = useParams();
  const [userItemsToDisplay, setUserItemsToDisplay] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  //make state for items
  useEffect(() => {
    axios
      .get(`http://localhost:5051/users/${userId}/items`)
      .then((response) => {
        setUserItemsToDisplay(response.data);
      });
  }, [userId]);

  const handleTermsButtonClick = () => {
    setShowCheckout(true); // Show the checkout section
  };

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
        {userItemsToDisplay.map((item) => {
          return (
            <div className="items__card" key={item.id}>
              <img className="items__image" src={item.image} alt="item" />
              <div className="items__info-box">
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <div className="items__checkout">
                  {showCheckout && <Checkout />}
                </div>
                  <button className="btn" onClick={handleTermsButtonClick}>
                    Terms
                  </button>
                <Link to="/circle">
                  <button className="btn">Go Back</button>
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </article>
  );
};

export default ItemCarousel;
