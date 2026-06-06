import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} alt="places" />
      </div>

      <div className="overlay">
        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <div className="badges">
          <span>Popular</span>
          <span>{props.nights}</span>
        </div>

        <button>Reserve now</button>
      </div>
    </div>
  );
};

export default card;
