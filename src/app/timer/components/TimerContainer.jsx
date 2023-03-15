'use client'
import React, { useContext, useEffect } from 'react'
import { TimerContext } from '../context/TimerContextProvider'
import styles from '../timerPage.module.css'

function TimerContainer ({ children }) {
  const { containerRef, handleKeyDown, handleKeyUp } = useContext(TimerContext)
  useEffect(() => {
    containerRef.current.focus()
  }, [containerRef])
  return (
    <div
      className={styles.container} tabIndex='0' ref={containerRef} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}

export default TimerContainer
