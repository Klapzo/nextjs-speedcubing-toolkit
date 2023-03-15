import { useState } from 'react'

function useTimer () {
  const [currentTime, setCurrentTime] = useState(0.00)
  const [intervalId, setIntervalId] = useState(null)
  const [active, setActive] = useState('stop')

  function startTimeCounter (startTime) {
    const now = Date.now()
    const diff = (now - startTime)
    const seconds = parseFloat(diff / 1000).toFixed(2)
    setCurrentTime(seconds)
  }

  const startTimer = () => {
    const startTime = Date.now()
    setActive('start')
    const ID = setInterval(() => startTimeCounter(startTime), 10)
    setIntervalId(ID)
  }

  const stopTimer = () => {
    clearInterval(intervalId)
    setActive('stop')
  }

  return { startTimer, stopTimer, currentTime, active }
}

export default useTimer
