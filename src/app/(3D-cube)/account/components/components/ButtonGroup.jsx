import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import styles from './formcomponents.module.css'
import { FormContext } from '@/context/FormContext'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext'

function ButtonGroup () {
  const { isLogin, setIsLogin, setError } = useContext(FormContext)
  const router = useRouter()
  const { signUpwithGoogle } = useContext(AuthContext)

  const handleGoogleSignUp = async (e) => {
    e.preventDefault()

    const { error } = await signUpwithGoogle()
    if (error) {
      return setError(error)
    }

    return router.push('/profile/complete')
  }

  return (
    <>
      <section className={styles.buttonGroup}>

        <p style={{ justifyItems: 'flex-end' }}> Or continue with</p>
        <div className={styles.continueWith}>
          <Button
            leftIcon={<FaGoogle />}
            variant='light'
            color='dark'
            radius='xl'
            size='md'
            onClick={handleGoogleSignUp}
          >google
          </Button>

        </div>

        <Button
          variant='light' radius='xl'
          style={{ alignSelf: 'flex-start' }}
          onClick={() => { setIsLogin(prev => !prev) }}
        >
          {isLogin ? 'Create account' : 'Log In Instead'}
        </Button>
      </section>
    </>
  )
}

export default ButtonGroup
