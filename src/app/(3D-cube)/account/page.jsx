'use client'
import React from 'react'
import styles from './form.module.css'
import { Quicksand } from 'next/font/google'
import Form from './components/Form'
import { FormProvider } from '@/context/FormContext'

export const QuicksandFont = Quicksand({ subsets: ['latin'], weight: '400' })

function Account () {
  return (

    <div className={styles.container + ' ' + QuicksandFont.className}>
      <FormProvider>

        <Form />
      </FormProvider>

    </div>

  )
}

export default Account
