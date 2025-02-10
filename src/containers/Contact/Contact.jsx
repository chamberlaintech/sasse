import React from "react";
import "./Contact.css";
import { contacts } from "../../constants/data";
import ContactCard from "../../components/ContactCard/ContactCard";
import lipstick2 from "../../assets/lipstick2.jpg";

const Contact = () => {
  return (
    <div className="contact section-padding flex-center" id="contact">
      <div className="contact-content">
        <div className="contact-text">
          <p className="subheading">Let’s Connect</p>
          <h2 className="h2-text">We're Here to Help!</h2>
          <p className="p-text">
            Whether you're curious about Sassé, need assistance, or just want to
            say hello, feel free to get in touch with us. We’d love to hear from
            you!
          </p>
        </div>
        <div className="contact-cards">
          {contacts.map((contact, index) => {
            return (
              <ContactCard
                key={index}
                icon={contact.icon}
                title={contact.title}
                text={contact.text}
                button={contact.button}
              />
            );
          })}
        </div>
      </div>
      <div className="contact-image flex-center">
        <img src={lipstick2} alt="contact image" />
      </div>
    </div>
  );
};

export default Contact;
