import Cube from '@/components/Cube/Cube'
import React from 'react'
import styles from './home.module.css'

function CubeLayout ({ children }) {
  return (

    <div className={styles.layout}>
      <Cube />
      {children}
    </div>

  )
}

export default CubeLayout
