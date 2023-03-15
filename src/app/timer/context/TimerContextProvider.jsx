'use client'
import React, { createContext, useState, useRef } from 'react'
import useScrambles from '@/hooks/useScrambles'
import useTimer from '@/hooks/useTimer'
import styles from '../timerPage.module.css'

export const TimerContext = createContext()

export function TimerProvider ({ children }) {
  const { startTimer, stopTimer, active, currentTime } = useTimer()
  const { getNextScramble, getPrevScramble, index, scrambleList } = useScrambles()

  const [focusmode, setFocusMode] = useState(false)
  const [ready, setReady] = useState(false)
  const [longPress, setLongPress] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  const containerRef = useRef()
  const startButtonRef = useRef()
  const stopButtonRef = useRef()
  const textRef = useRef()

  const handleKeyDown = (e) => {
    if (e.repeat) return

    if (active === 'stop') {
      textRef.current.classList.add(styles.notready)

      const timeoutId = setTimeout(() => {
        if (e.key !== ' ') {
          if (showNotification) return
          setShowNotification(true)
          setTimeout(() => {
            setShowNotification(false)
          }, 5000)
          return
        }
        textRef.current.classList.add(styles.ready)
        setReady(true)
      }, 550)

      setLongPress(timeoutId)
    } else if (active === 'start') {
      handleStopClick()
    }
  }

  const handleKeyUp = () => {
    textRef.current.classList.remove(styles.notready)
    textRef.current.classList.remove(styles.ready)
    if (ready) { handleStartClick() }
    clearTimeout(longPress)
  }

  const handleStartClick = () => {
    startTimer()
    setShowNotification(false)
    setFocusMode(true)
    setReady(false)
    textRef.current.classList.remove(styles.notready)
    textRef.current.classList.remove(styles.ready)
  }
  const handleStopClick = () => {
    stopTimer()
    getNextScramble()
    setFocusMode(false)
    setReady(false)

    containerRef.current.focus()
  }

  return (
    <TimerContext.Provider value={{
      getNextScramble,
      getPrevScramble,
      handleKeyDown,
      handleKeyUp,
      handleStartClick,
      handleStopClick,
      active,
      index,
      currentTime,
      scrambleList,
      focusmode,
      startButtonRef,
      stopButtonRef,
      containerRef,
      textRef,
      showNotification
    }}
    >
      {children}
    </TimerContext.Provider>
  )
}
