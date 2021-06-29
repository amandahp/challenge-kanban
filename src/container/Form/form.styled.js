import styled from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => `
  position: relative;  
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.primary};`}
`

export const StyledForm = styled.form`
  ${({ theme }) => `  
  display: flex;
  flex-direction: column;
  margin: auto;
  padding:  ${theme.baseValueToRem(10)};
  border: 9px solid ${theme.color.secondary};
  border-radius: ${theme.baseValueToRem(10)};
  background-color: ${theme.backgroundColor.paper};
  width: 30vw;
  height: 40vh;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  @media screen and (max-width:1400px) {
    height: 60vh;
  }
  `}
`
export const BoxTitle = styled.div`
  ${({ theme }) => `  
  display: flex;
  flex-direction: column;

  position: relative;
  p {
    font-size:  ${theme.baseValueToRem(30)};
    color:${theme.color.primary};
  }`}
`
export const SuperDiv = styled.div`
  ${({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border-radius: ${theme.baseValueToRem(9)};
    background: ${theme.color.primary};
    padding: ${theme.baseValueToRem(5, 6)};
    color: ${theme.color.secondary};
    font-size:${theme.baseValueToRem(21)};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: ${theme.baseValueToRem(7)};
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${theme.backgroundColor.paper};
      color: ${theme.color.primary};
  }
  `}
`
