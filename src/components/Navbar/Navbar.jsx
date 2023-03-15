'use client'
import React from 'react'
import styles from './navbar.module.css'
import Logo from './components/Logo/Logo'
import NavItem from './components/NavItem/NavItem'
import LogInButton from './components/LogIn/LogInButton/LogInButton'
import UserIcon from './components/LogIn/UserIcon/UserIcon'
import { useUser } from '@/context/AuthContext'

const links = [

  {
    label: 'algs',
    route: '/algs'
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
  const { currentUser } = useUser()

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
          {currentUser ? <UserIcon imageURL={currentUser.photoURL} /> : <LogInButton />}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
