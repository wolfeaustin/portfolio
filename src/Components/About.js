import React from "react";
import pic from "../austin.svg";
import "../Styling.css";

const About = props => {
  return (
    <div class="about-page">
      <div class="about-col-one">
        <img class="profile-pic" src={pic} />
      </div>
      <div class="about-col-two">
        <div class="about-text">
          <div class="about-title">ABOUT AUSTIN</div>
          A front-end developer with a knack for adventure. When I'm not behind
          a computer screen, you can find me traversing the globe, watching Game
          of Thrones, or trying to track down some live country music.
        </div>
      </div>
    </div>
  );
};

export default About;
