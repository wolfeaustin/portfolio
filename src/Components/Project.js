import React from "react";

const Project = props => {
  return (
    <div>
      <img class="proj-image" src={props.image} />
      <div class="project-name">{props.name}</div>
      <div class="project-description">{props.description}</div>
    </div>
  );
};

export default Project;
