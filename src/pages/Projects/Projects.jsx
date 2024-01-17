import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={classes.main}>
      <ProjectCard />
    </div>
  );
};

export default Projects;
