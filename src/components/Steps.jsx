import React from "react";
import styles from "@/styles/components/steps.module.scss";

function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <p className={styles.left}>1</p>
        <div className={styles.right}>
          <p className={styles.header}>Step 01</p>
          <p className={styles.body}>Select a conversation</p>
        </div>
      </div>
      <div className={styles.step}>
        <p className={styles.left}>2</p>
        <div className={styles.right}>
          <p className={styles.header}>Step 02</p>
          <p className={styles.body}>Export a chat</p>
        </div>
      </div>
      <div className={styles.step}>
        <p className={styles.left}>3</p>
        <div className={styles.right}>
          <p className={styles.header}>Step 03</p>
          <p className={styles.body}>Upload file</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
