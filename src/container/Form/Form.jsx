import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../../store/ducks/auth/actions'

import { Input } from '../../components'
import * as S from './form.styled'

export const Form = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.authReducer.token)
  const error = useSelector((state) => state.authReducer.error)

  const onSubmit = (data) => {
    console.log('data')
    const { email, password } = data
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (token && !error) {
      history.push('/home')
    }
  }, [token])

  return (
    <S.Main>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.BoxTitle>
          <p>Faça seu Login</p>
        </S.BoxTitle>
        <Input
          type="email"
          name="email"
          placeholder="Insira o seu e-mail"
          label="E-mail"
          register={register}
          required
        />
        <Input
          placeholder="Insira sua senha"
          type="password"
          name="password"
          label="Senha"
          register={register}
        />
        <S.SuperDiv>
          <button type="submit">Entrar &#10143;</button>
        </S.SuperDiv>
        {error && <p>Email ou senha errados</p>}
      </S.StyledForm>
    </S.Main>
  )
}
