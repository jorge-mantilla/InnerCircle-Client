import React, { useEffect } from "react";
import "./Hero.scss";
import Heroimage from "../../assets/Images/Inner circle-1.png";

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    return() => {
        hiddenElements.forEach((el)=> observer.unobserve(el));
        observer.disconnect();
    };
},[]);

  
  return (
    <section className="hero">
      <div className="hero__image-box hidden">
        <img className="hero__image" src={Heroimage} alt="hero logo" />
      </div>
      <div className="hero__card hidden">
        <p className="hero__text">Stengthen your Circle</p>
        <br></br>
        <p className="hero__text">Borrow don't buy</p>
          <br></br>
        <p className="hero__text">Save</p>
      </div>
    </section>
  );
};

export default Hero;
