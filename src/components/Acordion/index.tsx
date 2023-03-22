import React from "react";
import { useState } from "react";
import styles from "./acordion.module.scss";
import { DATA } from "../../../public/DATA";
const AcordionComponent = () => {
  const [isActive, setIsActive] = useState<number>();

  function handleClick(i) {
    if (isActive === i) {
      return setIsActive(undefined);
    }
    setIsActive(i);
    console.log({ isActive });
  }

  return (
    <div className={styles.acordionBox}>
      <div className={styles.acordion}>
        {DATA.map((item, i) => (
          <div className={styles.item} key={i}>
            <div
              onClick={() => {
                handleClick(i);
              }}
              className={styles.title}
            >
              <h2>{item.name}</h2>
              <span>{isActive === i ? "-" : "+"}</span>
            </div>
            <div className={isActive === i ? styles.desc : styles.descHidden}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcordionComponent;
