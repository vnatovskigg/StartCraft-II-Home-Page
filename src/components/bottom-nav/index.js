import React from "react";
import styles from "./index.module.css";

const BottomNav = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>{props.children}</ul>
    </div>
  );
};

export default BottomNav;
