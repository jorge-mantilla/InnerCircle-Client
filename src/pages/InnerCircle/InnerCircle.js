import React from "react";
import "./InnerCircle.scss";
import users from "../../data/users.json";

console.log(users);
const InnerCircle = () => {
  return (
    <section className="ic"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "2%",
        // width:"200px"
        // padding: "0 3%"
      }}
      >
      {users.map((user) => {
        return (
          <div
            key={user.id}
          >
            <div
              style={{
                height: "160px",
                width: "160px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            >
              <p>{`${user.email}`}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InnerCircle;
