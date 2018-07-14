import React from "react";

const Project = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
    </div>
  );
};

export default Project;
