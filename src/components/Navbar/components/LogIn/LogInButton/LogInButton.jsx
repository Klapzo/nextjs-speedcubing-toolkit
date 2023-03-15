import React from 'react'
import styles from '../login.module.css'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

function LogInButton () {
  return (
    <Link
      href='/account'
      className={styles.container}
    >
      <FaUser />
      log in
    </Link>
  )
}

export default LogInButton
