import React from "react";
import styles from "./index.module.css";

const Nav = (props) => {
  return (
    <div className={styles[`${props.position}-container`]}>
      <ul className={styles.list}>{props.children}</ul>
    </div>
  );
};

export default Nav;
