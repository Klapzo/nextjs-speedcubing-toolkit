import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './mainbutton.module.css'

function MainButton ({ handleClick, expanded }) {
  return (

    <div className={styles.container}>
      <Link href='#'>
        <motion.button className={styles.mainButton + ' ' + (expanded && styles.expanded)} onClick={handleClick}>get started</motion.button>
      </Link>
    </div>

  )
}

export default MainButton
