import Link from 'next/link'
import React from 'react'
import styles from './mainbutton.module.css'
function MainButtons () {
  return (
    <Link href='/signup'>
      <button className={styles.mainButton}>GET STARTED</button>
    </Link>

  )
}

export default MainButtons
