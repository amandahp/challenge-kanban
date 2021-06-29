import React from 'react'

import { MainComponent } from './main.styled'

export const Main = (props) => {
  const { children } = props
  return (
    <>
      <MainComponent>{children}</MainComponent>
    </>
  )
}
