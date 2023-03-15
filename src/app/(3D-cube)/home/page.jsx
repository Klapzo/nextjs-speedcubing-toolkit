'use client'
import MainButton from '@/app/(3D-cube)/home/components/MainButton/MainButton'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Title from './components/Title/Title'
import styles from './home.module.css'

function Home () {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (expanded) return
    setExpanded(prev => !prev)
    setTimeout(() => {
      router.push('/account')
    }, 500)
  }
  return (
    <>
      <div className={styles.container}>
        <Title buttonExpanded={expanded} />
        <MainButton handleClick={handleClick} expanded={expanded} />
      </div>
    </>
  )
}

export default Home
