'use client'
import styles from './cube.module.css'
import Spline from '@splinetool/react-spline'
import { useState } from 'react'

export default function Cube () {
  const [loaded, setLoaded] = useState(false)
  return (
    <>

      <Spline
        onLoad={() => setLoaded(true)}
        className={styles.cubeCanvas + ' ' + (loaded ? styles.loaded : '')}
        scene='https://draft.spline.design/CjgjrJRL0f-tbUcs/scene.splinecode'
      />
      <canvas className={styles.cubeBackground} />
    </>
  )
}
