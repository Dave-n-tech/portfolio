import React from "react";
import "./projectcard.css";

export const ProjectCard = ({ name, url, thumbnail }) => {
  return (
    <div className="card">
      <img className="card-image" src={thumbnail} alt={name} />
      <h1 className="card-title title">{name}</h1>

      <p className="card-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tenetur
        laboriosam assumenda totam, facilis repellendus, aliquid placeat dolore
      </p>
      <a href={url}>
        <button className="view-btn"> view </button>
      </a>
    </div>
  );
};
