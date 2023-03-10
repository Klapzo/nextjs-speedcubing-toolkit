'use client'
import React from 'react'
import styles from './navbar.module.css'
import Logo from './Logo/Logo'
import NavItem from './NavItem'
import LogIn from './LogIn/LogIn'

const links = [

  {
    label: 'algorithms',
    route: '/algorithms'
  },
  {
    label: 'practice',
    route: '/practice'
  },
  {
    label: 'timer',
    route: '/timer'
  },
  {
    label: 'wiki',
    route: '/wiki'
  }
]

function Navbar () {
  return (
    <header>
      <nav className={styles.navbar}>
        <Logo />

        <ul className={styles.list}>
          {links.map(({ label, route }) => {
            return (
              <NavItem key={route} text={label} route={route}>
                {label}
              </NavItem>
            )
          })}
          <LogIn />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
