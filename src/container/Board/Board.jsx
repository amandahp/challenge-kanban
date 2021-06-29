import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard, deleteLane } from '../../store/ducks/kanban/actions'

import { CardContainer } from '../ContainerCard'
import { IoIosAdd } from 'react-icons/io'

import {
  BoardContainer,
  AddSectionDiv,
  AddSectionForm,
  ActiveAddSectionInput,
  SubmitCardButtonDiv,
  SubmitCardButton,
  SubmitCardIcon
} from './board.styled'

export const Board = () => {
  const dispatch = useDispatch()
  const [random, setRandom] = useState(Math.random())
  const [error, setError] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState('')
  const cards = useSelector((state) => state.kanbanReducer.cards)

  const handleAddCard = () => {
    dispatch(addCard(newCardTitle))
    setNewCardTitle('')
  }

  const handleDeleteLane = (cardIndex) => {
    dispatch(deleteLane(cardIndex))
    setRandom(Math.random())
  }

  useEffect(() => {
    if (newCardTitle) {
      if (cards.some((card) => card.title === newCardTitle)) {
        setError(true)
      } else {
        setError(false)
      }
    }
  }, [newCardTitle])

  return (
    <BoardContainer key={random}>
      {cards?.map((card, index) => {
        return (
          <CardContainer
            handleDeleteLane={handleDeleteLane}
            cardIndex={index}
            content={card.content}
            title={card.title}
            key={index + 1}
          />
        )
      })}
      <AddSectionDiv>
        <AddSectionForm>
          <React.Fragment>
            <ActiveAddSectionInput
              value={newCardTitle}
              onChange={(event) => setNewCardTitle(event.target.value)}
            />
            <SubmitCardButtonDiv>
              <SubmitCardButton
                disabled={!newCardTitle || error}
                onClick={() => handleAddCard()}
                type="button"
              >
                Criar Lane
              </SubmitCardButton>
              <SubmitCardIcon>
                <IoIosAdd />
              </SubmitCardIcon>
            </SubmitCardButtonDiv>
            {error && <p>Nome de lane já existente</p>}
          </React.Fragment>
        </AddSectionForm>
      </AddSectionDiv>
    </BoardContainer>
  )
}
