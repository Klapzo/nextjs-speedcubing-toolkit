import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import EmailInput from './components/EmailInput'
import PasswordInputGroup from './components/PasswordInputGroup'
import Submit from './components/SubmitButton'
import { AuthContext } from '@/context/AuthContext'

function SignUpForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUpWithEmail } = useContext(AuthContext)

  const router = useRouter()

  const clearForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const { error } = await signUpWithEmail(email, password)
    clearForm()

    if (error) {
      return setError(error)
    }

    return router.push('/profile')
  }

  return (
    <>
      <h2> REGISTER </h2>
      <EmailInput />
      <PasswordInputGroup double />
      <Submit onClick={handleSignUp} text='register' />
    </>

  )
}

export default SignUpForm
