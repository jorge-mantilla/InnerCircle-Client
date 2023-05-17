import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import NavbarTwo from "../../components/NavbarTwo/NavbarTwo";
import "./InnerCircle.scss";

const InnerCircle = ({ users }) => {
  const [userItems, setUserItems] = useState([]);
  const [imageClicked, setImageClicked] = useState(false);
  const { userId } = useParams();

  const handleUserClick = (userId) => {
    window.location.href = `/circle/${userId}`;
    setImageClicked(true);
  };

  useEffect(() => {
    if (imageClicked) {
      axios.get(`http://localhost:5051/users/${userId}`).then((response) => {
        setUserItems(response.data);
      });
    }
  }, [userId, imageClicked]);

  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <NavbarTwo />

      <div className="ic">
        {users.map((user) => (
          <div className="ic__container" key={user.id}>
            {/* <p>{}</p> */}
            <p className="ic__username">{user.user_name}</p>
            <div className="ic__image-box">
              <div className="ic__image-content">
                <Link to="/circle/:userId">
                  {user.image ? (
                    <img
                      className="ic__image"
                      src={user.image}
                      alt="heads"
                      onClick={() => handleUserClick(user.id)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="items__default"
                      icon={faCircleUser}
                      size="lg"
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
};

export default InnerCircle;
