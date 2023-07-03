import React, { useState } from "react";
import styles from "./Courses.module.scss";
import { useEffect } from "react";
import api from "../../api";
import courseImg from "../../bioinformatics.jpg";
import teacherImg from "../../user.jpg";
import { useNavigate, useParams } from "react-router-dom";

const Courses = () => {
  const [subjects, setSubjects] = useState([]);
  const { studentID } = useParams();

  useEffect(() => {
    // Fetch subjects from your API
    fetch("http://localhost:2020/api/v1/subjects")
      .then((response) => response.json())
      .then((data) => {
        const studentSubject = data.data.filter((subj) => {
          console.log("Checking subject", subj);
          const hasStudent = subj.students.some((item) => {
            const matches = item === studentID;
            console.log(`Student ${item} matches ${studentID}: ${matches}`);
            return matches;
          });
          console.log("Subject has student:", hasStudent);
          return hasStudent;
        });
        setSubjects(studentSubject);
        console.log("Filtered subjects:", studentSubject);
        console.log("All subjects:", data.data);
      })
      .catch((err) => console.error("Failed to fetch subjects:", err));
  }, [studentID]);

  return (
    <div className={styles["courses"]}>
      {subjects?.map((subject, index) => (
        <div className={styles["course"]} key={index}>
          <img src={courseImg} className={styles["course-img"]} />
          <h4>{subject?.name}</h4>
          {/* <div className={styles["course-teacher"]}>
            <img src={teacherImg} className={styles["course-teacher-img"]} />
            <span>Alper Ozcan</span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Courses;
