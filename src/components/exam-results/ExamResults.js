import React from "react";
import styles from "./ExamResults.module.scss";
import api from "../../api";

import { useState } from "react";
import { useEffect } from "react";
const ExamResults = () => {
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

  return (
    <div className={styles["list-container"]}>
      <table className={styles["list-table"]}>
        <thead>
          <tr className={styles["list-table-header"]}>
            {/* <th>Course Code</th> */}
            <th>Course Name</th>
            {/* <th>Exams</th> */}
            <th>Grades</th>
            <th>Mark</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          {examResults.map((exRes) => (
            <tr>
              {/* <td >CSE 334</td> */}
              {/* <td>{exRes.subject.code}</td> */}
              <td className={styles["list-exam-name"]}>
                {exRes?.exam.subject?.name}
              </td>
              <td>{exRes?.grade}</td>
              <td>{exRes?.remarks}</td>
              <td>{exRes?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamResults;
