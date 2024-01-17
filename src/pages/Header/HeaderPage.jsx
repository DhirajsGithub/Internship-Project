import React from "react";
import classes from "./Header.module.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AvgRating from "../../components/AvgRating/AvgRating";
import Streak from "../../components/Streak/Streak";
import TotalBages from "../../components/TotalBadges/TotalBages";
import Summary from "../../components/Summary/Summary";

const HeaderPage = () => {
  const [viewAll, setViewAll] = React.useState(false);
  const handleClick = () => {
    setViewAll(!viewAll);
  };
  return (
    <>
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
      <br />
      <div className={classes.hLine} />
      <div className={classes.viewAll}>
        <p onClick={handleClick} className={classes.viewAllBtn}>
          {viewAll ? "View Less" : "View All"}
        </p>
      </div>
    </>
  );
};

export default HeaderPage;
