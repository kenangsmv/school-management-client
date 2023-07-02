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
      <div
        className={styles["register-side"]}
        style={{
          backgroundImage: `radial-gradient(circle at top right, rgba(134, 134, 134,0.6), rgba(0,0,0,0.99)), url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Register;
