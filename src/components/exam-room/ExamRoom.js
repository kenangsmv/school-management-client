import React, { useEffect, useState } from "react";
import styles from "./ExamRoom.module.scss";
import { useParams } from "react-router-dom";

import api from "../../api";

const ExamRoom = () => {
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          `http://localhost:2020/api/v1/exams/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExam(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchExam();

    const fetchQuestion = async () => {
      try {
        const response = await api.get(
          "http://localhost:2020/api/v1/questions",
          {}
        );
        // response.data.data.students.map((item) => {
        //   if (item != student._id) {
        //     setCourses(item);
        //   }
        // });
        setQuestion(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchExam();
  }, []);

  return (
    <div className={styles["exam-room"]}>
      <h3 className={styles["exam-title"]}>{exam?.name}</h3>
      <div className={styles["exam"]}>
        <div className={styles["question-container"]}>
          <p className={styles["question"]}>1.is it true?</p>
          <form>
            <label>
              <input type="radio" name="radio" />
              <span>yes</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>no</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>maybe</span>
            </label>
          </form>
        </div>

        <button className={styles["submit-button"]}> Submit </button>
      </div>
    </div>
  );
};

export default ExamRoom;
