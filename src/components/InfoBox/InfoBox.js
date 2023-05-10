import React from "react";
import "./InfoBox.scss";

const InfoBox = () => {
  return (
    <article className="achieve">

      <div className="achieve__card">
        <div className="achieve__image-box">
          <p className="achieve__text">
            Name
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          <p className="achieve__text">
            Email
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          <p className="achieve__text">
            Circles
          </p>
        </div>
      </div>
      <div className="achieve__card">
        <div className="achieve__image-box">
          <input className="achieve__invite" placeholder="Invite to Circle"></input>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          <p className="achieve__text">
            My Items
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          <p className="achieve__text">
            Upload
          </p>
        </div>
      </div>
    </article>
  );
};

export default InfoBox;
