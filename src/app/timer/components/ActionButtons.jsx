import React, { useContext } from 'react'
import { Button } from '@mantine/core'
import { TimerContext } from '../context/TimerContextProvider'
import styles from '../timerPage.module.css'

function ActionButtons () {
  const { startButtonRef, active, handleStartClick, handleStopClick, stopButtonRef } = useContext(TimerContext)
  return (
    <div className={styles.buttons}>
      <Button ref={startButtonRef} color='green' disabled={active === 'start'} onClick={handleStartClick}>start</Button>
      <Button ref={stopButtonRef} color='red' disabled={active === 'stop'} onClick={handleStopClick}>stop</Button>
    </div>
  )
}

export default ActionButtons
