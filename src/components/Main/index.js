import React from "react";
import AcordionComponent from "../Acordion";
import PhotoBox from "../PhotoBox";
import styles from "./main.module.scss";
const MainComponent = () => {
  return (
    <div className={styles.a}>
      <div className={styles.b}>{/* <PhotoBox /> */}</div>
      <AcordionComponent />
    </div>
  );
};

export default MainComponent;
