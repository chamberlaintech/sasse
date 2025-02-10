import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta section-padding" id="get-started">
      <div className="cta-box flex-center">
        <h3 className="h3-text">Your Beauty Journey Starts Here</h3>
        <p className="p-text">
          Be the first to hear about our latest launches and get special
          discounts
        </p>
        <button className="tertiary-button">get started</button>
      </div>
    </div>
  );
};

export default CTA;
