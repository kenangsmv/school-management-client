import React from "react";
import styles from "./Searchbox.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbox = () => {
  return (
    <div className={styles["searchbox"]}>
      <AiOutlineSearch></AiOutlineSearch>
      <input type="text" placeholder="Search for students, teachers..." />
    </div>
  );
};

export default Searchbox;
