import React from 'react'
import { MultiSelect } from '@mantine/core'

const events = [
  '3x3 cube', '2x2 cube', '4x4 cube', '5x5 cube', '6x6 cube', '7x7 cube', '3x3 blindbolded', '3x3 FMC', '3x3 OH', 'clock', 'megaminx', 'piraminx', 'skewb', 'square-1', '4x4 blindfolded', '5x5 blindfolded'
]

function MainEventsMultiselect () {
  return (
    <MultiSelect
      data={events}
      placeholder='Choose as many as you want'
      label='Your main WCA events'
      radius='xl'
      clearable
    />
  )
}

export default MainEventsMultiselect
