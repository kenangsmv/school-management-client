import React, { useEffect, useState } from "react";
import styles from "./ExamRoom.module.scss";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../api";

const ExamRoom = () => {
  const { examID } = useParams();
  const [exam, setExam] = useState(null);
  const [questions, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const studentToken = JSON.parse(localStorage.getItem("student"));
  console.log(studentToken);
  useEffect(() => {
    const fetchExam = async () => {
      try {
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          `http://localhost:2020/api/v1/exams/${examID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let newExam = questionsWithNumber(response.data.data);
        let initalAnswersArr = initialAnswers(response.data.data);
        setAnswers(initalAnswersArr);
        setExam(newExam);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchExam();
  }, []);

  const questionsWithNumber = (exam) => {
    let newExam = exam;
    newExam.questions.map((question, index) => {
      question.number = index;
    });
    return newExam;
  };

  const initialAnswers = (exam) => {
    let initialAnswersArr = [];
    exam.questions.map((question, index) => {
      initialAnswersArr.push({ number: index, value: "" });
    });
    return initialAnswersArr;
  };
  const optionsToArray = (question) => {
    let options = [];
    Object.keys(question).forEach(function (key, index) {
      if (key.includes("option")) {
        options.push({ key: key, value: question[key] });
      }
    });
    return options;
  };

  const submitAnswers = async () => {
    let requestAnswers = [];
    answers.map((ans) => {
      requestAnswers.push(ans.value);
    });
    const token = localStorage.getItem("studentToken");
    console.log(token);
    const response = await api
      .post(
        `http://localhost:2020/api/v1/student/exam/${examID}/write`,
        { answers: requestAnswers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((e) => {
        console.log(e);
        alert(e.response.data.message);
      });
    navigate(
      `/student/genel-bilgiler/courses/${studentToken.studentProfile.id}`
    );
  };
  return (
    <div className={styles["exam-room"]}>
      <h3 className={styles["exam-title"]}>{exam?.name}</h3>
      <div className={styles["exam"]}>
        {exam?.questions?.map((question) => (
          <div className={styles["question-container"]}>
            <p className={styles["question"]}>{question.question}</p>
            <form>
              {optionsToArray(question).map((option) => (
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={option.key}
                    onChange={(e) => {
                      let answersArr = answers;
                      let newAnsweIndex = answersArr.findIndex(
                        (answ) => answ.number === question.number
                      );
                      answersArr[newAnsweIndex].value = e.target.value;
                      console.log("answersArr", answersArr);
                      setAnswers(answersArr);
                    }}
                  />
                  <span>{option.value}</span>
                </label>
              ))}
            </form>
          </div>
        ))}

        <button
          className={styles["submit-button"]}
          onClick={() => submitAnswers()}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default ExamRoom;
