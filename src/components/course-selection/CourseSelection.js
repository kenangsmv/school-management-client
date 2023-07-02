import React, { useState, useEffect } from "react";
import styles from "./CourseSelection.module.scss";
import api from "../../api";

const CourseSelection = () => {
  const [courses, setCourses] = useState([]);
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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get(
          "http://localhost:2020/api/v1/subjects",
          {}
        );
        console.log(response.data.data);
        // response.data.data.students.map((item) => {
        //   if (item != student._id) {
        //     setCourses(item);
        //   }
        // });
        setCourses(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchCourses();
  }, []);

  const selectCourse = async (event, item, studentName) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("studentToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/subjects/${item._id}/student`,
        {
          name: studentName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Failed to add student to subject:", error);
    }
  };

  return (
    <div className={styles["course-selection"]}>
      <div className={styles["course-box-grid"]}>
        {courses?.map((item, index) => (
          <div key={item._id} className={styles["course-box"]}>
            {item.name}
            <button
              className={styles["create-exam"]}
              onClick={(event) => selectCourse(event, item, student?.name)}
            >
              Select Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSelection;
