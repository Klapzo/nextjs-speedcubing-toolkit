import Link from 'next/link'
import styles from '../login.module.css'
import React from 'react'

function UserIcon ({ imageURL }) {
  return (
    (
      <Link className={styles.imageContainer} href='/profile/user/me'>

        <img alt='profile page' src={imageURL} className={styles.userImage} />

      </Link>
    )
  )
}

export default UserIcon
