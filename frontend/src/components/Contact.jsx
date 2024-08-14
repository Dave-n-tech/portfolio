import React from "react";
import "./Contact.css";
import discordIcon from "../assets/Group 6.png";
import facebookIcon from "../assets/Group 7.png";
import githubIcon from "../assets/Group 8.png";
import InstagramIcon from "../assets/Group 9.png"

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <h1 className="contact-title title">Let’s Work together</h1>
        <p className="contact-paragraph">
          My name is Isibor Eromosele, currently a Humber College student who
          specializes in web design and Development. Fueled by my passion for
          crafting visually captivating and seamlessly functional websites.
        </p>
        <div className="icons">
          <img src={discordIcon} alt="discord-icon" className="icon-image" />
          <img src={facebookIcon} alt="facebook-icon" className="icon-image" />
          <img src={githubIcon} alt="github-icon" className="icon-image" />
          <img src={InstagramIcon} alt="instagram-icon" className="icon-image" />
        </div>
      </div>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea id="message" name="message" cols="40" rows="10"></textarea>
          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
