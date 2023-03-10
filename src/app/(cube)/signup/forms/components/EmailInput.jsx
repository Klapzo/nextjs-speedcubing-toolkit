import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '@/context/FormContext'
import { TextInput } from '@mantine/core'
import styles from './formcomponents.module.css'

function EmailInput () {
  const { email, setEmail } = useContext(FormContext)
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    const email = e.target.value

    setEmail(email)
  }

  return (

    <TextInput
      className={styles.Input}
      placeholder='Email'
      label='Email'
      error={error && error}
      radius='xl'
      onChange={handleEmailChange}
      value={email}
    />

  )
}

export default EmailInput
