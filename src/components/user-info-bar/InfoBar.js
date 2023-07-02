import React from "react";
import styles from "./InfoBar.module.scss";
import UserBar from "../user-bar/UserBar";
import userImg from "../../user.jpg";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const InfoBar = () => {
  return (
    <div className={styles["infobar-container"]}>
      <UserBar></UserBar>
      <div className={styles["infobar"]}>
        <div className={styles["user-info"]}>
          <span>SC400120</span>
          <img src={userImg} className={styles["info-bar-img"]} />
          <h2>Kardelen Arslan</h2>
          <span>Science 4 Student</span>
        </div>
        <div className={styles["user-action"]}>
          <button>
            <AiOutlineMessage fontSize={25} color="#838F9F"></AiOutlineMessage>
          </button>
          <button>
            <AiOutlineMail fontSize={25} color="#838F9F"></AiOutlineMail>
          </button>
        </div>
        <div className={styles["user-about"]}>
          <div className={styles["about"]}>
            <h4>About</h4>
            <p>
              Science is everywhere. A student rides to school ‘onabus, and in
              that instance alone, there are many examples of technology.
            </p>
          </div>
          <div className={styles["age"]}>
            <h4>Age</h4>
            <p>29</p>
          </div>
          <div className={styles["gender"]}>
            <h4>Gender</h4>
            <p>Female</p>
          </div>
          <div className={styles["date-of-birth"]}>
            <h4>Date of Birth</h4>
            <p>9 May 1994</p>
          </div>
          <div className={styles["address"]}>
            <h4>Address</h4>
            <p>6301 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
