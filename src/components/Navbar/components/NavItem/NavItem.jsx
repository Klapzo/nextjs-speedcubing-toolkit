import Link from 'next/link'
import React from 'react'
import styles from '../../navbar.module.css'

function NavItem ({ label, route, children }) {
  return (
    <li>
      <Link href={route} className={styles.navItem} id={label}>
        {children}
      </Link>
    </li>
  )
}

export default NavItem
