'use client'
import { useAuth } from '@/context/AuthContext'
import { addUser } from '@/firebase/firestore/addData'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './profilepage.module.css'

function ProfilePage () {
  const { currentUser, logOut } = useAuth()
  const router = useRouter()
  const handleclick = () => {
    logOut()
    router.push('/')
  }

  if (!currentUser) {
    console.log(currentUser)
    router.replace('/')
  }

  const handleAddData = async () => {
    const response = await addUser({
      userId: currentUser.uid,
      userName: currentUser.displayName,
      avatar: currentUser.photoURL,
      mainEvents: [''],
      createdAt: currentUser.metadata.creationTime
    })
    console.log(response)
  }

  return (
    <div className={styles.container}>
      <h1>{currentUser && currentUser.displayName}</h1>
      <img alt='' src={currentUser && currentUser.photoURL} />
      <button onClick={handleclick}>log out</button>
      <hr />
      <button onClick={handleAddData}>add Data</button>
      <button onClick={() => console.log(currentUser)}>currentUser</button>
    </div>
  )
}

export default ProfilePage
