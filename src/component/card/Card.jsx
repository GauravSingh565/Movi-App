import React from "react";
import "./card.css";
const image = "https://image.tmdb.org/t/p/w1280";

const setColor = (rating) => {
  if (rating >= 8) {
    return "green";
  } else if (rating >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Card = (props) => {
  return (
    <div className="cardDiv">
      <div className="imgDiv">
        <img
          src={
            props.img
              ? image + props.img
              : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          alt="movieImg"
        />
      </div>
      <div className="overView">
        <h3>OverView 😃</h3>
        <p>
          {props.overview
            ? props.overview
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio blanditiis assumenda optio eum omnis libero harum possimus similique, nisi architecto laborum necessitatibus voluptatibus iusto eveniet officiis distinctio expedita aliquam!"}
        </p>
      </div>
      <div className="details">
        <h3 className="title">{props.title}</h3>
        <p className={`rating ${setColor(props.rating)}`}>{props.rating}</p>
      </div>
    </div>
  );
};

export default Card;
