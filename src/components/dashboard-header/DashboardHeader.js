import React from "react";
import styles from "./DashboardHeader.module.scss";

import { MdOutlineNotifications } from "react-icons/md";
import Searchbox from "../searchbox/Searchbox";

const DashboardHeader = ({ user }) => {
  console.log("user", user);
  return (
    <div className={styles["dashboard-header"]}>
      <div className={styles["dashboard-greeting"]}>
        <h4>Hello, {user?.name}</h4>
        <p>welcome to your dashboard</p>
      </div>
      <Searchbox></Searchbox>
      <button className={styles["student-dashboard-notification"]}>
        <MdOutlineNotifications fontSize={23} />
      </button>
    </div>
  );
};

export default DashboardHeader;
