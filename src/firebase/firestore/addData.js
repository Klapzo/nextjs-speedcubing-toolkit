import firebaseApp from '../config'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

async function addData (colllection, data) {
  try {
    const docref = await addDoc(collection(db, colllection), data)
    console.log(docref)
    return docref
  } catch (e) {
    console.log(e)
    return e
  }
}

export async function addUser ({ userId, userName, avatar, mainEvents, createdAt }) {
  const response = await addData('users',
    {
      userId,
      userName,
      avatar,
      mainEvents,
      createdAt: Timestamp.fromDate(new Date(createdAt))
    })

  return response
}
