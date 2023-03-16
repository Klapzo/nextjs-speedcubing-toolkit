'use client'
import React from 'react'
import { useAccountForm } from '@/context/FormContext'
import { motion } from 'framer-motion'
import styles from './../form.module.css'
import ButtonGroup from './components/ButtonGroup'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import ErrorMessage from './components/ErrorMessage'

function Form () {
  const { isLogin, error } = useAccountForm()

  const formattedError = (error) => error.code.split('/')[1].split('-').join(' ').toUpperCase()
  return (
    <form className={styles.form}>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={styles.wrapper}>

        {isLogin
          ? <LogInForm />
          : <SignUpForm />}
        {error && <ErrorMessage>{formattedError(error)}</ErrorMessage>}
        <ButtonGroup />
      </motion.div>
    </form>
  )
}

export default Form
