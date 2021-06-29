import React from 'react'

import { NavBar, Main } from '../../components'
import { Form } from '../../container'

export const LoginScreen = () => {
  return (
    <>
      <NavBar privateHeader={false} publicHeader={true} />
      <Main>
        <Form />
      </Main>
    </>
  )
}
