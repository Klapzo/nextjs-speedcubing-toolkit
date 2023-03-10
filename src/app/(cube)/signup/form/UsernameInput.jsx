import React, { useContext, useEffect, useState } from 'react'
import {
  FormControl,
  InputLeftAddon,
  Input,
  InputGroup
} from '@chakra-ui/react'
import { FormContext } from '@/context/FormContext'

function UsernameInput () {
  const { nickName, setNickName, isLogin } = useContext(FormContext)
  const handleNickNameChange = (e) => setNickName(e.target.value)
  const [error, setError] = useState('')

  useEffect(() => {
    setNickName('')
    setError('')
  }, [isLogin])

  return (
    <FormControl>

      <InputGroup size='md'>
        <InputLeftAddon style={{ fontWeight: '900', fontSize: '1.1em' }} color='orange.400'>@</InputLeftAddon>
        <Input required placeholder='Username' type='text' value={nickName} onChange={handleNickNameChange} />
      </InputGroup>

    </FormControl>
  )
}

export default UsernameInput
