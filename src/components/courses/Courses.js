import React, { useState } from "react";
import styles from "./Courses.module.scss";
import { useEffect } from "react";
import api from "../../api";
import courseImg from "../../bioinformatics.jpg";
import teacherImg from "../../user.jpg";

const Courses = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          "http://localhost:2020/api/v1/programs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPrograms(response.data.data);
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className={styles["courses"]}>
      <div className={styles["course"]}>
        <img src={courseImg} className={styles["course-img"]} />
        <h4>Introduction to Bioinformatics</h4>
        <div className={styles["course-teacher"]}>
          <img src={teacherImg} className={styles["course-teacher-img"]} />
          <span>Alper Ozcan</span>
        </div>
      </div>
      <div className={styles["course"]}>
        <img src={courseImg} className={styles["course-img"]} />
        <h4>Introduction to Bioinformatics</h4>
        <div className={styles["course-teacher"]}>
          <img src={teacherImg} className={styles["course-teacher-img"]} />
          <span>Alper Ozcan</span>
        </div>
      </div>
      <div className={styles["course"]}>
        <img src={courseImg} className={styles["course-img"]} />
        <h4>Introduction to Bioinformatics</h4>
        <div className={styles["course-teacher"]}>
          <img src={teacherImg} className={styles["course-teacher-img"]} />
          <span>Alper Ozcan</span>
        </div>
      </div>
      <div className={styles["course"]}>
        <img src={courseImg} className={styles["course-img"]} />
        <h4>Introduction to Bioinformatics</h4>
        <div className={styles["course-teacher"]}>
          <img src={teacherImg} className={styles["course-teacher-img"]} />
          <span>Alper Ozcan</span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
