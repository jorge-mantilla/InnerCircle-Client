import React from "react";
import "./InfoBox.scss";
// import talentIcon from "../../assets/icons/Talent icon.png";
// import timeIcon from "../../assets/icons/Time Assesment icon.png";
// import reportIcon from "../../assets/icons/Reporting and analytics icon.png";
// import compIcon from "../../assets/icons/Compliance icon.png";

const InfoBox = () => {
  return (
    <article className="achieve">
      {/* <h1 className="achieve__header"></h1> */}

      <div className="achieve__card">
        <div className="achieve__image-box">
          {/* <img src={""} alt="talent" className="achieve__image"></img> */}
          <p className="achieve__text">
            Allen Iverson
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          {/* <img src={""} alt="talent" className="achieve__image"></img> */}
          <p className="achieve__text">
            South Miami
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          {/* <img src={reportIcon} alt="talent" className="achieve__image"></img> */}
          <p className="achieve__text">
            Iverson@gmail.com
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          {/* <img src={compIcon} alt="talent" className="achieve__image"></img> */}
          <p className="achieve__text">
            Friends List
          </p>
        </div>
      </div>

      <div className="achieve__card">
        <div className="achieve__image-box">
          {/* <img src={talentIcon} alt="talent" className="achieve__image"></img> */}
          <p className="achieve__text">
            Upload
          </p>
        </div>
      </div>
    </article>
  );
};

export default InfoBox;
