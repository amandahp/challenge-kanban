import styled from 'styled-components'

export const MainComponent = styled.main`
  ${({ theme }) => `  
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.primary};`}
`
