import React from 'react'
import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { logout } from '../../store/ducks/auth/actions'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './nav-bar.styled'

export const NavBar = (props) => {
  const { privateHeader = true, publicHeader = false } = props

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClickNotFound = () => {
    history.push('/')
  }

  const handleClick = () => {
    history.push('/home')
  }

  const handleClickLogin = () => {
    history.push('/login')
  }

  const handleClickLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      {privateHeader && (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink onClick={handleClickNotFound}>Meu Perfil</NavLink>
            <NavLink onClick={handleClick}>Quadro Kanban</NavLink>
            <NavLink onClick={handleClickNotFound}>Ajuda</NavLink>
            <NavBtnLink onClick={handleClickLogout}>Sair &#10143;</NavBtnLink>
          </NavMenu>
        </Nav>
      )}
      {publicHeader && (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink onClick={handleClickNotFound}>Cadastrar</NavLink>
            <NavLink onClick={handleClickNotFound}>Sobre</NavLink>
            <NavLink onClick={handleClickNotFound}>Ajuda</NavLink>
            <NavBtnLink onClick={handleClickLogin}>Login</NavBtnLink>
          </NavMenu>
        </Nav>
      )}
    </>
  )
}
