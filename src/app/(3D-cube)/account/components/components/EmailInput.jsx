import React from 'react'
import { TextInput } from '@mantine/core'
import styles from './formcomponents.module.css'
import { useAccountForm } from '@/context/FormContext'

function EmailInput () {
  const { email, setEmail } = useAccountForm()

  const handleEmailChange = (e) => {
    const email = e.target.value

    setEmail(email)
  }

  return (

    <TextInput
      className={styles.Input}
      placeholder='Email'
      label='Email'
      radius='xl'
      onChange={handleEmailChange}
      value={email}
    />

  )
}

export default EmailInput
