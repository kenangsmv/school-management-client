import React from "react";
import styles from "./UserBar.module.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import userImg from "../../user.jpg";

const UserBar = () => {
  return (
    <div className={styles["user-bar"]}>
      <div className={styles["notifications"]}>
        <IoMdNotificationsOutline
          style={{ fontSize: "25px", marginRight: "20px", color: "#838F9F" }}
        ></IoMdNotificationsOutline>
        <span className={styles["active"]}></span>
      </div>

      <div className={styles["user-bar-context"]}>
        <img src={userImg} className={styles["user-bar-img"]} />
        <h3>Kanan Gasimov</h3>
      </div>
      <MdOutlineKeyboardArrowDown
        style={{ fontSize: "25px", marginLeft: "20px", color: "#838F9F" }}
      ></MdOutlineKeyboardArrowDown>
    </div>
  );
};

export default UserBar;
