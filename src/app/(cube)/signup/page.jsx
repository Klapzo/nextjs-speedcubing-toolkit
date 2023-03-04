'use client'
import React, { useState } from 'react'
import { signUpwithGoogle } from '@/firebase/auth/signup'
import logIn from '@/firebase/auth/login'
import styles from './signup.module.css'
import { Quicksand } from 'next/font/google'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation'

import {
  Button,
  FormControl,
  FormLabel,
  InputLeftAddon,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

const formFont = Quicksand({ subsets: ['latin'], weight: '400' })

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleShowClick = () => setShow(!show)

  const [user, setUser] = useState('')
  const router = useRouter()

  const handleGoogleSignUp = async (e) => {
    e.preventDefault()

    const user = await signUpwithGoogle()
    setUser(user)

    return router.push('/')
  }

  const handleLogIn = async (event) => {
    event.preventDefault()

    const { result, error } = await logIn(email, password)

    if (error) {
      return console.log(error)
    }

    console.log(result)
    return router.push('/admin')
  }

  return (
    <div className={styles.container + ' ' + formFont.className}>

      <form onSubmit={handleLogIn} className={styles.form}>
        <h2> REGISTER </h2>

        <FormControl>

          <FormLabel>Handle</FormLabel>
          <InputGroup size='sm'>
            <InputLeftAddon color='gray.900'>@</InputLeftAddon>
            <Input required type='email' value={email} onChange={handleEmailChange} />
          </InputGroup>

        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>

          <InputGroup size='lg'>
            <Input required type='email' placeholder='Enter email' value={email} onChange={handleEmailChange} />
          </InputGroup>

        </FormControl>

        <FormControl>

          <InputGroup size='lg'>
            <Input
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

        </FormControl>

        <Button variant='outline' colorScheme='white' type='submit'>Sign In</Button>

        <p> OR </p>

        <Button leftIcon={<FcGoogle />} onClick={handleGoogleSignUp} colorScheme='blackAlpha'>sign in with google</Button>
      </form>
    </div>

  )
}

export default SignUp
