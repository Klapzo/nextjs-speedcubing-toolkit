'use client'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './myprofile.module.css'
import { Hind } from 'next/font/google'
import { FiEdit } from 'react-icons/fi'
import { ActionIcon, Button } from '@mantine/core'

const HindFont = Hind({ subsets: ['latin'], weight: ['300', '700'] })

function MyProfile () {
  const { currentUser, logOut } = useAuth()
  const router = useRouter()

  const handleclick = () => {
    logOut()
    router.push('/')
  }

  if (!currentUser) {
    router.replace('/')
  }

  return (
    <div className={styles.container + ' ' + HindFont.className}>
      <h1>PROFILE</h1>

      {/* <button onClick={handleclick}>log out</button> */}
    </div>
  )
}

export default MyProfile
