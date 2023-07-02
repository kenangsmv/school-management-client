import React from "react";
import styles from "./Sidebar.module.scss";
import logo from "../../logoblack.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ title, actions, code, role, id }) => {
  const navigate = useNavigate();

  const navigateRoute = (routeId) => {
    if (role === "teacher") {
      navigate(`/${role}/${routeId}/${id}`);
    } else {
      navigate(`/${role}/${routeId}`);
    }
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["side-nav"]}>
        <div className={styles["logo"]}>
          <img src={logo} />
        </div>
        <div className={styles["nav-menu"]}>
          <ul>
            {actions.map((item) => (
              <li onClick={() => navigateRoute(item.id)}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
