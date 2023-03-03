'use client'
import styles from './cube.module.css'
import Spline from '@splinetool/react-spline'

export default function Cube () {
  return (
    <>
      <Spline
        className={styles.cubeCanvas}
        scene='https://draft.spline.design/tTxX6hSQBHfhRsys/scene.splinecode'
      />
      <canvas className={styles.cubeBackground} />
    </>
  )
}
