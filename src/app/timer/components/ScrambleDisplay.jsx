import React, { useContext } from 'react'
import styles from '../timerPage.module.css'
import { Button } from '@mantine/core'
import { TimerContext } from '../context/TimerContextProvider'

function ScrambleDisplay () {
  const { scrambleList, index, getNextScramble, getPrevScramble, focusmode } = useContext(TimerContext)
  return (
    <div className={styles.scrambles + ' ' + (focusmode && styles.hidden)}>
      {scrambleList[index - 1]}
      <div>
        <Button color='orange' disabled={index < 2} onClick={() => getPrevScramble()}> {'< prev'} </Button>
        <Button color='orange' onClick={() => getNextScramble()}>{'next >'}</Button>
      </div>
    </div>
  )
}

export default ScrambleDisplay
