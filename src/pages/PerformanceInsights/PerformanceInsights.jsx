import React from "react";
import classes from "./PerformanceInsight.module.css";
import PerformanceScore from "../../components/PerformanceScore/PerformanceScore";
import Chart from "../../components/Charts/Chart";
import MonthlyOverview from "../../components/MonthlyOverview/MonthlyOverview";

const PerformanceInsights = () => {
  return (
    <div>
      <div>
        <h1 className={classes.head}>Performance Insights - August</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.score}>
          <PerformanceScore />
        </div>

        <div className={classes.chartMonth}>
          <Chart />
          <MonthlyOverview />
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;
