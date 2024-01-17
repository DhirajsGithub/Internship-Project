import React from "react";
import classes from "./ProjectCardOwner.module.css";

const ProjectCardOwner = ({ owner }) => {
  const { name, image, disc, role } = owner;
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <img src={image} alt="" />
        <div>
          <div className={classes.head}>
            <h1>{name}</h1>
            <p>{role}</p>
          </div>
          <p className={classes.disc}>{disc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardOwner;
