import React from "react";
import "./Hero.scss";
import Heroimage from "../../assets/Images/Inner circle-1.png";
import Typewriter from "typewriter-effect";
const Hero = () => {

  
  return (
    <section className="hero">
      <div className="hero__image-box">
        <img className="hero__image" src={Heroimage} alt="hero logo" />
      </div>
      <div className="hero__card">
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
          
          .typeString("Create")
          .pauseFor(400)
          .deleteAll()
          .start()
        }}
        />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString("Or Join")
          .pauseFor(800)
          .deleteAll()
          .start()
        }}
        /> */}
      </div>
    </section>
  );
};

export default Hero;
