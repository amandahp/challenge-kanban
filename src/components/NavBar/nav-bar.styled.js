import { FaBars } from 'react-icons/fa'

import styled from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => `
  background:${theme.backgroundColor.paper};
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: ${theme.baseValueToRem(2)}; calc((100vw - 10px) / 2);
  z-index: 12;`}
`

export const NavLink = styled.a`
  ${({ theme }) => `  
  color:${theme.color.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${theme.baseValueToRem(16)};
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color:rgba(92,93,94,0.3);
  };`}
`

export const Bars = styled(FaBars)`
  ${({ theme }) => `  
  display: none;
  color: ${theme.color.secondary};
  @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: ${theme.baseValueToRem(4.5)};
  cursor: pointer;
} `}
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled.a`
  ${({ theme }) => `    
  border-radius: ${theme.baseValueToRem(9)};
  background: ${theme.color.primary};
  color: ${theme.color.secondary};
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  padding: ${theme.baseValueToRem(10)};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${theme.backgroundColor.paper};
    color: ${theme.color.primary};
}`}
`
