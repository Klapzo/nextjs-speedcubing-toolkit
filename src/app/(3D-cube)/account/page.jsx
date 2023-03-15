'use client'
import React from 'react'
import styles from './form.module.css'
import { Quicksand } from 'next/font/google'
import Form from './components/Form'

export const QuicksandFont = Quicksand({ subsets: ['latin'], weight: '400' })

function Account () {
  return (

    <div className={styles.container + ' ' + QuicksandFont.className}>

      <Form />

    </div>

  )
}

export default Account
