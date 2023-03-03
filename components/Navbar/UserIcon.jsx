import React from 'react'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import styles from './navbar.module.css'

function UserIcon (props) {
  return (
    <Link to='profile' className={styles.navItem} id='profile' href='/profile'>
      <FaUser />
    </Link>
  )
}

export default UserIcon
