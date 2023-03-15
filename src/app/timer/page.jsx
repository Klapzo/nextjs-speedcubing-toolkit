'use client'

import React from 'react'
import ActionButtons from './components/ActionButtons'
import ScrambleDisplay from './components/ScrambleDisplay'
import TimerContainer from './components/TimerContainer'
import TimerDisplay from './components/TimerDisplay'
import { TimerProvider } from './context/TimerContextProvider'

function Timer () {
  return (
    <TimerProvider>

      <TimerContainer>

        <ScrambleDisplay />

        <TimerDisplay />

        <ActionButtons />

      </TimerContainer>

    </TimerProvider>
  )
}

export default Timer
