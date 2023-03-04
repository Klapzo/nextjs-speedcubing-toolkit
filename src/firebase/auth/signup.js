import firebaseApp from '../config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export async function signUpwithGoogle () {
  await signInWithPopup(auth, provider).then((result) => {
    const user = result.user

    return user
  }).catch((error) => {
    return { error }
  })
}

export async function signUp (email, password) {
  let result = null
  let error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
