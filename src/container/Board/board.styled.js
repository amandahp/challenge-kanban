import styled from 'styled-components'

export const BoardContainer = styled.div`
  ${({ theme }) => `  
  background-color: rgba(49, 121, 186, 0.9);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  color: ${theme.color.black};
  overflow-y: hidden;
  overflow-x: auto;
  position: absolute;
  padding: 5px;
  align-items: flex-start;`}
`

export const CardHorizontalContainer = styled.div``

export const AddSectionDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
  border-radius: 3px;
  height: auto;
  min-height: 32px;
  padding: 4px;
  width: 272px;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
`

export const AddSectionForm = styled.form``

export const AddSectionLink = styled.a`
  text-decoration: none;
`

export const AddSectionLinkSpan = styled.span`
  ${({ theme }) => `  color:  ${theme.color.tertiary};`}
`

export const HideSectionLinkSpan = styled(AddSectionLinkSpan)`
  ${({ theme }) => `  color:  ${theme.color.secondary};
  display: none;
  padding: 6px 8px;
  transition: color 85ms ease-in;`}
`

export const AddSectionLinkIconSpan = styled.span``

export const AddSectionInput = styled.input`
  background: none;
  border-color: transparent;
  box-shadow: none;
  cursor: pointer;
  display: none;
  margin: 0;
`

export const ActiveAddSectionInput = styled(AddSectionInput)`
  ${({ theme }) => `  
  background: ${theme.backgroundColor.paper};
  border: none;
  box-shadow: inset 0 0 0 2px ${theme.color.primary};
  box-sizing: border-box;
  display: block;
  margin: 0;
  transition: margin 85ms ease-in, background 85ms ease-in;
  width: 100%;
  border-radius: 3px;
  padding: 8px 12px;
  color: ${theme.color.primary};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;`}
`

export const SubmitCardButtonDiv = styled.div`
  height: 32px;
`

export const SubmitCardButton = styled.button`
  ${({ theme }) => `
  &:disabled {
    cursor: not-allowed;
  }
  background-color: ${theme.color.tertiary};
  box-shadow: none;
  border: none;
  color:  ${theme.color.secondary};
  border-radius: 3px;
  height: 100%;
  cursor: pointer;`}
`

export const SubmitCardIcon = styled.a`
  height: 32px;
  line-height: 32px;
  width: 32px;
`
