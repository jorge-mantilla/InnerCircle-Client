import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSkating } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import EditDelete from "../EditDelete/EditDelete";
import axios from "axios";
import "./UserItems.scss";

const UserItems = ({ userItemsToDisplay, handleAddItem, handleDeleteItem }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  //   const [showCheckout, setShowCheckout] = useState(false);

  const handleShowDelete = (itemId) => {
      console.log(itemId)
    setItemIdToDelete(itemId);
    setShowDelete(true);
  };
  const handleHideDelete = () => {
    setShowDelete(false);
  };

  console.log(userItemsToDisplay);
  console.log(handleShowDelete)
  console.log(showDelete)


  return (
    <article className="useritems">
      <h1 className="useritems__header">My Items</h1>
      {userItemsToDisplay.map((item) => {
        return (
          <div className="useritems__container" key={item.id}>
            {showDelete && (
              <div className="useritems__delete">
                <EditDelete
                  handleHideDelete={handleHideDelete}
                  itemId={itemIdToDelete}
                  handleDeleteItem={handleDeleteItem}
                />
              </div>
            )}
            <div className="useritems__content">
              <div className="useritems__info-box">
                <div className="useritems__image-edit-box">
                  <h2 className="useritems__title">{item.title}</h2>
                  <p className="useritems__price">{item.price}</p>
                  <div className="useritems__edit-box">
                    <FontAwesomeIcon
                      icon={faPen}
                      size="lg"
                      style={{ color: "#ffffff" }}
                    />
                    <FontAwesomeIcon
                       onClick={() => handleShowDelete(item.id)}
                      icon={faTrash}
                      size="lg"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
                <div className="useritems__image-div">
                  {item.image ? (
                    <img
                      className="useritems__image"
                      src={item.image}
                      alt="item"
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="useritems__default"
                      icon={faPersonSkating}
                      size="xl"
                      style={{ color: "#fafafa" }}
                    />
                  )}
                </div>
              </div>
              <div className="useritems__desc-box">
                <p className="useritems__description">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default UserItems;
