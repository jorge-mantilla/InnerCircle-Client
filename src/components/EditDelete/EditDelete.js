import React from "react";
import axios from "axios";
import "./EditDelete.scss";

const EditDelete = ({ handleHideDelete, itemId }) => {
  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5051/items/${itemId}`
      );
      alert("Item deleted successfully");
      console.log(response.data); // Optional: Log the response data
      // Handle success, e.g., show a success message or update the item list
    } catch (error) {
      console.error(`Error deleting item ${itemId}:`, error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="editdelete">
      <p className="editdelete__text">
        Are you sure you want to delete this item?
      </p>

      <button
        className="btn"
        onClick={() => {
          handleDeleteItem(itemId);
          handleHideDelete();
        }}
      >
        Confirm
      </button>
      <button
        className="btn"
        onClick={() => {
          handleHideDelete();
        }}
      >
        Close
      </button>
    </div>
  );
};

export default EditDelete;
