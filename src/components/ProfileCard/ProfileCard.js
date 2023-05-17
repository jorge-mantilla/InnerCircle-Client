import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import UploadCard from "../UploadCard/UploadCard.js";
import UserItems from "../UserItems/UserItems";
import axios from "axios";
import "./ProfileCard.scss";

const ProfileCard = ({ users }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [userItemsToDisplay, setUserItemsToDisplay] = useState([]);
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5051/users/${userId}/items`
        );
        console.log(response.data);
        setUserItemsToDisplay(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
    fetchData();
  }, [userId]);

  const { removeCurrentUser } = useContext(AuthContext);

  const handleLogout = () => {
    removeCurrentUser();
    navigate("/"); // Replace '/login' with the desired redirect path
  };

  const handleAddItem = (newItem) => {
    setUserItemsToDisplay((prevItems) => [...prevItems, newItem]);
  };
  const handleUserItemAdd = (newItem) => {
    setUserItemsToDisplay((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5051/items/${itemId}`
      );
      console.log(response.data); // Optional: Log the response data
      // Handle success, e.g., show a success message or update the item list
      setUserItemsToDisplay((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error(`Error deleting item ${itemId}:`, error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <article className="card__container">
      <div className="card">
        <div className="card__image-box">
          <div className="card__image-content">
            {currentUser && currentUser.image ? (
              <img
                className="card__image"
                src={currentUser.image}
                alt="profile"
              />
            ) : (
              <FontAwesomeIcon
                className="card__default"
                icon={faCircleUser}
                size="lg"
              />
            )}
          </div>
        </div>
        <div className="card">
          <div className="card__box">
            <p className="card__text">{currentUser.user_name}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
        <div className="card">
          <div className="card__box">
            <p className="card__text">{currentUser.email}</p>
          </div>
        </div>
        <UserItems
          userItemsToDisplay={userItemsToDisplay}
          handleAddItem={handleAddItem}
          handleDeleteItem={handleDeleteItem}
        />

        <input
          className="card__input"
          name="add_user"
          type="text"
          placeholder="Join Cicle"
        />
      </div>
      <UploadCard
        users={users}
        userId={userId}
        handleUserItemAdd={handleUserItemAdd}
      />
    </article>
  );
};

export default ProfileCard;
