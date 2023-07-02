import React from "react";
import styles from "./Database.module.scss";
import DatabaseList from "../database-list/DatabaseList";

const Database = () => {
  return (
    <div className={styles["database"]}>
      <DatabaseList></DatabaseList>
    </div>
  );
};

export default Database;
