import styled from 'styled-components'

export const Root = styled.div`
  ${() => `
  &::before{
    height: calc(60vh - 43.5rem);
  }
  `}
`
export const Modal = styled.div`
  ${() => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  bottom: 0;
  justify-content: center;
  overflow: auto;
  right: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
  padding-top: 15px;
  padding-bottom: 75px;
`}
`

export const Container = styled.div`
  ${() => `
  background: white;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  margin-top: auto;
  padding: 3rem;
`}
`

export const Header = styled.div`
  ${({ theme }) => `
  h5 {
    font-size: ${theme.baseValueToRem(20)};
    color:${theme.color.primary};
    position: relative;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${theme.baseValueToRem(-30)};
`}
`
export const Body = styled.div`
  ${() => `
  h5 {
    font-size:12px;
    color: black;
  }
  form {   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`}
`

export const Input = styled.input`
  width: 40vw;
  border-radius: 12px;
  margin: 0 0 20px;
  padding: 10px 25px;
  border: 1px solid #dadada;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }
`

export const Select = styled.select`
  ${({ theme }) => `  
  width: 44vw;
  border-radius: 12px;
  margin: 0 0 20px;
  padding: 10px 25px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.greyDark};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }`}
`

export const Option = styled.option`
  ${({ theme }) => `  
  width: 40vw;
  border-radius: 12px;
  margin: 0 0 20px;
  padding: 10px 25px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.greyDark};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }`}
`

export const Textarea = styled.textarea`
  ${({ theme }) => `
  width: 40vw;
  border-radius: 14px;
  margin: 0 0 20px;
  padding: 10px 25px;
  border: 1px solid ${theme.color.greyDark};
  resize: none;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }
`}
`

export const ButtonClose = styled.button`
  ${({ theme }) => `
  float: right !important;
  cursor: pointer;
  color: ${theme.color.greyDark};
  background: transparent;
  border:none;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    text-decoration: none;
  }
  p {
    font-size: 1.5rem;
  }
`}
`

export const Footer = styled.footer`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    &:disabled {
      opacity:0.5;
      cursor:not-allowed;
    }
    background: ${theme.color.primary};
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    border-radius: 3rem;
    transform: translateY(-40%);
    border: none;
    color:${theme.color.secondary};
    font-size: ${theme.baseValueToRem(20)};
    &:hover {
      text-decoration: none;
      background: ${theme.color.secondary};
      color:${theme.color.primary};
      border: 3px solid ${theme.color.primary};
    }
    &:focus {
      outline: 0;
      text-decoration: none;
    }
    width: 20vw;
    height: ${theme.baseValueToRem(40)};
    margin-top: ${theme.baseValueToRem(10)};
  }

`}
`
