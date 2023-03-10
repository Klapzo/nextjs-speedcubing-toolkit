'use client'
import React from 'react'
import styles from './completeprofile.module.css'
import { QuicksandFont } from '../(cube)/signup/page'
import ProfileStepper from '@/components/ProfileStepper/ProfileStepper'

function CompleteProfile () {
  return (
    <div className={styles.container + ' ' + QuicksandFont.className}>
      <h2>Complete your profile</h2>
      <ProfileStepper />

    </div>
  )
}

export default CompleteProfile
