import React from "react";
import arrow from "../arrow.png";

class LandingPage extends React.Component {
  constructor() {
    super();
  }
  handleArrowClick = () => {
    window.scrollTo(0, 780);
  };
  render() {
    return (
      <div>
        <div class="landing-page">
          <div class="greeting-container">
            <div class="greeting-text-large">Hi, I'm Austin.</div>
            <div class="greeting-text-small">Let me show you around.</div>
            <div class="make-larger">
              <img
                onClick={this.handleArrowClick}
                class="down-arrow"
                src={arrow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
