import React from "react";
import "./Apply.css";
import lipstick3 from "../../assets/lipstick3.jpg";
import { applies } from "../../constants/data";
import ApplyCard from "../../components/ApplyCard/ApplyCard";

const Apply = () => {
  return (
    <div className="apply section-padding flex-center" id="apply">
      <div className="apply-image flex-center">
        <img src={lipstick3} alt="apply-image" />
      </div>
      <div className="apply-content">
        <div className="apply-text">
          <p className="subheading">Make the Most of Sassé</p>
          <h2 className="h2-text">How to apply</h2>
          <p className="p-text">
            Achieve flawless lips in just a few simple steps. Sassé is designed
            to be easy to apply, giving you bold, beautiful results every time
          </p>
        </div>
        <div className="apply-cards">
          {applies.map((apply, index) => {
            return (
              <ApplyCard key={index} title={apply.title} text={apply.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Apply;
