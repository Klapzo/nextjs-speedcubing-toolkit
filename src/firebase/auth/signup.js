import firebaseApp from '../config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export async function signUpwithGoogle () {
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
export async function signUpWithEmail (email, password) {
  let UserCredential = null
  let error = null
  try {
    UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { UserCredential, error }
}
