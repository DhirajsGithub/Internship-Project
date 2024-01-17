import React from "react";
import classes from "./ProjectCard.module.css";
import projectImg from "../../assets/projectImg.svg";
import calender from "../../assets/calendar.svg";
import veriefied from "../../assets/verified.svg";
import filledStar from "../../assets/filledStart.svg";
import filledEth from "../../assets/filledEth.svg";
import { Badge } from "antd";
import badge1 from "../../assets/projectBadgesSvgs/badge1.svg";
import badge2 from "../../assets/projectBadgesSvgs/badge2.svg";
import badge3 from "../../assets/projectBadgesSvgs/badge3.svg";
import badge4 from "../../assets/projectBadgesSvgs/badge4.svg";
import badge5 from "../../assets/projectBadgesSvgs/badge5.svg";
import ProjectCardOwner from "../ProjectCardOwner/ProjectCardOwner";

const ProjectCard = () => {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={projectImg} alt="project imgage" />
      <div className={classes.content}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img className={classes.calender} src={calender} alt="" />
          <p className={classes.date}>2 Aug -30 Aug: 4 weeks</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p className={classes.name}>Slides/Visuals for Live Sessions</p>
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
              <h1 className={classes.value}>4.5</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                className={classes.icon}
                src={filledEth}
                alt="filled start"
              />
              <h1 className={classes.value}>200</h1>
            </div>
          </div>
          <Badge
            className="site-badge-count-109"
            count={"Excellent"}
            style={{ backgroundColor: "#52c41a" }}
          />
        </div>
        <div className={classes.badges}>
          <img src={badge1} alt="" />
          <img src={badge2} alt="" />
          <img src={badge3} alt="" />
          <img src={badge4} alt="" />
          <img src={badge5} alt="" />
        </div>
        <br />
        <br />
        <ProjectCardOwner />
        <div style={{ display: "flex" }}>
          <div className={classes.detailBtn}>
            <p>View Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
