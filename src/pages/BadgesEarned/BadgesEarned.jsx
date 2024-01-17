import React from "react";
import classes from "./BadgesEarned.module.css";
import BadgesEarnedCard from "../../components/BadgesEarnedCard/BadgesEarnedCard";
import visionaryBadge1 from "../../assets/badgesSvgs/visionary1.svg";
import visionaryBadge2 from "../../assets/badgesSvgs/visionary2.svg";
import visionaryBadge3 from "../../assets/badgesSvgs/visionary3.svg";

const BadgesEarned = () => {
  // const [noOfBadges, setNoOfBadges] = React.useState(3);
  const [viewAll, setViewAll] = React.useState(false);
  const [badges, setBadges] = React.useState([
    {
      name: "Visionary",
      svg: visionaryBadge1,
      disc: "for demonstrating forward-thinking and planning abilities.",
    },
    {
      name: "Visionary",
      svg: visionaryBadge2,
      disc: "for demonstrating forward-thinking and planning abilities.",
    },
    {
      name: "Visionary",
      svg: visionaryBadge3,
      disc: "for demonstrating forward-thinking and planning abilities.",
    },
  ]);
  const handleViewAllPress = () => {
    setViewAll((prvViewAll) => !prvViewAll);
    if (viewAll) {
      setBadges((prvBadges) => {
        return prvBadges.slice(0, 3);
      });
      return;
    } else {
      setBadges((prvBadges) => {
        return [...prvBadges, ...prvBadges, prvBadges[0]];
      });
    }
  };
  return (
    <div className={classes.overylay}>
      <h1 className={classes.heading}>Badges Earned</h1>
      <div className={classes.main}>
        {badges.map((badge) => (
          <BadgesEarnedCard
            name={badge.name}
            svg={badge.svg}
            disc={badge.disc}
          />
        ))}
      </div>
      <div className={classes.viewAll}>
        <p onClick={handleViewAllPress} className={classes.viewAllBtn}>
          {viewAll ? "View Less" : "View All"}
        </p>
      </div>
    </div>
  );
};

export default BadgesEarned;
