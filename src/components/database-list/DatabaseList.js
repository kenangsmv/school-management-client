import React, { useState, useEffect } from "react";
import styles from "./DatabaseList.module.scss";
import userImg from "../../user.jpg";
import InfoBar from "../user-info-bar/InfoBar";
import Searchbox from "../searchbox/Searchbox";
import api from "../../api";
import { MdModeEdit, MdDelete } from "react-icons/md";

const DatabaseList = () => {
  const [students, setStudents] = useState([]);

  const [teachers, setTeachers] = useState([]);

  const [info, setInfoBar] = useState();

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await api.get(
          "http://localhost:2020/api/v1/student/admin",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        setStudents(response.data.data);
        setRefresh(false);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchStudents();
  }, [refresh]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await api.get(
          "http://localhost:2020/api/v1/teacher/admin",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        setTeachers(response.data.data);
        setRefresh(false);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };
    fetchTeachers();
  }, [refresh]);

  const [list, setList] = useState("student");

  const relatedList = list === "student" ? students : teachers;

  const chooseStudent = (student) => {
    setInfoBar(student);

    console.log("th clicked", student);
  };

  const deleteStudent = async (id, role) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await api.delete(
        `http://localhost:2020/api/v1/${role}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRefresh(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["database-list-container"]}>
      <div className={styles["list-box"]}>
        <Searchbox></Searchbox>
        <h1>Database</h1>
        <ul className={styles["user-list"]}>
          <li onClick={() => setList("student")}>Student</li>
          <li onClick={() => setList("teacher")}>Teacher</li>
        </ul>
        <div className={styles["list-container"]}>
          <table className={styles["list-table"]}>
            <thead>
              <tr className={styles["list-table-header"]}>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th style={{ textAlign: "end", paddingRight: "20px" }}>Edit</th>
              </tr>
            </thead>

            <tbody>
              {relatedList.map((item) => (
                <tr onClick={() => chooseStudent(item)}>
                  <td className={styles["list-user-name"]}>
                    <img src={userImg} className={styles["list-user-img"]} />
                    {item?.name}
                  </td>
                  <td>
                    {list === "student" ? item.studentId : item.teacherId}
                  </td>
                  <td>{item?.email}</td>
                  <td style={{ textAlign: "end" }}>
                    {/* <button
                      className={styles["list-button"]}
                      style={{ background: "#FF7124" }}
                    >
                      <MdModeEdit />
                    </button> */}
                    <button
                      onClick={() => deleteStudent(item?._id, item?.role)}
                      className={styles["list-button"]}
                      style={{ background: "#FF000D" }}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <InfoBar user={info} roleId={list}></InfoBar>
    </div>
  );
};

export default DatabaseList;
