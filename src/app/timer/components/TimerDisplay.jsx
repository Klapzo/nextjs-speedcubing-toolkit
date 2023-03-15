import React, { useContext, useEffect } from 'react'
import styles from '../timerPage.module.css'
import { TimerContext } from '../context/TimerContextProvider'
import { Notification } from '@mantine/core'

function TimerDisplay () {
  const { currentTime, textRef, focusmode, showNotification } = useContext(TimerContext)
  return (
    <>
      <div className={styles.timer}>
        <h3 className={styles.timerText} ref={textRef} id={(focusmode ? styles.focus : undefined)}>
          {currentTime}
        </h3>
      </div>
      {showNotification &&
        <Notification
          title='hold down SPACE to start the timer'
          withCloseButton={false}
        >however you can stop the timer with any key
        </Notification>}
    </>

  )
}

export default TimerDisplay
