'use client'
import React from 'react'
import Cube from '@/components/Cube/Cube'
import Title from '@/components/Title/Title'
import styles from './../home.module.css'

function Home () {
  return (
    <div className={styles.home}>
      <Cube />
      <Title />
    </div>
  )
}

export default Home
