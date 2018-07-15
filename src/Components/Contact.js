import React from "react";
import github from "../github.svg";
import linkedin from "../linkedin.svg";

const Contact = props => {
  return (
    <div class="contact-page">
      <div class="contact-text">
        'Fan Mail Only'
        <div class="email">wolfeaa@goldmail.etsu.edu</div>
        <div class="icons">
          <a target="_blank" href="https://github.com/wolfeaustin">
            <img class="icon" src={github} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/austin-wolfe-b46171b4/"
          >
            <img class="icon" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
