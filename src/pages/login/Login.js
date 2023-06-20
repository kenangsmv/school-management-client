import React, { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    setUsername(""); // Clear the input field
    setPassword(""); // Clear the input field
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update state with new input value
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update state with new input value
  };

  return (
    <div className={styles["login"]}>
      <form>
        <label>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Ogrenci No"/>
        </label>
        <label>
          <input type="text" value={password} onChange={handlePasswordChange} placeholder="Password"/>
        </label>
        <input type="submit" value="Login" className={styles["login-button"]} />
      </form>
    </div>
  );
};

export default Login;
