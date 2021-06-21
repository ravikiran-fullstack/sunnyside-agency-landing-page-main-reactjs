import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projectsSection" id="projects">
      {projects.map((project) => {
        return (
          <div key={project.name} className="project">
            {/* <img className="projectPicture" src={project.picture} alt={project.name || "project"} /> */}
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
