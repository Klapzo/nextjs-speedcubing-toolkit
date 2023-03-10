import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUpwithGoogle, signUpWithEmail } from '@/firebase/auth/signup'
import { motion } from 'framer-motion'

import styles from '../signup.module.css'
import { FormContext } from '@/context/FormContext'
import UsernameInput from './UsernameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import ButtonGroup from './ButtonGroup'
import logIn from '@/firebase/auth/login'
import ErrorMessage from './ErrorMessage'

function Form () {
  const [email, setEmail] = useState('')
  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')

  const router = useRouter()

  const clearForm = () => {
    setEmail('')
    setNickName('')
    setPassword('')
    setRepeatPassword('')
  }

  const toggleLogin = () => {
    setError('')
    clearForm()
    setIsLogin(prev => !prev)
  }

  const handleGoogleSignUp = async (e) => {
    e.preventDefault()

    const { error } = await signUpwithGoogle()
    clearForm()
    if (error) {
      return setError(error)
    }

    return router.push('/profile')
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

  const handleLogIn = async (e) => {
    e.preventDefault()

    const { error } = await logIn(email, password)
    clearForm()

    if (error) {
      console.log(error.code)
      return setError(error)
    }

    return router.push('/profile')
  }
  return (

    <FormContext.Provider value={{
      email,
      setEmail,
      nickName,
      setNickName,
      password,
      setPassword,
      handleGoogleSignUp,
      isLogin,
      setIsLogin,
      toggleLogin,
      repeatPassword,
      setRepeatPassword
    }}
    >
      <form onSubmit={isLogin ? handleLogIn : handleSignUp} className={styles.form}>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={styles.wrapper}>
          <h2> {isLogin ? 'LOG IN ' : 'REGISTER'} </h2>

          {/* {isLogin || <UsernameInput />} */}
          <EmailInput />
          <PasswordInput />
          <ErrorMessage>{error.code}</ErrorMessage>
          <ButtonGroup />
        </motion.div>
      </form>
    </FormContext.Provider>

  )
}

export default Form
