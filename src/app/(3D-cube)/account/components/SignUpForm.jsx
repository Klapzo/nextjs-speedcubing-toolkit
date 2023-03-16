import React from 'react'
import { useRouter } from 'next/navigation'
import EmailInput from './components/EmailInput'
import PasswordInputGroup from './components/PasswordInputGroup'
import Submit from './components/SubmitButton'
import { useAuth } from '@/context/AuthContext'
import { useAccountForm } from '@/context/FormContext'

function SignUpForm () {
  const { signUpWithEmail } = useAuth()
  const { clearForm, email, password, setError } = useAccountForm()
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    const { error } = await signUpWithEmail(email, password)
    clearForm()

    if (error) {
      return setError(error)
    }

    return router.push('/profile/complete')
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
