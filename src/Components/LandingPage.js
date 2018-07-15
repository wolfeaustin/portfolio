import React from "react";
import arrow from "../arrow.png";

const LandingPage = props => {
  return (
    <div>
      <div class="landing-page">
        <div class="greeting-container">
          <div class="greeting-text-large">Hi, I'm Austin.</div>
          <div class="greeting-text-small">Let me show you around.</div>
          <img class="down-arrow" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
