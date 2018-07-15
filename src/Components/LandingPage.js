import React from "react";
import arrow from "../arrow.png";

class LandingPage extends React.Component {
  constructor() {
    super();
  }
  handleArrowClick = event => {
    // console.log(event);
    window.scrollTo(0, 780);
  };
  render() {
    return (
      <div>
        <div class="landing-page">
          <div class="greeting-container">
            <div class="greeting-text-large">Hi, I'm Austin.</div>
            <div class="greeting-text-small">Let me show you around.</div>
            <img
              onClick={this.handleArrowClick}
              class="down-arrow"
              src={arrow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
