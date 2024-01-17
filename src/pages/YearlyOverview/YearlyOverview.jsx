import React from "react";
import classes from "./YearlyOverview.module.css";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import YearlyCard from "../../components/YearlyCard/YearlyCard";
import great from "../../assets/yearlySvgs/great.svg";
import medium from "../../assets/yearlySvgs/medium.svg";
import excellent from "../../assets/yearlySvgs/excellent.svg";
import poor from "../../assets/yearlySvgs/poor.svg";
import bexcellent from "../../assets/yearlySvgs/bexcellent.svg";
import bgreat from "../../assets/yearlySvgs/bgreat.svg";
import bmedium from "../../assets/yearlySvgs/bmedium.svg";
import bpoor from "../../assets/yearlySvgs/bpoor.svg";

const YearlyOverview = () => {
  const items = [
    {
      label: "2023",
      key: "1",
    },
    {
      label: "2022",
      key: "2",
    },
    {
      label: "2021",
      key: "3",
    },
    {
      label: "2020",
      key: "4",
    },
  ];
  const menuProps = {
    items,
    onClick: () => console.log("clicked"),
  };
  //   month, badge, image,
  const monthsDetails = [
    { month: "january", badge: bgreat, image: great },
    { month: "february", badge: bmedium, image: medium },
    { month: "march", badge: bexcellent, image: excellent },
    { month: "april", badge: bpoor, image: poor },
    { month: "may", badge: bgreat, image: great },
    { month: "june", badge: bmedium, image: medium },
    { month: "july", badge: bexcellent, image: excellent },
    { month: "august", badge: bpoor, image: poor },
    { month: "september", badge: bgreat, image: great },
    { month: "october", badge: bmedium, image: medium },
    { month: "november", badge: bexcellent, image: excellent },
    { month: "december", badge: bpoor, image: poor },
  ];
  return (
    <div className={classes.main}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1 className={classes.head}>Yearly Overview</h1>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              2023
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className={classes.months}>
        {monthsDetails.map((item) => {
          return (
            <YearlyCard
              month={item.month}
              badge={item.badge}
              image={item.image}
            />
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default YearlyOverview;
