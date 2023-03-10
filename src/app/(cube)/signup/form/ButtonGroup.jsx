import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import styles from '../signup.module.css'
import { FormContext } from '@/context/FormContext'

function ButtonGroup () {
  const { handleGoogleSignUp, isLogin, toggleLogin } = useContext(FormContext)

  return (
    <>
      <section className={styles.formSubmit}>
        <Button colorScheme='orange' type='submit'>{isLogin ? 'Log In' : ' Register'}</Button>

        <hr />
        <p style={{ justifyItems: 'flex-end' }}> Or continue with</p>
        <div className={styles.continueWith}>
          <Button
            leftIcon={<FaGoogle />}
            onClick={handleGoogleSignUp}
            colorScheme='blackAlpha'
          >google
          </Button>

        </div>

        <Button
          size='sm'
          style={{ alignSelf: 'flex-start' }}
          variant='ghost'
          colorScheme='blue'
          onClick={toggleLogin}
        >
          {isLogin ? 'Create account' : 'Log In Instead'}
        </Button>
      </section>
    </>
  )
}

export default ButtonGroup
