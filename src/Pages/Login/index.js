import React from "react";

import styles from "./login.module.css";

function Login(props) {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login Page</h1>

        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="email">Username</label>
              <input type="text" id="email" />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <button>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
