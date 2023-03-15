import Cube from '@/app/(3D-cube)/components/Cube/Cube'
import React from 'react'
import styles from './home/home.module.css'

function CubeLayout ({ children }) {
  return (

    <div className={styles.layout}>
      <Cube />
      {children}
    </div>

  )
}

export default CubeLayout
