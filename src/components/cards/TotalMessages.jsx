import React from 'react'
import styles from "@/styles/components/cards/activemember.module.scss";

function TotalMessages({count}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Total messages</p>
        <p className={styles.subtitle}>
        A grand total of all the texts, laughs, and emojis that kept you connected
        </p>
      </header>
      <div className={styles.content}>
        <p className={styles.name}>{count}</p>
      </div>
    </div>
  )
}

export default TotalMessages