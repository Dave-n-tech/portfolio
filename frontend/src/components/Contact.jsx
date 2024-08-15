import React from "react";
import "./Contact.css";
import githubIcon from "../assets/Group 8.png";
import LinkedinIcon from "../assets/linkedin.png"

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
          <a href="https://github.com/isiboreromoselejason"><img src={githubIcon} alt="github-icon" className="icon-image" /></a>
          <a href="https://linkedin.com/in/isibor-eromosele"><img src={LinkedinIcon} alt="linkedin-icon" className="icon-image" /></a>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea id="message" name="message" cols="40" rows="10"></textarea>
          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
