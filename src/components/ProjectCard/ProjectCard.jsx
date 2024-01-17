import React from "react";
import classes from "./ProjectCard.module.css";

import calender from "../../assets/calendar.svg";
import veriefied from "../../assets/verified.svg";
import filledStar from "../../assets/filledStart.svg";
import filledEth from "../../assets/filledEth.svg";
import { Badge } from "antd";

import ProjectCardOwner from "../ProjectCardOwner/ProjectCardOwner";

const ProjectCard = ({
  badges,
  id,
  handleViewProject,
  date,
  name,
  image,
  stars,
  eth,
  owner,
}) => {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={image} alt="project imgage" />
      <div className={classes.content}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img className={classes.calender} src={calender} alt="" />
          {/* <p className={classes.date}>2 Aug -30 Aug: 4 weeks</p> */}
          <p className={classes.date}>{date}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p className={classes.name}>{name}</p>
          {/* <p className={classes.name}>Slides/Visuals for Live Sessions</p> */}
          <img className={classes.verified} src={veriefied} alt="verified" />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                className={classes.icon}
                src={filledStar}
                alt="filled start"
              />
              <h1 className={classes.value}>{stars}</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                className={classes.icon}
                src={filledEth}
                alt="filled start"
              />
              <h1 className={classes.value}>{eth}</h1>
            </div>
          </div>
          <Badge
            className="site-badge-count-109"
            count={"Excellent"}
            style={{ backgroundColor: "#52c41a" }}
          />
        </div>
        <div className={classes.badges}>
          {badges.map((badge) => {
            return <img src={badge} alt="" />;
          })}
          {/* <img src={badge1} alt="" />
          <img src={badge2} alt="" />
          <img src={badge3} alt="" />
          <img src={badge4} alt="" />
          <img src={badge5} alt="" /> */}
        </div>
        <br />
        <br />
        <ProjectCardOwner owner={owner} />
        <div style={{ display: "flex" }}>
          <div className={classes.detailBtn}>
            <p onClick={() => handleViewProject(id)}>View Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
