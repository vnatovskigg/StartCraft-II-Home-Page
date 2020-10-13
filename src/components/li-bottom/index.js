import React, { useEffect, useState } from "react";
import styles from "./index.module.css";


const BotLi = ({text}) => {
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleMouseIn = () => {
    setActive(true)
  }

  const handleMouseOut = () => {
    if(!clicked) {
      setActive(false);
    }
   
  }


  useEffect(() => {
    if(clicked) {
      setActive(!active)
    }
  }, [])


  return (
    <li  onClick={handleClick} 
         onMouseEnter={handleMouseIn} 
         onMouseLeave={handleMouseOut}
         className={ clicked ? styles['list-item-active'] : styles["list-item"]}
      >
        <p>{text}</p>
        {active && (
          <div className={active ? styles.on : styles.off}></div>
        )}
    </li>
  )
};

export default BotLi;
