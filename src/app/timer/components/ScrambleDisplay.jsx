import React, { useContext } from 'react'
import styles from '../timerPage.module.css'
import { Button } from '@mantine/core'
import { TimerContext } from '../context/TimerContextProvider'

function ScrambleDisplay () {
  const {
    scrambleList,
    index,
    getNextScramble,
    getPrevScramble,
    focusmode
  } = useContext(TimerContext)
  console.log(scrambleList)
  return (
    <div className={styles.scrambles + ' ' + (focusmode && styles.hidden)}>
      {scrambleList.length ? scrambleList[index - 1] : 'loading Scrambles...'}
      <div>
        <Button
          color='orange'
          disabled={index < 2}
          onClick={() => getPrevScramble()}
        >
          prev
        </Button>
        <hr />
        <Button
          color='orange'
          onClick={() => getNextScramble()}
        >
          next
        </Button>
      </div>
    </div>
  )
}

export default ScrambleDisplay
