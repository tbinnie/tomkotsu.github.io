import React from "react";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Contact = (props) => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contactBtns">
        <button>
          <img src={emailIcon} className="contact-btn" />
        </button>
        <a
          href="https://www.linkedin.com/in/tom-binnie/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button>
            <img src={linkedinIcon} className="contact-btn" />
          </button>
        </a>
        <button>
          <img src={cvIcon} className="contact-btn" />
        </button>
        <a
          href="https://github.com/tomkotsu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button>
            <img src={githubIcon} className="contact-btn" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
