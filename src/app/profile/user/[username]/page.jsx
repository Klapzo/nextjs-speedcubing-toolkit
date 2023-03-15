'use client'
import { useUser } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './profilepage.module.css'

function ProfilePage () {
  const { currentUser, logOut } = useUser()
  const router = useRouter()
  const handleclick = () => {
    logOut()
    router.push('/')
  }

  if (!currentUser) {
    console.log(currentUser)
    router.replace('/')
  }

  return (
    <div className={styles.container}>
      <h1>{currentUser && currentUser.displayName}</h1>
      <img alt='' src={currentUser && currentUser.photoURL} />
      <button onClick={handleclick}>log out</button>
    </div>
  )
}

export default ProfilePage
