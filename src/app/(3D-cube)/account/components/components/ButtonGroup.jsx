import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import styles from './formcomponents.module.css'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useAccountForm } from '@/context/FormContext'

function ButtonGroup () {
  const { isLogin, setIsLogin, setError } = useAccountForm()
  const router = useRouter()
  const { signUpwithGoogle } = useAuth()
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
          onClick={() => setIsLogin(prev => !prev)}
        >
          {isLogin ? 'Create account' : 'Log In Instead'}
        </Button>
      </section>
    </>
  )
}

export default ButtonGroup
