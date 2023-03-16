import firebaseApp from '../config'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

async function getData (colleccion) {
  const querySnapshot = await getDocs(collection(db, colleccion))
  return querySnapshot.docs
}

export async function getUser () {
  const response = await getData('users')

  return response
}
