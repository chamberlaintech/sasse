import React from "react";
import "./FeaturesCard.css";

const FeaturesCard = ({ title, text }) => {
  return (
    <div className="features-card">
      <h5 className="h5-text">{title}</h5>
      <p className="p-text">{text}</p>
    </div>
  );
};

export default FeaturesCard;
