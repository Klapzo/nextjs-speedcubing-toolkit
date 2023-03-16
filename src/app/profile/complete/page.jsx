'use client'
import React from 'react'
import styles from './completeprofile.module.css'
import { QuicksandFont } from '../../(3D-cube)/account/page'
import ProfileStepper from './ProfileStepper/ProfileStepper'

function CompleteProfile () {
  // const user = useAuth()
  // const router = useRouter()

  return (
    <div className={styles.container + ' ' + QuicksandFont.className}>
      <h2>Complete your profile</h2>
      <ProfileStepper />

    </div>
  )
}

export default CompleteProfile
