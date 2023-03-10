import React from 'react'
import { Button } from '@mantine/core'
import styles from './formcomponents.module.css'

function SubmitButton ({ onClick, text }) {
  return (
    <Button className={styles.submitButton} onClick={onClick} size='lg' variant='light' color='violet' radius='xl'>
      {text}
    </Button>
  )
}

export default SubmitButton
