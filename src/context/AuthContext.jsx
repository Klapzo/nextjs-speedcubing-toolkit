'use client'
import firebaseApp from '@/firebase/config'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut

} from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

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
  }, [auth])

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
      UserCredential = await
      createUserWithEmailAndPassword(auth, email, password)
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

  function changeUsername (newUsername) {
    let error = null

    try {
      updateProfile(auth.currentUser, {
        displayName: newUsername
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
  function addField (field) {
    let error = null

    try {
      updateProfile(auth.currentUser, {
        mainEvents: [field]
      })
    } catch (e) {
      error = e
    }
    return error
  }

  function logOut () {
    let error = null
    try {
      signOut(auth)
    } catch (e) {
      error = e
    }
    return error
  }

  if (pending) {
    return
  }

  return (
    <AuthContext.Provider value={{
      currentUser,
      logIn,
      signUpWithEmail,
      signUpwithGoogle,
      changeProfilePicture,
      changeUsername,
      logOut,
      addField
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// USER SCHEMA
// addUser({
//   userId: currentUser.uid,
//   userName: currentUser.displayName,
//   avatar: currentUser.photoURL,
//   mainEvents: [''],
//   createdAt: currentUser.metadata.creationTime
// })
