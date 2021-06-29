import React from 'react'

import * as S from './input.styled'

export const Input = (props) => {
  const {
    label = undefined,
    name,
    required = false,
    register,
    type = 'text',
    placeholder = 'null'
  } = props

  return (
    <>
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.StyledInput
        placeholder={placeholder}
        type={type}
        {...register(name, { required })}
      />
    </>
  )
}
