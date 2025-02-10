import React from "react";
import "./Features.css";
import { features } from "../../constants/data";
import FeaturesCard from "../../components/FeaturesCard/FeaturesCard";

const Features = () => {
  return (
    <div className="features section-padding" id="features">
      <div className="features-heading">
        <p className="subheading">Why Sassé Stands Out</p>
        <h2 className="h2-text">Key Features</h2>
      </div>
      <div className="features-content">
        {features.map((feature, index) => {
          return (
            <FeaturesCard
              key={index}
              title={feature.title}
              text={feature.text}
            />
          );
        })}
      </div>
      <div className="features-buttons flex-center">
        <button className="primary-button">shop now</button>
        <button className="secondary-button">learn more</button>
      </div>
    </div>
  );
};

export default Features;
