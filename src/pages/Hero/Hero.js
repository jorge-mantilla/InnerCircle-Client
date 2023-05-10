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
      <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString("Create")
          .pauseFor(400)
          .deleteAll()
          .typeString("A Circle")
          .pauseFor(1000)
          .deleteAll()
          
          .typeString("Or Borrower")
          .pauseFor(400)
          .changeDeleteSpeed(0.1)
          .deleteAll()
          .typeString("")
          .pauseFor(1200)
          .changeDeleteSpeed(0.1)
          .deleteAll()
          .typeString("Way")
          .pauseFor(400)
          .deleteAll()
          .start();
        }}
        />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString("Or Join")
          .pauseFor(800)
          .deleteAll()
          .typeString("")
          .pauseFor(1000)
          .changeDeleteSpeed(0.1)
          .deleteAll()
          .typeString("Lender")
          .pauseFor(400)
          .deleteAll()
          .typeString("")
          .pauseFor(800)
          .changeDeleteSpeed(0.1)
          .deleteAll()
          .typeString("Buying is not the")
          .pauseFor(1000)
          .changeDeleteSpeed(0.1)
          .deleteAll()
          .start();
        }}
        />
      </div>
    </section>
  );
};

export default Hero;
