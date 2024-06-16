import React from "react";
import Project from "@/app/components/Project";

const projects = [
  {
    title: "Plant Sorter",
    description: "A site that allows user input for plant care",
    link: "https://acechianni.github.io/JavaScript-Plant-Manager/",
  },
  {
    title: "Pet Adoption Site",
    description: "A makeshift site for a pet adoption agency",
    link: "https://acechianni.github.io/CSS-Pet-Adoption/index.html",
  },
  {
    title: "Anime Finder",
    description:
      "A site for new anime watchers to use interactive methods to find shows that fit their preferences",
    link: "https://acechianni.github.io/Capstone-AnimeFinder/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="my-8 text-3xl text-center">My Projects</h1>
      <h2 className="text-center mb-8">
        Here are a few cool projects I've worked on so far:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}
