import React from "react";
import CountUp from "react-countup";
import lipstick from "../../assets/lipstick.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero section-padding" id="home">
      <div className="hero-text">
        <h1 className="h1-text">Unleash Your Sassé</h1>
        <p className="p-text">
          The lipstick that speaks louder than words. Bold colors, luxurious
          texture, and a confidence boost in every swipe.
        </p>
        <div className="hero-text-count">
          <div className="counter-l">
            <span className="h4-text">
              <CountUp end={100} duration={4} />
              <span className="addition"> +</span>
            </span>
            <span className="h4-text">shades</span>
          </div>
          <div className="counter-r">
            <span className="h4-text">
              <CountUp end={5000000} duration={4} />
              <span className="addition"> +</span>
            </span>
            <span className="h4-text">happy customers</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={lipstick} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
