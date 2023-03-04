import firebaseApp from '../config'
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(firebaseApp)

export default async function logIn (email, password) {
  let result = null
  let error = null
  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}

onAuthStateChanged(auth, async user => {
  console.log(user)
})
