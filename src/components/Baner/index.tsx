import React from "react";
import styles from "./baner.module.scss";

const Baner = () => {
  return (
    <div className={styles.banerBox}>
      <img src="/logo.png" alt="Logo Agnieszka Czapor Fizjoterapia" />
    </div>
  );
};

export default Baner;
