"use client"
import React from 'react'
import styles from './loadingscreen.module.css'
function LoadingScreen () {
  return (
    <div className={styles.container}>

      <div class={styles.loader}>
        <div className={styles.cell + ' ' + styles.d0} />
        <div className={styles.cell + ' ' + styles.d1} />
        <div className={styles.cell + ' ' + styles.d2} />

        <div className={styles.cell + ' ' + styles.d1} />
        <div className={styles.cell + ' ' + styles.d2} />

        <div className={styles.cell + ' ' + styles.d2} />
        <div className={styles.cell + ' ' + styles.d3} />

        <div className={styles.cell + ' ' + styles.d4} />
        <div className={styles.cell + ' ' + styles.d3} />

      </div>
    </div>

  )
}

export default LoadingScreen
