import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from '@mantine/core'
import { FiAtSign } from 'react-icons/fi'
import { AuthContext } from '@/context/AuthContext'

function UsernameInput () {
  const { currentUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(currentUser.displayName)
  }, [currentUser])
  
  return (
    <>

      <TextInput
        style={{ width: '100%' }}
        icon={<FiAtSign />}
        size='xl'
        radius='xl'
        placeholder='username'
        description='username must not contain spaces or special caracters'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

    </>
  )
}

export default UsernameInput
