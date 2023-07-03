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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["create-background"]}
      >
        <path
          fill="#DB5A52"
          fill-opacity="0.93"
          d="M0,64L30,90.7C60,117,120,171,180,170.7C240,171,300,117,360,90.7C420,64,480,64,540,69.3C600,75,660,85,720,106.7C780,128,840,160,900,160C960,160,1020,128,1080,96C1140,64,1200,32,1260,21.3C1320,11,1380,21,1410,26.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["create-background"]}
      >
        <path
          fill="#217368"
          fill-opacity="0.93"
          d="M0,224L34.3,192C68.6,160,137,96,206,64C274.3,32,343,32,411,58.7C480,85,549,139,617,133.3C685.7,128,754,64,823,80C891.4,96,960,192,1029,208C1097.1,224,1166,160,1234,112C1302.9,64,1371,32,1406,16L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["create-background"]}
      >
        <path
          fill="#91AE4C"
          fill-opacity="0.93"
          d="M0,32L34.3,42.7C68.6,53,137,75,206,117.3C274.3,160,343,224,411,224C480,224,549,160,617,122.7C685.7,85,754,75,823,58.7C891.4,43,960,21,1029,16C1097.1,11,1166,21,1234,58.7C1302.9,96,1371,160,1406,192L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["create-background"]}
      >
        <path
          fill="#BFDB2B"
          fill-opacity="0.93"
          d="M0,256L30,245.3C60,235,120,213,180,218.7C240,224,300,256,360,250.7C420,245,480,203,540,197.3C600,192,660,224,720,245.3C780,267,840,277,900,272C960,267,1020,245,1080,229.3C1140,213,1200,203,1260,213.3C1320,224,1380,256,1410,272L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Create;
