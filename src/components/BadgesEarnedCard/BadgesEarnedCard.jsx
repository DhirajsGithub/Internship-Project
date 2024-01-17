import React from "react";
import classes from "./BadgesEarnedCard.module.css";

const BadgesEarnedCard = ({ name, svg, disc }) => {
  return (
    <div className={classes.main}>
      <img src={svg} alt="visionaryBadge1" />
      <div>
        <h1 className={classes.badgeName}>{name}</h1>
        <p className={classes.badgeDisc}>{disc}</p>
      </div>
    </div>
  );
};

export default BadgesEarnedCard;
