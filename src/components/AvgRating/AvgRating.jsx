import React from "react";
import classes from "./AvgRating.module.css";
import { Badge } from "antd";
import filledStar from "../../assets/filledStart.svg";
import hollowStar from "../../assets/hollowStart.svg";

const OtherRatings = ({ rating, message }) => {
  return (
    <div className={classes.otherRatings}>
      <img src={hollowStar} alt="hollow start" />
      <h1 className={classes.rate}>{rating}</h1>
      <p className={classes.message}>{message}</p>
    </div>
  );
};

const AvgRating = () => {
  const ratData = [
    { rating: 4.5, message: "Average Work Quality rating" },
    { rating: 4.5, message: "Monthly average rating - July" },
    { rating: 4.5, message: "Weekly average rating " },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.head}>
        <p className={classes.headAvg}>Average rating</p>
        <Badge
          className="site-badge-count-109"
          count={"Excellent"}
          style={{ backgroundColor: "#52c41a" }}
        />
      </div>
      <div className={classes.filled}>
        <img src={filledStar} alt="filled start" />
        <h1 className={classes.filledRate}>4.5</h1>
      </div>
      <div>
        {ratData.map((data) => (
          <OtherRatings rating={data.rating} message={data.message} />
        ))}
      </div>
    </div>
  );
};

export default AvgRating;
