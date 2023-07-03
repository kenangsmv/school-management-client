import React, { useEffect, useState, createContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Student.module.scss";
import { Outlet } from "react-router-dom";
import api from "../../api";
import StudentSideBar from "../../components/student-side-bar/StudentSideBar";

const Student = () => {
  const studentActions = [
    { id: "genel-bilgiler", title: "Genel Bilgiler" },
    { id: "update", title: "Profil guncelle" },
    { id: "courses", title: "Dersler" },
    { id: "grades", title: "Not listesi" },
    { id: "exams", title: "Sinavlar" },
    { id: "course-selection", title: "Ders Secimi" },
  ];
  // "Genel Bilgiler",
  //   "Profil guncelle",
  //   "Dersler",
  //   "Not listesi",
  //   "Sinavlar",
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

        localStorage.setItem("student", JSON.stringify(response.data.data));
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className={styles["student-page"]}>
      {/* <Sidebar
        actions={studentActions}
        title={`${student?.name}`}
        code={student?.studentId}
        role="student"
      ></Sidebar> */}
      <StudentSideBar></StudentSideBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Student;
