import * as React from "react";
import styles from "./LoginAlert.module.scss";
import { Link } from "@docusaurus/router";

const LoginAlert = () => {
  return (
    <div className={styles.noLoginAlert}>
      <span className="badge badge--danger">⚠️ Nicht Eingeloggt</span> Speichern
      nur mit GBSL-Login möglich. <Link to="/login">Login</Link>
    </div>
  );
};

export default LoginAlert;
