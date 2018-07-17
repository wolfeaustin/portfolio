import React from "react";
import sample from "../sample_genome.txt";

const Project = props => {
  return (
    <div>
      <a target="_blank" href={props.githubPath}>
        <img class="proj-image" src={props.image} />
      </a>
      <div class="project-name">{props.name}</div>
      <div class="project-description">{props.description}</div>
      {props.name == "DNA Parser" && (
        <a href={sample} download>
          <button type="button">Download Sample DNA file</button>
        </a>
      )}
    </div>
  );
};

export default Project;
