import React from 'react'

import { NavBar, Main } from '../../components'
import { Board } from '../../container'

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Board />
      </Main>
    </>
  )
}
