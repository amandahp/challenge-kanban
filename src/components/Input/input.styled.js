import styled from 'styled-components'

export const StyledInput = styled.input`
  margin: 5px 0 10px 0;
  padding: 15px;
  border: 1px solid #bfbfbf;
  border-radius: 7px;
  box-sizing: border-box;
  width: 100%;
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const StyledLabel = styled.label`
  ${({ theme }) => `    
  margin: 10px 0 5px 0;
  color:${theme.color.primary};
  fontSize: 15px;`}
`
