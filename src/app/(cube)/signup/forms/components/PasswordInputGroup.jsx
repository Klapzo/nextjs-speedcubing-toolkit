import React, { useContext, useEffect, useState } from 'react'
import { PasswordInput } from '@mantine/core'
import { FormContext } from '@/context/FormContext'
import styles from './formcomponents.module.css'
import { useDisclosure } from '@mantine/hooks'
function PasswordInputGroup ({ double }) {
  const [visible, { toggle }] = useDisclosure(false)
  const { password, setPassword } = useContext(FormContext)
  const { repeatPassword, setRepeatPassword } = useContext(FormContext)
  const [error, setError] = useState('')

  const handlePasswordChange = (e) => {
    const password = e.target.value

    setPassword(password)

    if (error) return setError(error)

    setError('')
  }
  const handleRepeatPasswordChange = (e) => {
    const password = e.target.value

    setRepeatPassword(password)

    if (error) return setError(error)

    setError('')
  }

  return (
    <>
      <PasswordInput
        className={styles.Input}
        placeholder='Password'
        label='Password'
        description={double || 'Use 8 or more characters with a mix of letters, numbers & symbols'} error={error && error}
        radius='xl'
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handlePasswordChange}
        value={password}
        visible={visible}
        onVisibilityChange={toggle}
      />
      {
    double && <PasswordInput
      className={styles.Input}
      placeholder='Confirm'
      description='Use 8 or more characters
      with a mix of letters, numbers & symbols'
      error={error && error}
      radius='xl'
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      onChange={handleRepeatPasswordChange}
      value={repeatPassword}
      visible={visible}
      onVisibilityChange={toggle}
              />
}
    </>

  )
}

export default PasswordInputGroup
