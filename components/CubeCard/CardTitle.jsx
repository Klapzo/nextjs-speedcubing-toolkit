import React from 'react'
import styles from './cubecard.module.css'

function CardTitle (props) {
  return <h3 className={styles.title}> {props.title}</h3>
}

export default CardTitle
