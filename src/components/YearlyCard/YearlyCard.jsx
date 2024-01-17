import React from "react";
import classes from "./YearlyCard.module.css";

const YearlyCard = ({ month, badge, image }) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.head}>{month}</h1>

      <img src={badge} alt="" />
      <img className={classes.img} src={image} alt="" />
      <div className={classes.btnDiv}>
        <p onClick={() => handleReportClick(month)} className={classes.btn}>
          View Report
        </p>
      </div>
    </div>
  );
};

export default YearlyCard;
