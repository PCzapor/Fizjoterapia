import React from "react";
import { useState } from "react";
import { KURSY, WARSZTATY, WYKSZTALCENIE } from "../../fixtures";
import styles from "./list.module.scss";
const ListComponent = () => {
  const [isActive, setIsActive] = useState();
  const [isActive1, setIsActive1] = useState();
  const [isActive2, setIsActive2] = useState();
  function handleClick() {
    setIsActive(!isActive);
  }
  function handleClick1() {
    setIsActive1(!isActive1);
  }
  function handleClick2() {
    setIsActive2(!isActive2);
  }

  return (
    <div className={styles.container}>
      <div className={styles.listBox}>
        <h2 onClick={handleClick}>WYKSZTAŁCENIE</h2>
        {WYKSZTALCENIE.map((item, i) => {
          return (
            <ul key={i} className={isActive ? styles.desc : styles.descHidden}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
      <div className={styles.listBox}>
        <h2 onClick={handleClick1}>KURSY</h2>
        {KURSY.map((item, i) => {
          return (
            <ul key={i} className={isActive1 ? styles.desc : styles.descHidden}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
      <div className={styles.listBox}>
        <h2 onClick={handleClick2}>WARSZTATY</h2>
        {WARSZTATY.map((item, i) => {
          return (
            <ul key={i} className={isActive2 ? styles.desc : styles.descHidden}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ListComponent;
