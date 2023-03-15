'use client'
import React, { useState } from 'react'
import { FormContext } from '@/context/FormContext'
import { motion } from 'framer-motion'
import styles from './../form.module.css'
import ButtonGroup from './components/ButtonGroup'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

function Form () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  return (
    <FormContext.Provider value={{
      email,
      setEmail,
      password,
      setPassword,
      error,
      setError,
      isLogin,
      setIsLogin
    }}
    >
      <form className={styles.form}>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={styles.wrapper}>
          {isLogin ? <LogInForm /> : <SignUpForm />}
          <ButtonGroup />
        </motion.div>
      </form>
    </FormContext.Provider>
  )
}

export default Form
