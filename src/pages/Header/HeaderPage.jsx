import React from "react";
import classes from "./Header.module.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AvgRating from "../../components/AvgRating/AvgRating";
import Streak from "../../components/Streak/Streak";
import TotalBages from "../../components/TotalBadges/TotalBages";
import Summary from "../../components/Summary/Summary";

const HeaderPage = () => {
  return (
    <div className={classes.header}>
      <ProfileCard />
      <div style={{ flexGrow: 1 }}>
        <AvgRating />
        <br />
        <Streak />
      </div>
      <div style={{ flexGrow: 1 }}>
        <TotalBages />
        <br />
        <Summary />
      </div>
    </div>
  );
};

export default HeaderPage;
