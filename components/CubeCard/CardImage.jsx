import Image from 'next/image'
import React from 'react'
import styles from './cubecard.module.css'

function CardImage (props) {
  console.log(props.img)

  return (
    <Image
      className={styles.image}
      alt=' '
      width={500}
      height={20}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
      src={props.img}
    />
  )
}

export default CardImage
