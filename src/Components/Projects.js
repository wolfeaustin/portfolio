import React from "react";
import Project from "./Project";
import "../Styling.css";
import dna from "../dnaPic.png";
import supersonic from "../supersonic.png";
import portfolio from "../portfolioSite.png";
import origami from "../origamiPic.png";

const Projects = props => {
  return (
    <div>
      <div class="project-header">Projects</div>
      <div class="project-row">
        <div class="project-col-1">
          <Project
            image={dna}
            githubPath="https://denimgenes.herokuapp.com/"
            name="DNA Parser"
            description="An application that takes a raw DNA file and transforms it into meaningful information"
          />
        </div>
        <div class="project-col-2">
          <Project
            image={supersonic}
            githubPath="https://github.com/wolfeaustin/boomSupersonic"
            name="Supersonic Flight Time"
            description="Calculates the flight time of supersonic aircraft compared to subsonic airliners"
          />
        </div>
      </div>
      <div class="project-row">
        <div class="project-col-1">
          <Project
            image={portfolio}
            githubPath="https://github.com/wolfeaustin/portfolio"
            name="Portfolio Site"
            description="Interested in how I made this site? Click on the image to check out the GitHub"
          />
        </div>
        <div class="project-col-2">
          <Project
            image={origami}
            githubPath="https://github.com/wolfeaustin/origamiTime"
            name="Origami Time"
            description="A site for Origami enthusiasts to enjoy both Traditional and User submitted models"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
