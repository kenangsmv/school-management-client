import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Landing.module.scss";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [deneme, setDeneme] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    const dataId = e.currentTarget.getAttribute("data-id");
    navigate(`/login?${dataId}`);
  };

  return (
    <div className={styles["role-selection"]}>
      <Navbar></Navbar>
      <ul>
        <li data-id="student" onClick={handleClick}>
          Ogrenci Girisi
        </li>
        <li data-id="teacher" onClick={handleClick}>
          Akademisyen girisi
        </li>
        <li data-id="admin" onClick={handleClick}>
          Admin girisi
        </li>
      </ul>
    </div>
  );
};

export default Landing;
