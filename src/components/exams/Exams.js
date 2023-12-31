import React, { useState, useEffect } from "react";
import styles from "./Exams.module.scss";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import examImg from "../../bioinformatics.jpg";
import teacherImg from "../../user.jpg";
import { FaUserFriends } from "react-icons/fa";

const Exams = () => {
  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);
  const [matchingExams, setMatchingExam] = useState([]);
  const navigate = useNavigate();
  const { studentID } = useParams();

  const [student, setStudent] = useState(null);

  const [examResults, setExamResults] = useState([]);
  useEffect(() => {
    const fetchExamResults = async () => {
      try {
        const student = localStorage.getItem("student");
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          `http://localhost:2020/api/v1/exam-results/${1213132456}/checking`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExamResults(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchExamResults();
  }, []);

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

    const fetchCourses = async () => {
      try {
        const response = await api.get(
          "http://localhost:2020/api/v1/subjects",
          {}
        );
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

    const fetchExams = async () => {
      try {
        const response = await api.get(
          "http://localhost:2020/api/v1/exams",
          {}
        );
        // response.data.data.students.map((item) => {
        //   if (item != student._id) {
        //     setCourses(item);
        //   }
        // });
        setExams(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchExams();
  }, []);

  useEffect(() => {
    const fetchExamResults = async () => {
      try {
        const student = localStorage.getItem("student");
        const token = localStorage.getItem("studentToken");
        const response = await api.get(
          `http://localhost:2020/api/v1/exam-results/${1213132456}/checking`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExamResults(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchExamResults();
  }, []);

  useEffect(() => {
    let matchingExams = [];

    exams.forEach((exam) => {
      console.log(exam.subject);
      courses.forEach((course) => {
        console.log(course._id);
        if (
          course._id === exam.subject._id &&
          course.students.some((student) => student.id === student?.id)
        ) {
          matchingExams.push(exam);
        }
      });
    });
    setMatchingExam(matchingExams);
  }, [courses, exams]);

  const [availableExams, setAvailableExams] = useState([]);

  useEffect(() => {
    let availableExams = [];

    // Get the IDs of all exams that the student has already taken
    const takenExamIds = examResults.map((examResult) => examResult.exam._id);

    // Filter the matchingExams
    availableExams = matchingExams.filter(
      (exam) => !takenExamIds.includes(exam._id)
    );

    setAvailableExams(availableExams);
  }, [examResults, matchingExams]);

  const join = (examId) => {
    navigate(`/student/exams/${examId}`);
  };

  return (
    <div className={styles["exams-container"]}>
      <div className={styles["exams"]}>
        {availableExams?.map((item) => (
          <div className={styles["exam"]}>
            <div className={styles["exam-content"]}>
              <h3> {item.name}</h3>
              <p>{item.subject.name}</p>
              <span>Question: {item.questions.length}</span>
              <span>Passing grade:{item.passMark}</span>
              <span>Duration:{item.duration} minutes</span>
            </div>

            <button
              className={styles["exam-join-button"]}
              onClick={() => join(item._id)}
            >
              {" "}
              Join{" "}
            </button>
          </div>
        ))}
        {/* <div className={styles["exam"]}>
          <img src={examImg} className={styles["exam-img"]} />
          <h4>Introduction to Bioinformatics</h4>
          <div className={styles["exam-content"]}>
            <p>
              {" "}
              <FaUserFriends fontSize={19} /> <span>24 students</span>
            </p>
            <button className={styles["join-exam"]}> Join Exam </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Exams;
