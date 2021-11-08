import React from "react";
import styles from "./dashboard.module.css";

function Dashboard(props) {
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Dashboard</h1>
        <button className={styles.logoutBtn}>Logout</button>
      </div>
      <p>Welcome to the dashboard</p>
    </div>
  );
}

export default Dashboard;
