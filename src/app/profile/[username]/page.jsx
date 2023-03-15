'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'
import styles from './profilepage.module.css'

function ProfilePage ({ params }) {
  const user = useContext(AuthContext)
  return (
    <div className={styles.container}>
      <h1>{user?.displayName}</h1>
      <img alt='' src={user?.photoURL} />
      <button onClick={() => { console.log(user) }}>asdkjas</button>
    </div>
  )
}

export default ProfilePage
