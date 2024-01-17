import React from "react";
import classes from "./ProjectCardOwner.module.css";
import sample_prof from "../../assets/sample_prof.svg";

const ProjectCardOwner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <img src={sample_prof} alt="" />
        <div>
          <div className={classes.head}>
            <h1>Rahul Gupta</h1>
            <p>Manager</p>
          </div>
          <p className={classes.disc}>
            Anshul’s super simplified, intuitive, minimal designs are delight to
            watch and gets the end task done with minimum steps
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardOwner;
