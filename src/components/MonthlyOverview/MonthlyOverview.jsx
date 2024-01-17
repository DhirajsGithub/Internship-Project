import React from "react";
import classes from "./MonthlyOverview.module.css";
import check from "../../assets/check-circle.svg";
import blackRate from "../../assets/black_rate.svg";

const NormalComp = () => {
  return (
    <div className={classes.normalComp}>
      <div className={classes.rect}>
        <img className={classes.check} src={check} alt="" />
        <p className={classes.num}>1</p>
      </div>
      <div className={classes.normalRate}>
        <p className={classes.rateVal}>4.2</p>
        <img className={classes.blackRate} src={blackRate} alt="" />
      </div>
    </div>
  );
};

const MonthlyOverview = () => {
  return (
    <div className={classes.main}>
      <NormalComp />
    </div>
  );
};

export default MonthlyOverview;
