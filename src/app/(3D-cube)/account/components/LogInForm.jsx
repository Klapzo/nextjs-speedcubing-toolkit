import React from 'react'
import { useRouter } from 'next/navigation'
import EmailInput from './components/EmailInput'
import PasswordInputGroup from './components/PasswordInputGroup'
import Submit from './components/SubmitButton'
import { useAccountForm } from '@/context/FormContext'
import { useAuth } from '@/context/AuthContext'

function LogInForm () {
  const router = useRouter()
  const { email, password, setError } = useAccountForm()
  const { logIn } = useAuth()

  const handleLogIn = async (e) => {
    e.preventDefault()

    const { error } = await logIn(email, password)

    if (error) {
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
