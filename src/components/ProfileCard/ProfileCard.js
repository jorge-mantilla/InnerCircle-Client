import React, { useState, useContext} from "react";
import { AuthContext } from "../../context/AuthState";
import UploadCard from "../UploadCard/UploadCard.js"
import "./ProfileCard.scss";

const ProfileCard = ({ users, loggedUser }) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState(null);
  // const [email, setEmail] = useState('');

  const handleAddFriendSubmit = (event) => {
    event.preventDefault();

  //   const data = {
  //     email
  //   };
    
  //   axios
  //     .post("http://localhost:5051/email", data)
  //     .then((response) => {
  //       // Handle success response
  //       console.log("Email sent successfully:", response.data);
  //       setEmail(""); // Reset the email input field
  //     })
  //     .catch((error) => {
  //       // Handle error response
  //       console.error("Error sending email:", error);
  //     });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.email === searchTerm);
    if (user) {
      setUserId(user.id);
    }
  };

  return (
    <article className="card__container">

      {/* <h1> Enter your email!</h1>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <input
            className="card__input"
            name="user_email"
            placeholder="Enter email"
            value={ searchTerm }
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Log In
        </button>
      </form> */}

      {/* <h1> Invite Someone!</h1>
      <form onSubmit={handleAddFriendSubmit}>
        <div>
          <input
            className="card__input"
            name="sendInvite"
            placeholder="Send Email Invite"
            value={ email }
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Send Invite
        </button>
      </form> */}

      <div className="card">
        <div className="card__image-box">
          <div className="card__image-content">
          
            <img
              className="card__image"
              src={currentUser.image}
              alt="profile"
            />
          
          </div>
        </div>
        <div className="card">
          <div className="card__box">
              <p className="card__text">
              {currentUser.user_name}
              </p>
          </div>
        </div>
        <div className="card">
          <div className="card__box">
              <p className="card__text">
                {currentUser.email}
              </p>
          </div>
        </div>
      </div>
      <UploadCard users={users} userId={userId} />
    </article>
  );
};

export default ProfileCard;
