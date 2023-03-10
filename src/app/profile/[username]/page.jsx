'use client'
import React from 'react'
import styles from './profilepage.module.css'

import useUser from '@/app/hooks/useUser'

function ProfilePage ({ params }) {
  const user = useUser()
  return (
    <div className={styles.container}>
      <h1>{user?.displayName}</h1>
      <img alt='' src={user?.photoURL} />
      <button onClick={() => { console.log(user) }}>asdkjas</button>
    </div>
  )
}

export default ProfilePage
