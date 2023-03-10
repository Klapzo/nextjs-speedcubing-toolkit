import { useState, useEffect } from 'react'
import firebaseApp from '@/firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function useUser () {
  const [user, setUser] = useState('')
  const auth = getAuth(firebaseApp)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser('')
      }
    })
  })

  return user
}

export default useUser
