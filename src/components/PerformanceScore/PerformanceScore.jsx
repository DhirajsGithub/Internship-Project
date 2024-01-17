import React from "react";
import classes from "./PerformanceScore.module.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import filledStar from "../../assets/filledStart.svg";
import filledEth from "../../assets/filledEth.svg";
import { Badge, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import ProjectCardOwner from "../ProjectCardOwner/ProjectCardOwner";
import sample_prof from "../../assets/sample_prof.svg";

const Row = ({ msg, img, val }) => {
  return (
    <div className={classes.row}>
      <p className={classes.rowPara}>{msg}</p>
      <div
        className={classes.imgVal}
        style={{ display: "flex", alignItems: "center" }}
      >
        {img && <img src={img} alt="" />}
        <p>{val}</p>
      </div>
    </div>
  );
};

const PerformanceScore = () => {
  const data = [
    { msg: "Average Tasks rating", img: filledStar, val: 4.2 },
    { msg: "Total Badges earned for tasks", img: filledEth, val: 20 },
    { msg: "Average monthly rating", img: filledStar, val: 4.5 },
    { msg: "Total Badges earned for Looms", img: filledEth, val: 20 },
    { msg: "Leaves Taken", val: 2 },
    { msg: "Looms missed", val: 2 },
  ];

  const items = [
    {
      key: "1",
      label: (
        <Badge
          className="site-badge-count-109"
          count={"Excellent"}
          style={{ backgroundColor: "#52c41a" }}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Badge
          className="site-badge-count-109"
          count={"Good"}
          style={{ backgroundColor: "#faad14" }}
        />
      ),
    },
    {
      key: "3",
      label: (
        <Badge
          className="site-badge-count-109"
          count={"poor"}
          //   style={{ backgroundColor: "#52c41a" }}
        />
      ),
    },
  ];
  const owner = {
    name: "Rahul Gupta",
    image: sample_prof,
    disc: "Anshul’s super simplified, intuitive, minimal designs are delight to watch and  gets the end task done with minimum steps",
    role: "Project Owner",
  };
  return (
    <div className={classes.main}>
      <div>
        <SemiCircleProgress
          percentage={74}
          size={{
            width: 200,
            height: 200,
          }}
          strokeWidth={10}
          name="performance"
          strokeColor="#48BF84"
        />
      </div>
      <div className={classes.circulars}>
        <div className={classes.circular}>
          <div style={{ width: 64, height: 64 }}>
            {" "}
            <CircularProgressbar
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#48BF84`,
                textColor: "#000",
              })}
              value={70}
              text={`${7}`}
            />
          </div>
          <p className={classes.para}>Average Quality score</p>
        </div>
        <div className={classes.circular}>
          <div style={{ width: 64, height: 64 }}>
            {" "}
            <CircularProgressbar
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#48BF84`,
                textColor: "#000",
              })}
              value={80}
              text={`${8}`}
            />
          </div>
          <p className={classes.para}>Average Speed score</p>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {data.map((item) => {
          return (
            <Row msg={item.msg} img={item.img} val={item.val} key={item.msg} />
          );
        })}
        <div className={classes.row}>
          <p className={classes.rowPara}>Performance Level</p>
          <div
            className={classes.imgVal}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => console.log("fdk")}>
                <Space>
                  <Badge
                    className="site-badge-count-109"
                    count={"Excellent"}
                    style={{ backgroundColor: "#52c41a" }}
                  />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div>
          <ProjectCardOwner owner={owner} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceScore;
