import React, { useState, useEffect } from "react";
import styles from "./CourseSelection.module.scss";
import api from "../../api";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const CourseSelection = () => {
  const [subjects, setSubjects] = useState([]);

  const [student, setStudent] = useState(null);
  const { studentID } = useParams();
  const [selected, setSelected] = useState(false);

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
    // Fetch subjects from your API
    fetch("http://localhost:2020/api/v1/subjects")
      .then((response) => response.json())
      .then((data) => {
        const studentSubject = data.data.filter((subj) => {
          console.log("Checking subject", subj);
          const hasStudent = subj.students.every((item) => {
            const matches = item != studentID;
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
  }, [studentID, selected]);

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
      setSelected(true);
    } catch (error) {
      console.error("Failed to add student to subject:", error);
    }
  };

  return (
    <div className={styles["course-selection"]}>
      <div className={styles["course-box-grid"]}>
        <div className={styles["list-container"]}>
          <table className={styles["list-table"]}>
            <thead>
              <tr className={styles["list-table-header"]}>
                <th>Name</th>
                <th style={{ textAlign: "end", paddingRight: "34px" }}>Add</th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((item) => (
                <tr>
                  <td className={styles["list-user-name"]}>
                    {/* <img src={userImg} className={styles["list-user-img"]} /> */}
                    {item?.name}
                  </td>
                  <td style={{ textAlign: "end" }}>
                    <button
                      onClick={(event) =>
                        selectCourse(event, item, student?.name)
                      }
                      className={styles["list-button"]}
                      style={{ background: "#FF7124" }}
                    >
                      <BsPlus />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {courses?.map((item, index) => (
          <div key={item._id} className={styles["course-box"]}>
            {item.name}
            <button
              className={styles["create-exam"]}
              onClick={(event) => selectCourse(event, item, student?.name)}
            >
              Select Course
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CourseSelection;
