import React from "react";
import classes from "./TotalBadges.module.css";
import { Badge } from "antd";
import filledEth from "../../assets/filledEth.svg";
import smallEth from "../../assets/smallEth.svg";

const OtherRatings = ({ rating, message }) => {
  return (
    <div className={classes.otherRatings}>
      <img src={smallEth} alt="hollow start" />
      <h1 className={classes.rate}>{rating}</h1>
      <p className={classes.message}>{message}</p>
    </div>
  );
};

const TotalBages = () => {
  const ratData = [
    { rating: 50, message: "Total Streak rewards" },
    { rating: 20, message: "Earned last month - July" },
    { rating: 6, message: "Earned last week " },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.head}>
        <p className={classes.headAvg}>Total badges earned</p>
      </div>
      <div className={classes.filled}>
        <img src={filledEth} alt="filled start" />
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

export default TotalBages;
