import React, { useState } from "react";
import styles from "./TeacherCourseRoom.module.scss";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import api from "../../api";
import QuestionCreation from "../question-creation-form/QuestionCreation";

const TeacherCourseRoom = () => {
  const navigate = useNavigate();
  const { courseID, teacherID } = useParams();
  const [roomCode, setRoomCode] = useState("");
  const [meetActive, setMeetActive] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const course = queryParams.get("course");
  const [isQuestionFormActive, setIsQuestionFormActive] = useState(false);
  const [meetLink, setMeetLink] = useState();

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
  const startMeeting = (event) => {
    event.preventDefault();
    navigate(`/course/meet/${courseID}`);
    // navigate(`/teacher/${teacherID}/${courseID}/meet/${courseID}`);
  };
  const [isExamFormActive, setIsExamFormActive] = useState(false);
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
      // navigate(`/teacher/course/exam/${courseID}`);
    } catch (error) {
      console.error("Failed to create exam:", error);
      alert("Failed to create exam");
    }
  };
  const createMeet = async (event) => {
    event.preventDefault();
    // if (validation()) {
    //   console.log("sumbit");
    //   }
    try {
      const token = localStorage.getItem("teacherToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/meets`,
        {
          name: roomCode,
          // subject,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // alert("Meet created successfully");
      // navigate(`/teacher/course/exam/${courseID}`);
    } catch (error) {
      console.error("Failed to create exam:", error);
      // alert("Failed to create meet");
    }
  };
  return (
    <div className={styles["course-room"]}>
      <button
        className={styles["create-exam-button"]}
        onClick={() => {
          openForm(courseID);
        }}
      >
        Create Exams
      </button>
      {isExamFormActive === courseID ? (
        <div
          className={`${styles["exam-form"]} ${
            isExamFormActive === courseID
              ? styles["exam-form-active"]
              : styles["exam-form-not-active"]
          }`}
        >
          <form onSubmit={createExam}>
            Exam Form a
            <label>
              <input
                type="text"
                value={examName}
                onChange={handleExamnameChange}
                placeholder="Exam Name"
                required
              />
            </label>
            <label>
              <input
                type="text"
                value={course}
                // onChange={handleUsernameChange}
                readOnly
              />
            </label>
            <div className={styles["selection"]}>
              <label>
                <select
                  value={duration}
                  onChange={handleDurationChange}
                  required
                >
                  <option value="">Duration</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="60">60</option>
                  <option value="80">80</option>
                </select>
              </label>
            </div>
            <label>
              <input type="date" value={date} onChange={handleDateChange} />
            </label>
            <label>
              <input
                type="time"
                value={dateTime}
                onChange={handleDateTimeChange}
              />
            </label>
            <button type="submit" className={styles["create-button"]}>
              Create
            </button>
          </form>
        </div>
      ) : null}

      <div className={styles["question-adding"]}>
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
          <QuestionCreation examId={exam?._id} id={courseID}></QuestionCreation>
        )}
      </div>

      <div className={styles["meeting-creation"]}>
        <button
          onClick={(event) => {
            setMeetActive(true);
            createMeet(event);
          }}
        >
          Start Meet
        </button>
        {meetActive && (
          <form onSubmit={startMeeting} className={styles["meeting-form"]}>
            <span>
              Roome Code
              <input
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                required
              />
            </span>
            <button type="submit">start meeting</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TeacherCourseRoom;
