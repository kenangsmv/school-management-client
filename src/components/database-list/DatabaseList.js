import React from "react";
import styles from "./DatabaseList.module.scss";
import userImg from "../../user.jpg";
import InfoBar from "../user-info-bar/InfoBar";
import Searchbox from "../searchbox/Searchbox";

const DatabaseList = () => {
  return (
    <div className={styles["database-list-container"]}>
      <div className={styles["list-box"]}>
        <Searchbox></Searchbox>
        <h1>Database</h1>
        <ul className={styles["user-list"]}>
          <li>Student</li>
          <li>Teacher</li>
        </ul>
        <div className={styles["list-container"]}>
          <table className={styles["list-table"]}>
            <thead>
              <tr className={styles["list-table-header"]}>
                <th>Name</th>
                <th>ID</th>
                <th>Class</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
              <tr>
                <td className={styles["list-user-name"]}>
                  <img src={userImg} className={styles["list-user-img"]} />
                  Kanan Gasimov
                </td>
                <td>SC400120</td>
                <td>Science 4</td>
                <td>rio.lenan@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <InfoBar></InfoBar>
    </div>
  );
};

export default DatabaseList;
