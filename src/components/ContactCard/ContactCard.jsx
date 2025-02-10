import React from "react";
import "./ContactCard.css";

const ContactCard = ({ icon: Icon, title, text, button }) => {
  return (
    <div className="contact-card">
      <div className="contact-card-heading">
        <div className="heading-icon">
          <Icon fontSize={24} color="var(--pinkColor)" />
        </div>
        <div className="heading-text">
          <h5 className="h5-text">{title}</h5>
          <p className="p-text">{text}</p>
        </div>
      </div>
      <div className="contact-card-buttons flex-center">
        <button className="primary-button">{button}</button>
      </div>
    </div>
  );
};

export default ContactCard;
