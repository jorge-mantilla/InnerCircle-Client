import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ItemCarousel.scss";
import Checkout from "../Checkout/Checkout";
import Modal from "../../components/Modal/Modal";

const ItemCarousel = () => {
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
  const handleHideCheckout = () => {
    setShowCheckout(false);
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
      <div className="items__checkout">
        {showCheckout && (
          <Modal>
            <Checkout handleHideCheckout={handleHideCheckout} />
          </Modal>
        )}
      </div>
      <Carousel responsive={responsive}>
        {userItemsToDisplay.map((item) => {
          return (
            <div className="items__card" key={item.id}>
              <div className="items__content">
                <div className="items__image-box">
                  {item.image ? (
                    <motion.img
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 1.2 }}
                      className="items__image"
                      src={item.image}
                      alt="item"
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="items__default"
                      icon={faCircleUser}
                      size="lg"
                    />
                  )}
                </div>
              </div>
              <div className="items__info-box">
                <h2 className="items__title">{item.title}</h2>
                <p className="items__price">{item.price}</p>
                <p className="items__description">{item.description}</p>
                <div className="items__button-box">
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.2 }}
                    className="btn"
                    onClick={handleTermsButtonClick}
                  >
                    Select
                  </motion.button>
                  <Link to="/circle">
                    <motion.button
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 1.2 }}
                      className="btn"
                    >
                      Back
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </article>
  );
};

export default ItemCarousel;
