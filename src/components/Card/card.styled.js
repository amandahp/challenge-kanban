import styled from 'styled-components'

export const CardContainer = styled.div`
  ${(props) => `  
  background-color: ${props.theme.backgroundColor.paper};
  border: 2px solid ${props.theme.priority[props.priority]};
  border-radius: 10px;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;`}
`

export const ListCardComponent = styled.div`
  ${({ theme }) => `  
  background-color: ${theme.backgroundColor.paper};
  border-radius: 3px;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;`}
`

export const ListCardDetails = styled.div`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
`

export const ListCardTextArea = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  height: 54px;
  background: none;
  border: none;
  box-shadow: none;
  margin-bottom: 4px;
  max-height: 162px;
  min-height: 54px;
  padding: 0;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  outline: none;
`

export const AddCardButtonDiv = styled.div`
  ${({ theme }) => `  
  min-height: 24px;
  max-height: 24px;
  cursor: pointer;
  :hover {
    background-color: rgba(9, 30, 66, 0.08);
    color:${theme.color.tertiary};
  } `}
`

export const AddCardButtonSpan = styled.span`
  ${({ theme }) =>
    `  
    color:${theme.color.dafault}; 
    font-weight: 900; 
    text-decoration: underline; `}
`

export const CardContent = styled.div``
