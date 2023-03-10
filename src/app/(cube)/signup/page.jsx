'use client'
import React from 'react'
import styles from './signup.module.css'
import { Quicksand } from 'next/font/google'
import Form from './form/Form'

export const QuicksandFont = Quicksand({ subsets: ['latin'], weight: '400' })

function SignUp () {
  return (

    <div className={styles.container + ' ' + QuicksandFont.className}>

      <Form />

    </div>

  )
}

export default SignUp
