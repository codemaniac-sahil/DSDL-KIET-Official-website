import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.imageUrl} alt={props.alt} />
      </div>
      <div className="card-text">
        <div className="card-text-heading">
          <h1>{props.heading}</h1>
        </div>
        <div className="card-text-text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
