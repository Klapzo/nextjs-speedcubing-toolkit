import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'
import LogInButton from './LogInButton'
import UserIcon from './UserIcon'

function LogIn () {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      {currentUser ? <UserIcon imageURL={currentUser.photoURL} /> : <LogInButton />}
    </>
  )
}

export default LogIn
