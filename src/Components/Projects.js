import React from "react";
import Project from "./Project";
import "../Styling.css";
import dna from "../dnaPic.png";
import boom from "../boomPic.png";
import tub from "../tubPic.png";
import origami from "../origamiPic.png";

const Projects = props => {
  return (
    <div>
      <div class="project-header">Projects</div>
      <div class="project-row">
        <div class="project-col-1">
          <Project
            image={dna}
            name="DNA Parser"
            description="An application that takes a raw DNA file and transforms it into meaningful information"
          />
        </div>
        <div class="project-col-2">
          <Project
            image={boom}
            name="Boom Supersonic"
            description="An application that takes a raw DNA file and transforms it into meaningful information"
          />
        </div>
      </div>
      <div class="project-row">
        <div class="project-col-1">
          <Project
            image={tub}
            name="Book-A-Tub"
            description="An application that takes a raw DNA file and transforms it into meaningful information"
          />
        </div>
        <div class="project-col-2">
          <Project
            image={origami}
            name="Origami Time"
            description="An application that takes a raw DNA file and transforms it into meaningful information"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
