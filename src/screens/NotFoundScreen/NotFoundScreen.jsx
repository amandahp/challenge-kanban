import React from 'react'

import { NavBar } from '../../components'
import * as S from './not-found-screen.styled'

export const NotFoundScreen = () => {
  const token = true
  return (
    <>
      {token ? (
        <NavBar />
      ) : (
        <NavBar publicHeader={true} privateHeader={false} />
      )}
      <S.Main>
        <S.BoxText>
          <p>Página Inexistente &#128532;</p>
        </S.BoxText>
      </S.Main>
    </>
  )
}
