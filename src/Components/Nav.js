import React from "react";
import "../Styling.css";

class Nav extends React.Component {
  constructor() {
    super();
  }

  handleProjectClick() {
    window.scrollTo(0, 780);
  }
  handleAboutClick() {
    window.scrollTo(0, 1780);
  }
  handleContactClick() {
    window.scrollTo(0, 2500);
  }

  render() {
    return (
      <div class="nav">
        <button onClick={this.handleProjectClick} class="nav-button">
          Projects
        </button>
        <button onClick={this.handleAboutClick} class="nav-button">
          About
        </button>
        <button onClick={this.handleContactClick} class="nav-button">
          Contact
        </button>
      </div>
    );
  }
}

export default Nav;
