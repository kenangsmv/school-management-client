import React, { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import backgroundImg from "../../register-background.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [classLevels, setClassLevel] = useState("");
  const [program, setProgram] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleClassLevel = (event) => {
    setClassLevel(event.target.value);
  };
  const handleProgram = (event) => {
    setProgram(event.target.value);
  };
  //   const validation = () => {
  //     let filled = true;
  //     if (!name && !surname && !email && !role && !classLevel && !password) {
  //       filled = !filled;
  //     }
  //     return filled;
  //   };

  const handleRegistrationFormSubmit = async (event) => {
    event.preventDefault();
    // if (validation()) {
    //   console.log("sumbit");
    //   }
    try {
      const token = localStorage.getItem("adminToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/${role}/admin/register`,
        {
          name: name + surname,
          email,
          password,
          role,
          classLevels,
          program,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(`${role} registered successfully`);
    } catch (error) {
      console.error(`Failed to register ${role}:`, error);
      alert(`Failed to register ${role}`);
    }

    setName("");
    setSurname("");
    setEmail("");
    setRole("");
    setPassword("");
  };

  return (
    <div className={styles["register"]}>
      <form onSubmit={handleRegistrationFormSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={handleUsernameChange}
            placeholder="Ex: Kanan"
            required
          />
        </label>
        <label>
          <span>Surname:</span>
          <input
            type="text"
            value={surname}
            onChange={handleSurnameChange}
            placeholder="Ex: Gasimov"
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ex: rio@gmail.com"
            required
          />
        </label>
        <div className={styles["selection"]}>
          <label>
            <span>Choose Role:</span>
            <select value={role} onChange={handleRoleChange} required>
              <option value="">None</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </label>
          <label>
            <span>Choose Class Level:</span>
            <select
              value={classLevels}
              onChange={handleClassLevel}
              required
              disabled={role === "teacher" || role === ""}
            >
              <option value="">None</option>
              <option value="648e1275549642ebae051afd"> 1</option>
              <option value="648e127c549642ebae051b04"> 2</option>
              <option value="648e1285549642ebae051b0b"> 3</option>
            </select>
          </label>
        </div>
        <label>
          <span>Choose Program:</span>
          <select value={program} onChange={handleProgram} required>
            <option value="">None</option>
            <option value="648e0f9f549642ebae051abf">
              {" "}
              Computer Engineering
            </option>
          </select>
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="*****"
            required
          />
        </label>
        <button type="submit" className={styles["register-button"]}>
          Register
        </button>
      </form>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["register-background"]}
      >
        <path
          fill="#DB5A52"
          fill-opacity="0.93"
          d="M0,64L30,80C60,96,120,128,180,128C240,128,300,96,360,85.3C420,75,480,85,540,101.3C600,117,660,139,720,165.3C780,192,840,224,900,229.3C960,235,1020,213,1080,192C1140,171,1200,149,1260,149.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["register-background"]}
      >
        <path
          fill="#005C53"
          fill-opacity="0.93"
          d="M0,288L48,266.7C96,245,192,203,288,165.3C384,128,480,96,576,69.3C672,43,768,21,864,42.7C960,64,1056,128,1152,176C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["register-background"]}
      >
        <path
          fill="#83AD3C"
          fill-opacity="0.93"
          d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles["register-background"]}
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

export default Register;
