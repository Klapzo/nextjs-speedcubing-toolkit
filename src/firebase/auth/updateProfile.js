import { getAuth, updateProfile } from 'firebase/auth'

const auth = getAuth()

export function changeUsername (newUser) {
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
export function changeProfilePicture (newPictureUrl) {
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
