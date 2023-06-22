import firebaseApp from '../config'
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc
} from 'firebase/firestore'

const db = getFirestore(firebaseApp)

async function getData (colleccion) {
  const querySnapshot = await getDocs(collection(db, colleccion))
  return querySnapshot.docs
}

export async function getUser () {
  const response = await getData('users')

  return response
}
export async function fetchAlgs () {
  const docRef = doc(db, '/3x3 Algorithms/cfop')
  const docSnapshot = await getDoc(docRef)

  console.log(docSnapshot.data())
}
