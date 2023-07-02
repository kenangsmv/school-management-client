import React from "react";
import styles from "./Create.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api";

const Create = () => {
  const [courseName, setCourseName] = useState("");
  const [academicTerm, setAcademicTerm] = useState("");
  const [program, setProgram] = useState("");
  const [teacher, setTeacher] = useState("");

  const [allProgram, setAllProgram] = useState([]);
  const [allAcademicTerms, setAllAcademicTerms] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };
  const handleAcademicTermChange = (event) => {
    setAcademicTerm(event.target.value);
  };
  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };
  const handleTeacherChange = (event) => {
    setTeacher(event.target.value);
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await api.get(
          "http://localhost:2020/api/v1/programs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllProgram(response.data.data);
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchPrograms();

    const fetchAcademicTerm = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await api.get(
          "http://localhost:2020/api/v1/academic-terms",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllAcademicTerms(response.data.data);
      } catch (error) {
        console.error("Failed to fetch terms:", error);
      }
    };

    fetchAcademicTerm();

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

        setAllTeachers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch teacher:", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleCreationFormSubmit = async (event) => {
    event.preventDefault();
    // if (validation()) {
    //   console.log("sumbit");
    //   }
    try {
      const token = localStorage.getItem("adminToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/subjects/${program}`,
        {
          name: courseName,
          teacher,
          academicTerm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course created successfully");
    } catch (error) {
      console.error("Failed to create Course:", error);
      alert("Failed to create Course");
    }

    setCourseName("");
    setProgram("");
    setAcademicTerm("");
    setTeacher("");
  };

  return (
    <div className={styles["create"]}>
      <form onSubmit={handleCreationFormSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={courseName}
            onChange={handleCourseNameChange}
            placeholder="Ex: Bioinformatics"
            required
          />
        </label>

        <div className={styles["selection"]}>
          <label>
            <span>Choose Program:</span>
            <select value={program} onChange={handleProgramChange} required>
              <option value="">None</option>
              {allProgram.map((item) => (
                <option value={item._id}>{item.name}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Choose Academic Term:</span>
            <select
              value={academicTerm}
              onChange={handleAcademicTermChange}
              required
            >
              <option value="">None</option>
              {allAcademicTerms.map((item) => (
                <option value={item._id}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          <span>Assign Teacher:</span>
          <select value={teacher} onChange={handleTeacherChange} required>
            <option value="">None</option>
            {allTeachers.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles["create-button"]}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
