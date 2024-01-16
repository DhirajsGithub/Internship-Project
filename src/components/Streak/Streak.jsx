import React from "react";
import classes from "./Streak.module.css";
import days5Svg from "../../assets/5days.svg";
import days4Svg from "../../assets/4days.svg";

const Streak = () => {
  return (
    <div className={classes.main}>
      <div>
        <p className={classes.para}>Longest streak</p>
        <div className={classes.streak}>
          <img src={days5Svg} alt="" />
          <h1 className={classes.days}> 5 days</h1>
        </div>
      </div>
      <div>
        <p className={classes.para}>Current streak</p>
        <div className={classes.streak}>
          <img src={days4Svg} alt="" />
          <h1 className={classes.days}> 4 days</h1>
        </div>
      </div>
    </div>
  );
};

export default Streak;
