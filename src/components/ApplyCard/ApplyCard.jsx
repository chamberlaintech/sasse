import React from "react";
import "./ApplyCard.css";

const ApplyCard = ({ title, text }) => {
  return (
    <div className="apply-card">
      <h5 className="h5-text">{title}</h5>
      <p className="p-text">{text}</p>
    </div>
  );
};

export default ApplyCard;
