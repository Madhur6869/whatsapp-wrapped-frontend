import React from "react";

import styles from "@/styles/components/cards/activemember.module.scss";

function AvgResponseTime({time}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Average response time</p>
        <p className={styles.subtitle}>
          Find out how quickly your group fires back those messages
        </p>
      </header>
      <div className={styles.content}>
        <p className={styles.name}>{time}</p>
      </div>
    </div>
  );
}

export default AvgResponseTime;
