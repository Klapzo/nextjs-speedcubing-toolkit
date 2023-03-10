import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  FormHelperText
} from '@chakra-ui/react'
import { FormContext } from '@/context/FormContext'
import styles from '../signup.module.css'
import { validatePassword } from '@/utils/validateInputs'

function PasswordInput () {
  const { password, setPassword, isLogin, repeatPassword, setRepeatPassword } = useContext(FormContext)
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setPassword('')
    setRepeatPassword('')
    setError('')
  }, [isLogin])

  const handlePasswordChange = (e) => {
    const password = e.target.value
    const error = validatePassword(password)

    setPassword(password)

    if (error) return setError(error)

    setError('')
  }
  const handleRepeatPasswordChange = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)

    if (password !== repeatPassword) return setError("passwords don't match")

    setError('')
  }

  const handleShowClick = () => setShow(!show)
  return (
    <FormControl isInvalid={error} className={styles.passwordGroup}>
      <InputGroup size='md'>
        <Input
          title=''
          type={show ? 'text' : 'password'}
          placeholder='password'
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' colorScheme='blackAlpha' size='sm' onClick={handleShowClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      {isLogin ||
        <>
          <InputGroup size='md'>

            <Input
              title=''
              type={show ? 'text' : 'password'}
              placeholder='Confirm'
              required
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />

          </InputGroup>

        </>}

      {error ? <FormErrorMessage>{error}</FormErrorMessage> : <FormHelperText style={{ fontSize: '.8em' }} color='white'> Use 8 or more characters with a mix of letters, numbers & symbols</FormHelperText>}

    </FormControl>
  )
}

export default PasswordInput
