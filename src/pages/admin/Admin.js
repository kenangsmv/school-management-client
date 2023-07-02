import React, { useState, useEffect } from "react";
import styles from "./Admin.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import api from "../../api";
import { Outlet } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";

const Admin = () => {
  const adminActions = [
    {
      id: "registeruser",
      title: "Register",
      icon: <BsPersonPlus color="#838F9F" fontSize={25} />,
    },
    {
      id: "create",
      title: "Create",
      icon: <MdOutlineCreateNewFolder color="#838F9F" fontSize={25} />,
    },
    {
      id: "database",
      title: "Database",
      icon: <AiOutlineFile color="#838F9F" fontSize={25} />,
    },
  ]; //"Register", "Create", "List Students", "List Teachers"

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await api.get(
          "http://localhost:2020/api/v1/admin/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAdmin(response.data.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className={styles["admin-page"]}>
      <Sidebar
        actions={adminActions}
        title={admin?.name}
        code=""
        role="admin"
      ></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Admin;
