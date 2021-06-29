import React from 'react'

import {
  CardContainer,
  CardContent,
  ListCardComponent,
  ListCardDetails,
  ListCardTextArea,
  AddCardButtonDiv,
  AddCardButtonSpan
} from './card.styled'

import * as Styled from '../../container/Modal/modal.styles'

export const Card = (props) => {
  const {
    title = 'undefined',
    text,
    priority,
    priorityValue,
    handleClickModal,
    deleteCard = () => {},
    cardIndex,
    columnIndex
  } = props

  return (
    <CardContainer priority={priority} className="card">
      <CardContent>
        <Styled.Header>
          <h5>{title}</h5>
          <Styled.ButtonClose
            type="button"
            onClick={() => deleteCard(columnIndex, cardIndex)}
          >
            <p>X</p>
          </Styled.ButtonClose>
        </Styled.Header>
      </CardContent>
      <hr />
      <ListCardComponent>
        <ListCardDetails>
          <ListCardTextArea disabled value={text} />
        </ListCardDetails>
      </ListCardComponent>
      <ListCardTextArea
        disabled
        value={`Prioridade:${priorityValue}`}
        style={{ fontSize: '10px' }}
      />
      <AddCardButtonDiv>
        <AddCardButtonSpan onClick={handleClickModal}>
          Mover card
        </AddCardButtonSpan>
      </AddCardButtonDiv>
    </CardContainer>
  )
}
