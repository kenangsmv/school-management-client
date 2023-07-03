import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import api from "../../api";
import newsImg from "../../university.jpg";
import userImg from "../../user.jpg";
import { Outlet, useNavigate } from "react-router-dom";

import "react-calendar/dist/Calendar.css";

import { MdOutlineNotifications, MdKeyboardArrowRight } from "react-icons/md";
import Courses from "../courses/Courses";
import DashboardHeader from "../dashboard-header/DashboardHeader";

const StudentInfo = () => {
  let iconStyles = { color: "white", fontSize: "4em" };

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          "http://localhost:2020/api/v1/student/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStudent(response.data.data.studentProfile);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const twoDaysBefore = new Date();
    twoDaysBefore.setDate(currentDate.getDate() - 2);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const datesArray = [];
    for (let i = 0; i < 5; i++) {
      let tempDate = new Date(twoDaysBefore);
      tempDate.setDate(twoDaysBefore.getDate() + i);
      datesArray.push({
        date: tempDate.getDate() + " " + monthNames[tempDate.getMonth()],
        isToday: tempDate.toDateString() === currentDate.toDateString(),
      });
    }

    setDates(datesArray);
  }, []);

  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const savedStudent = JSON.parse(localStorage.getItem("student"));

    if (savedStudent) {
      setCurrentStudent(savedStudent);
    } else {
    }
  }, [localStorage.getItem("student")]);

  useEffect(() => {
    console.log("curre", currentStudent);
  }, [currentStudent]);

  return (
    <div className={styles["student-dashboard-container"]}>
      <div className={styles["dashboard-main"]}>
        {" "}
        <DashboardHeader
          user={currentStudent?.studentProfile}
        ></DashboardHeader>
        <div className={styles["dashboard-context"]}>
          <div
            className={styles["news"]}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${newsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>You can learn yourself</h1>
            <p>
              The more that you read, the more things you will know. The more
              that you learn, the more places you'll go.
            </p>
            <button className={styles["read-more"]}>Read More</button>
          </div>
          <ul className={styles["student-dashboard-actions"]}>
            <li
              onClick={() =>
                navigate(`/student/genel-bilgiler/courses/${student?.id}`)
              }
            >
              Courses
            </li>
            <li
              onClick={() =>
                navigate(`/student/genel-bilgiler/exams/${student?.id}`)
              }
            >
              Exams
            </li>
            <li
              onClick={() =>
                navigate(`/student/genel-bilgiler/grades/${student?.id}`)
              }
            >
              Exams Results
            </li>
            <li
              onClick={() =>
                navigate(
                  `/student/genel-bilgiler/course-selection/${student?.id}`
                )
              }
            >
              Course Selection
            </li>
          </ul>
          <Outlet></Outlet>
        </div>
      </div>
      <div className={styles["student-dashboard-info"]}>
        <div className={styles["profile"]}>
          <img src={userImg} />
          <h4>{currentStudent?.studentProfile?.name}</h4>
          <span>{currentStudent?.studentProfile?.studentId}</span>
        </div>
        <div className={styles["dashboard-calendar"]}>
          {dates.map((date, index) => (
            <p key={index} className={date.isToday ? styles.today : ""}>
              {date.date}
            </p>
          ))}
        </div>

        <div className={styles["latest-exams"]}>
          <h4> Exams </h4>
          <div className={styles["exams"]}>
            <span>B</span>
            <div className={styles["exam-content"]}>
              <h4>BioInformatics</h4>
              <p>Midterm Exam</p>
            </div>
            <MdKeyboardArrowRight color=" #7FA30A" />
          </div>
          <div className={styles["exams"]}>
            <span>P</span>
            <div className={styles["exam-content"]}>
              <h4>Probabulity</h4>
              <p>Midterm Exam</p>
            </div>
            <MdKeyboardArrowRight color=" #7FA30A" />
          </div>
          <div className={styles["exams"]}>
            <span>B</span>
            <div className={styles["exam-content"]}>
              <h4>BioInformatics</h4>
              <p>Midterm Exam</p>
            </div>
            <MdKeyboardArrowRight color=" #7FA30A" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
