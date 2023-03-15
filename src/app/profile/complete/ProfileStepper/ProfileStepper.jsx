import React, { useState } from 'react'

import { Stepper, Button } from '@mantine/core'
import UsernameInput from './components/UsernameInput/UsernameInput'
import MainEventsMultiselect from './components/MainEventsMultiselect/MainEventsMultiselect'
import ProfilePictureDropzone from './components/ProfilePictureDropzone/ProfilePictureDropzone'
import { useRouter } from 'next/navigation'

function ProfileStepper () {
  const [active, setActive] = useState(0)
  const router = useRouter()
  const nextStep = () => setActive((current) => (current + 1))

  if (active === 3) {
    router.push('/profile/user/me')
  }

  return (
    <>
      <Stepper active={active} allowNextStepsSelect={false} breakpoint='sm' style={{ width: '100%' }}>
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

      <Button onClick={nextStep}>{active >= 2 ? <p>Go to profile</p> : <p>Next step</p>}</Button>
    </>
  )
}

export default ProfileStepper
