import React from "react";

import styles from "@/styles/components/cards/activemember.module.scss";

function MostActiveMember({ name, count }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Most active member</p>
        <p className={styles.subtitle}>
          This person never let your group convo dull
        </p>
      </header>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.count}>{count} messages</p>
      </div>
    </div>
  );
}

export default MostActiveMember;
