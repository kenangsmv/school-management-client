import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Teacher.module.scss";
import api from "../../api";
import { Outlet, Route, Routes } from "react-router-dom";

const Teacher = () => {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (teacher === null) {
          // Check if teacher is null
          const token = localStorage.getItem("teacherToken");
          const response = await api.get(
            "http://localhost:2020/api/v1/teacher/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setTeacher(response.data.data);

          localStorage.setItem("teacher", JSON.stringify(response.data.data));
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const teacherActions = [
    { id: "create-exam", title: "Create Exam" },
    { id: "teacher-dashboard", title: "Dashboard" },
  ];
  return (
    <div className={styles["teacher-page"]}>
      <Sidebar
        actions={teacherActions}
        title={teacher?.name}
        code={teacher?.teacherId}
        id={teacher?._id}
        role="teacher"
      ></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Teacher;
