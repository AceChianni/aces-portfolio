import React from "react";

const Project = ({ title, description, link }) => {
  return (
    <div className="m-4 p-4 border rounded shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default Project;
