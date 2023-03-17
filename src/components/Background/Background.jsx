import React from 'react'
import styles from './backround.module.css'

function Background ({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} />
      <div className={styles.circle} />

      {children}
      <div className={styles.circle} />
      <div className={styles.dots} />
    </div>
  )
}

export default Background
