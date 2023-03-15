import React from 'react'
import styles from './cubecard.module.css'
import Link from 'next/link'

function FrostedContainer (props) {
  return (
    <Link href={props.disabled ? '#' : 'PATH'} style={{ textDecoration: 'none' }}>
      <div className={props.disabled ? styles.frostedContainerDisabled : styles.frostedContainer}>
        {props.children}
      </div>
    </Link>
  )
}

export default FrostedContainer
