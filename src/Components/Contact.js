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
          <img class="icon" src={github} />
          <img class="icon" src={linkedin} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
