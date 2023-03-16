'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const FormContext = createContext(null)

export const useAccountForm = () => useContext(FormContext)

export function FormProvider ({ children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLogin, setIsLogin] = useState(true)

  const clearForm = () => {
    setEmail('')
    setPassword('')
    setRepeatPassword('')
    setError('')
  }

  useEffect(() => {
    clearForm()
  }, [isLogin])

  return (
    <FormContext.Provider value={{
      clearForm,
      setEmail,
      setPassword,
      setRepeatPassword,
      setError,
      setIsLogin,
      email,
      password,
      repeatPassword,
      error,
      isLogin

    }}
    >
      {children}
    </FormContext.Provider>
  )
}
