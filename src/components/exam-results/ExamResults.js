import React from "react";
import styles from "./ExamResults.module.scss";
const ExamResults = () => {
  return (
    <div className={styles["list-container"]}>
      <table className={styles["list-table"]}>
        <thead>
          <tr className={styles["list-table-header"]}>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grades</th>
            <th>Mark</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 334</td>
            <td>Programming Languages</td>
            <td>81</td>
            <td>BA</td>
            <td>Geçti</td>
          </tr>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 358</td>
            <td>Introduction to Artificial Intelligence</td>
            <td>58</td>
            <td>CB</td>
            <td>Geçti</td>
          </tr>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 424</td>
            <td>Introduction to Blockchain</td>
            <td>95</td>
            <td>AA</td>
            <td>Geçti</td>
          </tr>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 472</td>
            <td>Information Systems Security</td>
            <td>95</td>
            <td>AA</td>
            <td>Geçti</td>
          </tr>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 334</td>
            <td>Programming Languages</td>
            <td>81</td>
            <td>BA</td>
            <td>Geçti</td>
          </tr>
          <tr>
            <td className={styles["list-exam-name"]}>CSE 334</td>
            <td>Programming Languages</td>
            <td>81</td>
            <td>BA</td>
            <td>Geçti</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamResults;
