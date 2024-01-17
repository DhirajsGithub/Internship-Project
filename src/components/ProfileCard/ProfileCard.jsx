import React from "react";
import classes from "./ProfileCard.module.css";
import profImg from "../../assets/profileImg.png";
import linkedin from "../../assets/socialsSvgs/linked.svg";
import twitter from "../../assets/socialsSvgs/twitter.svg";
import browser from "../../assets/socialsSvgs/browser.svg";
import editSvg from "../../assets/edit.svg";

const LevelBadge = ({ name }) => {
  return (
    <div className={classes.btnContainer}>
      <p className={classes.btn}>{name}</p>
    </div>
  );
};

const SocialCard = ({ name, link }) => {
  return (
    <div className={classes.socialContainer}>
      <a target="_blank" href={link}>
        <img src={name} alt={name} />
      </a>
    </div>
  );
};

const EditBtn = ({ name, action }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <div onClick={action} className={classes.editBtn}>
        <img src={editSvg} alt="edit svg" />
        <p>{name}</p>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  const profileDetail = {
    name: "Bhargavi kirubasankar",
    role: "Data Analyst",
    img: profImg,
    location: "Mumbai",
    linkedin: "https://www.linkedin.com/in/dhiraj-borse-141267240/",
    twitter: "https://www.linkedin.com/in/dhiraj-borse-141267240/",
    browser: "https://www.linkedin.com/in/dhiraj-borse-141267240/",
  };
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <img
          className={classes.profImg}
          src={profileDetail.img}
          alt="profile image"
        />
        <h1 className={classes.profName}>{profileDetail.name}</h1>
        <p className={classes.profRole}>{profileDetail.role}</p>
        <LevelBadge name="Level 1" />
        <p className={classes.location}>{profileDetail.location}</p>
        <div className={classes.socials}>
          <SocialCard name={linkedin} link={profileDetail.linkedin} />
          <SocialCard name={twitter} link={profileDetail.twitter} />
          <SocialCard name={browser} link={profileDetail.browser} />
        </div>
      </div>

      <EditBtn name="Edit" />
    </div>
  );
};

export default ProfileCard;
