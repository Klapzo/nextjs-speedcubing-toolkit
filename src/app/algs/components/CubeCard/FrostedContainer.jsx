'use client'
import React from 'react'
import styles from './cubecard.module.css'
import Link from 'next/link'
import { fetchAlgs } from '@/firebase/firestore/addData'

function FrostedContainer (props) {
  return (
    <Link
      href={props.disabled ? '#' : '#'} // `algs/${props.path.split(' ').join('')}`}
      style={{ textDecoration: 'none' }}
    >
      <div className={props.disabled
        ? styles.frostedContainerDisabled
        : styles.frostedContainer}
      >
        {props.children}
        <button onClick={() => fetchAlgs()}>cacaca</button>
      </div>
    </Link>
  )
}

export default FrostedContainer
