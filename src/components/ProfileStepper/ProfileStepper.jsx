import React, { useState } from 'react'

import { Stepper, Button } from '@mantine/core'
import UsernameInput from './UsernameInput/UsernameInput'
import MainEventsMultiselect from './MainEventsMultiselect/MainEventsMultiselect'
import ProfilePictureDropzone from './ProfilePictureDropzone/ProfilePictureDropzone'
import { useRouter } from 'next/navigation'
function ProfileStepper ({ children }) {
  const [active, setActive] = useState(0)
  const router = useRouter()
  const redirect = () => router.push('/profile/klapzo')
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : redirect()))

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} breakpoint='sm' style={{ width: '100%' }}>
        <Stepper.Step label='Set username'>
          <UsernameInput />
        </Stepper.Step>
        <Stepper.Step label='Select main events'>
          <MainEventsMultiselect />
        </Stepper.Step>
        <Stepper.Step label='Choose a profile picture'>
          <ProfilePictureDropzone />
        </Stepper.Step>
        <Stepper.Completed />

      </Stepper>

      <Button onClick={nextStep}>Next step</Button>
    </>
  )
}

export default ProfileStepper
