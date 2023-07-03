import React from "react";
import styles from "./InfoBar.module.scss";
import UserBar from "../user-bar/UserBar";
import userImg from "../../user.jpg";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const InfoBar = ({ user, roleId }) => {
  console.log(user);

  console.log(roleId);
  return (
    <div className={styles["infobar-container"]}>
      <UserBar></UserBar>
      <div className={styles["infobar"]}>
        <div className={styles["user-info"]}>
          <span>
            {roleId === "student" ? user?.studentId : user?.teacherId}
          </span>
          <img src={userImg} className={styles["info-bar-img"]} />
          <h2>{user?.name}</h2>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={styles["create-background"]}
            >
              <path
                fill="orangered"
                fill-opacity="0.93"
                d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className={styles["gender"]}>
            <h4>Gender</h4>
            <p>Female</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={styles["create-background"]}
            >
              <path
                fill="purple"
                fill-opacity="0.93"
                d="M0,256L30,245.3C60,235,120,213,180,218.7C240,224,300,256,360,250.7C420,245,480,203,540,197.3C600,192,660,224,720,245.3C780,267,840,277,900,272C960,267,1020,245,1080,229.3C1140,213,1200,203,1260,213.3C1320,224,1380,256,1410,272L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className={styles["date-of-birth"]}>
            <h4>Date of Birth</h4>
            <p>9 May 1994</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={styles["create-background"]}
            >
              <path
                fill="#0074D9"
                fill-opacity="0.93"
                d="M0,224L34.3,192C68.6,160,137,96,206,64C274.3,32,343,32,411,58.7C480,85,549,139,617,133.3C685.7,128,754,64,823,80C891.4,96,960,192,1029,208C1097.1,224,1166,160,1234,112C1302.9,64,1371,32,1406,16L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className={styles["address"]}>
            <h4>Address</h4>
            <p>6301 Elgin St. Celina, Delaware 10299</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={styles["create-background"]}
            >
              <path
                fill="green"
                fill-opacity="0.93"
                d="M0,64L30,90.7C60,117,120,171,180,170.7C240,171,300,117,360,90.7C420,64,480,64,540,69.3C600,75,660,85,720,106.7C780,128,840,160,900,160C960,160,1020,128,1080,96C1140,64,1200,32,1260,21.3C1320,11,1380,21,1410,26.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
