import React, { useState, useEffect } from "react";
import styles from "./TeacherDashboard.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import DashboardHeader from "../dashboard-header/DashboardHeader";
import Courses from "../courses/Courses";
import courseImg from "../../bioinformatics.jpg";

const TeacherDashboard = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const { teacherID } = useParams();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/course/meet/${roomCode}`);
  };

  const [currentTeacher, setCurrentTeacher] = useState(null);

  useEffect(() => {
    const savedTeacher = JSON.parse(localStorage.getItem("teacher"));

    if (savedTeacher) {
      setCurrentTeacher(savedTeacher);
    } else {
    }
  }, []);

  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    // Fetch subjects from your API
    fetch("http://localhost:2020/api/v1/subjects")
      .then((response) => response.json())
      .then((data) => {
        const teacherSubject = data.data.filter(
          (subj) => subj.teacher === teacherID
        );
        setSubjects(teacherSubject);
      })
      .catch((err) => console.error("Failed to fetch subjects:", err));
  }, [teacherID]);

  return (
    <div className={styles["teacher-dashboard"]}>
      <DashboardHeader user={currentTeacher}></DashboardHeader>
      <div className={styles["courses"]}>
        {subjects?.map((subject, index) => (
          <div className={styles["course"]} key={index}>
            <img
              src={courseImg}
              className={styles["course-img"]}
              onClick={() =>
                navigate(
                  `/teacher/${currentTeacher._id}/${subject._id}?course=${subject.name}`
                )
              }
            />
            <h4>{subject?.name} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
