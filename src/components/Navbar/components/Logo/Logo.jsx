import Link from 'next/link'
import React from 'react'
import styles from './logo.module.css'

function Logo () {
  return (
    <Link href='/' className={styles.logo}>
      SC TK
    </Link>
  )
}

export default Logo
