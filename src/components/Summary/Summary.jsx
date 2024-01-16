import React from "react";
import classes from "./Summary.module.css";

const Row = ({ title, value }) => {
  return (
    <div className={classes.row}>
      <p className={classes.title}>{title}</p>
      <p className={classes.value}>{value}</p>
    </div>
  );
};

const Summary = () => {
  return (
    <div className={classes.main}>
      <Row title="Leaves Taken" value={4} />
      <Row title="Leaves Marked" value={1} />
      <div className={classes.line} />
      <Row title="Projects Assigned" value={4} />
      <Row title="Projects Completed" value={2} />
    </div>
  );
};

export default Summary;
