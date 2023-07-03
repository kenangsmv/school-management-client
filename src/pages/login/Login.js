import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import Navbar from "../../components/navbar/Navbar";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import SVG from "../../components/svgs/SVG";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setLogin(event.target.value); // Update state with new input value
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update state with new input value
  };

  const [keyword, setKeyword] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      setKeyword(pair[0]);
      break;
    }

    if (keyword === "student") {
      setPlaceholder("Student No");
    } else {
      setPlaceholder("Email");
    }
  }, [keyword]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (keyword === "student") {
      try {
        const response = await api.post(
          "http://localhost:2020/api/v1/student/login",
          {
            studentId: login,
            password,
          }
        );
        const token = response.data.data;

        if (token) {
          // Store the token in local storage (or another secure place)
          localStorage.setItem("studentToken", token);
          console.log("Student logged in successfully:", response.data.message);
          navigate(`/student/genel-bilgiler/courses/${token?._id}`);
        }
      } catch (error) {
        console.error("Failed to log in:", error);
      }
    }

    if (keyword === "admin" || keyword === "teacher") {
      try {
        const response = await api.post(
          `http://localhost:2020/api/v1/${keyword}/login`,
          {
            email: login,
            password,
          }
        );
        const token = response.data.data;

        if (token) {
          // Store the token in local storage (or another secure place)
          localStorage.setItem(`${keyword}Token`, token);
          if (keyword === "admin") {
            navigate(`/${keyword}/database`);
          } else {
            navigate(`/${keyword}`);
          }
          console.log("logged in successfully:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to log in:", error);
      }
    }
  };

  return (
    <div className={styles["login"]}>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={login}
            onChange={handleUsernameChange}
            placeholder={placeholder}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </label>
        <button type="submit" className={styles["login-button"]}>
          {" "}
          Login{" "}
        </button>
      </form>
      <SVG></SVG>
    </div>
  );
};

export default Login;
