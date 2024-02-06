import React from "react";

import styles from "@/styles/components/cards/activemember.module.scss";

function AvgNumberOfMessages({count}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Average number of messages</p>
        <p className={styles.subtitle}>
          Discover how active your conversations were over the year
        </p>
      </header>
      <div className={styles.content}>
        <p className={styles.name}>{count} messages <br/> per day</p>
      </div>
    </div>
  );
}

export default AvgNumberOfMessages;
