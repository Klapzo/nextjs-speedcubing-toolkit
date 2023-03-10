import React from 'react'
import LogInButton from './LogInButton'
import UserIcon from './userIcon'
import useUser from '@/app/hooks/useUser'

function LogIn () {
  const user = useUser()
  return (
    <>
      {user ? <UserIcon imageURL={user.photoURL} /> : <LogInButton />}
    </>
  )
}

export default LogIn
