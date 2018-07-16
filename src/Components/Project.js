import React from "react";

const Project = props => {
  return (
    <div>
      <a target="_blank" href={props.githubPath}>
        <img class="proj-image" src={props.image} />
      </a>
      <div class="project-name">{props.name}</div>
      <div class="project-description">{props.description}</div>
    </div>
  );
};

export default Project;
