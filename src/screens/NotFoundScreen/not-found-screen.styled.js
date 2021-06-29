import styled from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => `
position: relative;  
width: 100vw;
height: 100vh;
background-color: ${theme.color.primary};`}
`

export const BoxText = styled.div`
  ${({ theme }) => `  
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  p {
    position: absolute;
    font-size:  ${theme.baseValueToRem(30)};
    top: 100px;
    color:${theme.color.secondary};
  }`}
`
