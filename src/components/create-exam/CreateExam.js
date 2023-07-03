import React, { useEffect, useState } from "react";
import styles from "./CreateExam.module.scss";
import api from "../../api";
import QuestionCreation from "../question-creation-form/QuestionCreation";
import { useNavigate, useParams } from "react-router-dom";

const CreateExam = ({ id }) => {
  const [subjects, setSubjects] = useState([]);
  const { teacherID } = useParams();

  const [isExamFormActive, setIsExamFormActive] = useState(null);
  const [isQuestionFormActive, setIsQuestionFormActive] = useState(false);

  const [examName, setExamName] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [exam, setExam] = useState();

  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleExamnameChange = (event) => {
    setExamName(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const openForm = (id) => {
    // setIsActive(isActive === id ? null : id);
    setIsExamFormActive(id);
    setSubject(id);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const token = localStorage.getItem("teacherToken");
        const response = await api.get(
          `http://localhost:2020/api/v1/subjects`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        let matchingSubjects = response.data.data.filter(
          (subject) => subject.teacher === teacherID
        );
        setSubjects(matchingSubjects);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };

    fetchSubjects();
  }, [id]);

  const createExam = async (event) => {
    event.preventDefault();
    // if (validation()) {
    //   console.log("sumbit");
    //   }
    try {
      const token = localStorage.getItem("teacherToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/exams`,
        {
          name: examName,
          subject,
          duration,
          examDate: date,
          examTime: dateTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Exam created successfully");
      setIsExamFormActive(null);
      setExam(response.data.data);
    } catch (error) {
      console.error("Failed to create exam:", error);
      alert("Failed to create exam");
    }
  };

  const getExam = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["create-exam"]}>
      sdfsdf
      {exam && (
        <div>
          {exam.title}{" "}
          <button
            className={styles["question-form"]}
            onClick={() => setIsQuestionFormActive(true)}
          >
            add questions
          </button>
        </div>
      )}
      {isQuestionFormActive && (
        <QuestionCreation examId={exam?._id} id={id}></QuestionCreation>
      )}
    </div>
  );
};

export default CreateExam;
