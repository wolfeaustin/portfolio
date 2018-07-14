import React from "react";
import Project from "./Project";
import "../Styling.css";

const Projects = props => {
  return (
    <div class="container">
      <div class="proj1">
        <Project
          name="DNA Parser"
          description="An application that takes a raw DNA file and transforms it into meaningful information"
        />
      </div>
      <div class="proj2">
        <Project
          name="Origami Time"
          description="A site for Origami Enthusiasts to share their models with the world"
        />
      </div>
      <div class="proj3">
        <Project
          name="Book-A-Tub"
          description="A place where users can find nearby pools or hot tubs to rent listed by other users"
        />
      </div>
      <div class="proj4">
        <Project
          name="Book-A-Tub"
          description="A place where users can find nearby pools or hot tubs to rent listed by other users"
        />
      </div>
    </div>
  );
};

export default Projects;
