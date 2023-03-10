import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import EmailInput from './components/EmailInput'
import PasswordInputGroup from './components/PasswordInputGroup'
import Submit from './components/SubmitButton'
import { AuthContext } from '@/context/AuthContext'
function LogInForm () {
  const router = useRouter()
  const { logIn } = useContext(AuthContext)
  const handleLogIn = async (e) => {
    e.preventDefault()

    const { error } = await logIn(email, password)

    if (error) {
      console.log(error.code)
      return setError(error)
    }

    return router.push('/profile')
  }
  return (
    <>
      <h2> LOG IN </h2>
      <EmailInput />
      <PasswordInputGroup />
      <Submit onClick={handleLogIn} text='log in' />
    </>

  )
}

export default LogInForm
