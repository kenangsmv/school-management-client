import React from "react";
import logo from "../../logoblack.png";
import styles from "./StudentSideBar.module.scss";
import { BsBookFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const StudentSideBar = () => {
  return (
    <div className={styles["student-sidebar"]}>
      <img src={logo} className={styles["logo"]} />
      <ul className={styles["student-side-bar-menu"]}>
        <li>
          <BsBookFill className={styles["menu-items"]} />
        </li>
        <li>
          <AiOutlineMessage className={styles["menu-items"]} />
        </li>
        <li>
          <MdSettings className={styles["menu-items"]} />
        </li>
        <li>
          <FaExclamation className={styles["menu-items"]} />
        </li>
      </ul>
    </div>
  );
};

export default StudentSideBar;
