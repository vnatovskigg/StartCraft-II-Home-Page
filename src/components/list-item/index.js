import React from "react";
import styles from "./index.module.css";

const Li = ({text, isCurrent}) => {
  let current = isCurrent ? <div className="bounds"></div> : '';
  return (
    <li className={isCurrent ? styles.current : styles["list-item"]}>
        <a href="#">{text}</a>
        {current}
    </li>
  )
};

export default Li;
