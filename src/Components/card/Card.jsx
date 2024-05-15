import React from "react";
import { DateConverter } from "../DateConverter";
import "./card.css";

const Card = ({ data, onLearnMore }) => {
  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={data.thumbnail?.small} alt="Thumbnail" />
        <div className="dot">
          <div className="dot-one"></div>
          <div className="dot-two"></div>
        </div>
        <div className="overlay-div">
          <span className="learn-more" onClick={() => onLearnMore()}>
            Learn More
          </span>
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title" onClick={() => onLearnMore()}>
          {data.title}
        </h2>
        <p className="card-text" onClick={() => onLearnMore()}>
          {data.content}
        </p>
        <div className="card-footer">
          <div className="author-info" onClick={() => onLearnMore()}>
            <span>{data.author?.name}-</span>
            <span>{data.author?.role}</span>
          </div>
          <span className="author-info">{DateConverter(data.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
