import React from "react";
import "./InnerCircle.scss";
import users from "../../data/users.json";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import items from "../../data/items";
// import guy from "../../assets/Images/guy .jpeg"
import blackgown from "../../assets/Images/Items/black gown.jpeg"
import pressure from "../../assets/Images/Items/pressurewasher2020-2048-0698.jpg"
import paddle from "../../assets/Images/Items/paddleboard.webp"
import snowboard from "../../assets/Images/Items/snowboard-essentials-Photos-Jende-1-1.jpg"


const InnerCircle = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Navbar />
      <section className="ic">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className="ic__image-box">
                <img src="" alt="avatar" />
              </div>
              <div className="ic__email-box">
                <p className="ic__email">{`${user.email}`}</p>
              </div>
            </div>
          );
        })}
      </section>
      <article className="items">
        <h1>Email</h1>
        <Carousel responsive={responsive}>
          <div className="items__card">
            <img className="items__image" src={blackgown} alt="guy" />
            <h2>Sports sneaker</h2>
            <p>$50</p>
            <p>description</p>
            <button>Accept</button>
          </div>
          <div className="itemcard">
            <img className="items__image" src={pressure} alt="guy" />
            <h2>Sports sneaker</h2>
            <p>$50</p>
            <p>description</p>
            <button>Accept</button>
          </div>
          <div className="itemcard">
            <img className="items__image" src={paddle} alt="guy" />
            <h2>Sports sneaker</h2>
            <p>$50</p>
            <p>description</p>
            <button>Accept</button>
          </div>
          <div className="itemcard">
            <img  className="items__image" src={snowboard} alt="guy" />
            <h2>Sports sneaker</h2>
            <p>$50</p>
            <p>description</p>
            <button>Accept</button>
          </div>
        </Carousel>
        ;
        {/* <Carousel responsive={responsive}>
          {items.map((item) => {
            return (
              <div>`${item.image}`</div>
            )
          })}
      
        </Carousel> */}
      </article>
    </>
  );
};

export default InnerCircle;
