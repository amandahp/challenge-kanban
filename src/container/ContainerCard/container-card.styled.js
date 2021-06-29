import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: top;
  white-space: normal;
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
`

export const WrappedSection = styled.section`
  ${({ theme }) => `     
    width: 280px;
    background-color: ${theme.color.greyDark};
    border-radius: 3px;
    margin: 5px 5px;
    padding: 10px;
    position: relative;
    display: inline-flex;
    height: auto;
    max-height: 90%;
    flex-direction: column; `}
`

export const CardContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
`

export const ContainerContainerTitle = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: grab;
  width: 70%;
`

export const CardsContainer = styled.div`
  flex: 1;
  min-width: 100px;
  min-height: 50px;
  overflow-y: auto;
  align-self: center;
  max-height: 90vh;
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-between;
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
  ${({ theme }) => `color:${theme.color.dafault}; `}
`

export const CardComposerDiv = styled.div``

export const SubmitCardButtonDiv = styled.div`
  height: 32px;
`

export const SubmitCardButton = styled.input`
  ${({ theme }) => `  
  background-color: ${theme.color.primary};
  box-shadow: none;
  border: none;
  color: ${theme.color.secondary};
  height: 100%;
  cursor: pointer;`}
`

export const SubmitCardIcon = styled.a`
  height: 32px;
  line-height: 32px;
  width: 32px;
`
