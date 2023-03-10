import React, { useContext, useEffect, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup
} from '@chakra-ui/react'
import { FormContext } from '@/context/FormContext'
import { validateEmail } from '@/utils/validateInputs'

function EmailInput () {
  const { email, setEmail, isLogin } = useContext(FormContext)
  const [error, setError] = useState('')
  useEffect(() => {
    setEmail('')
    setError('')
  }, [isLogin])

  const handleEmailChange = (e) => {
    const email = e.target.value
    const error = validateEmail(email)
    setError(error)
    setEmail(email)
  }

  return (
    <FormControl isInvalid={error}>

      <InputGroup size='md'>
        <Input required type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>

    </FormControl>
  )
}

export default EmailInput
