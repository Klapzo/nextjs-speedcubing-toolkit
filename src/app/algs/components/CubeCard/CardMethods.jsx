import React from 'react'
import styles from './cubecard.module.css'
function CardMethods (props) {
  return <div className={styles.cubeMethods}>{props.methods}</div>
}

export default CardMethods
