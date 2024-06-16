import React from "react";
import Project from "@/app/components/Project";
export default function page() {
  return (
    <main className="">
      <h1 className="my-8 text-3xl text-center"> My Projects</h1>

      <div>
        <h2 className="text-center">
          Here are a few cool projects I've worked on so far
        </h2>
        <Project
          title="plant sorter"
          description="a site that allows user input for plant care"
          link="https://acechianni.github.io/JavaScript-Plant-Manager/"
        />

        <Project
          title="Pet Adoption Site"
          description="a makeshift site for a pet adoption agency"
          link="https://acechianni.github.io/CSS-Pet-Adoption/index.html"
        />

        <Project
          title="Anime Finder"
          description="A site for new anime watchers to use interactive methods to find shows that fit their preferences"
          link="https://acechianni.github.io/Capstone-AnimeFinder/"
        />
      </div>
    </main>
  );
}
