import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sample_prof from "../../assets/sample_prof.svg";
import badge1 from "../../assets/projectBadgesSvgs/badge1.svg";
import badge2 from "../../assets/projectBadgesSvgs/badge2.svg";
import badge3 from "../../assets/projectBadgesSvgs/badge3.svg";
import badge4 from "../../assets/projectBadgesSvgs/badge4.svg";
import badge5 from "../../assets/projectBadgesSvgs/badge5.svg";
import projectImg from "../../assets/projectImg.svg";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const Projects = () => {
  // badges, id, handleViewProject, date, name, image, stars, eth, owner
  const badges = [badge1, badge2, badge3, badge4, badge5];
  const handleViewProject = () => {
    console.log("View Project");
  };

  const items = [
    {
      label: "ALL",
      key: "1",
    },
    {
      label: "Best",
      key: "2",
    },
    {
      label: "Most Viewed",
      key: "3",
    },
    {
      label: "Most Funded",
      key: "4",
    },
  ];
  const menuProps = {
    items,
    onClick: () => console.log("clicked"),
  };

  return (
    <div className={classes.layout}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className={classes.title}>Projects</h1>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              ALL
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className={classes.main}>
        <ProjectCard
          badges={badges}
          id="1"
          handleViewProject={handleViewProject}
          date="2 Aug -30 Aug: 4 weeks"
          name="Slides/Visuals for Live Sessions"
          image={projectImg}
          stars="4.5"
          eth="200"
          owner={{
            name: "John Doe",
            image: sample_prof,
            disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
            role: "Project Owner",
          }}
        />
        <ProjectCard
          badges={badges}
          id="1"
          handleViewProject={handleViewProject}
          date="2 Aug -30 Aug: 4 weeks"
          name="Slides/Visuals for Live Sessions"
          image={projectImg}
          stars="4.5"
          eth="200"
          owner={{
            name: "Rahul Gupta",
            image: sample_prof,
            disc: "Anshul’s super simplified, intuitive, minimal designs are delight to watch and  gets the end task done with minimum steps",
            role: "Project Owner",
          }}
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Projects;
