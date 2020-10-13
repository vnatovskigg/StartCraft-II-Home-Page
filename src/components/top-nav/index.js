import React from "react";
import styles from "./index.module.css";
import profilePic from '../../assets/profile.jpeg';

const TopNav = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>{props.children}</ul>
        <div className={styles.profile}>
              <img src={profilePic} alt="profile-picture" />

                <div className={styles["shadow"]}></div>
                <div className={styles["background"]}></div>
                <div className={styles["inner-glow"]}></div>
                <div className={styles["inner-shadow"]}></div>

                <div className={styles["bar-left"]}></div>
                <div className={styles["bar-right"]}></div>
                <div className={styles["bar-down"]}></div>
                <div className={styles["bar-top"]}></div>
          </div>
    </div>
  );
};

export default TopNav;
