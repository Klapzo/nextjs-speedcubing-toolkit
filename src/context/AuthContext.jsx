'use client'
import firebaseApp from '@/firebase/config'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = getAuth(firebaseApp)
  const provider = new GoogleAuthProvider()
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setPending(false)
    })
    return () => unsuscribe()
  }, [])

  async function logIn (email, password) {
    let result = null
    let error = null
    try {
      result = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      error = e
    }

    return { result, error }
  }

  async function signUpWithEmail (email, password) {
    let UserCredential = null
    let error = null
    try {
      UserCredential = await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      error = e
    }

    return { UserCredential, error }
  }

  async function signUpwithGoogle () {
    let UserCredential = null
    let error = null
    try {
      UserCredential = await signInWithPopup(auth, provider)
    } catch (e) {
      error = e
      console.log(error)
    }
    return { UserCredential, error }
  }

  function changeUsername (newUser) {
    let error = null

    try {
      updateProfile(auth.currentUser, {
        displayName: newUser
      })
    } catch (e) {
      error = e
    }
    return error
  }
  function changeProfilePicture (newPictureUrl) {
    let error = null

    try {
      updateProfile(auth.currentUser, {
        photoURL: newPictureUrl
      })
    } catch (e) {
      error = e
    }
    return error
  }

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{ currentUser, logIn, signUpWithEmail, signUpwithGoogle, changeProfilePicture, changeUsername }}>
      {children}
    </AuthContext.Provider>
  )
}
