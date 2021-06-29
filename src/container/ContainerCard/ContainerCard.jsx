import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Card } from '../../components'
import { priorityValues } from '../../utils/priotityValues'

import {
  Wrapper,
  WrappedSection,
  CardContainerHeader,
  ContainerContainerTitle,
  CardsContainer,
  AddCardButtonDiv,
  AddCardButtonSpan
} from './container-card.styled'

import * as Styled from '../../container/Modal/modal.styles'

import { ModalComponent } from '../../container'
import { ChangeLaneModalComponent } from '../../container'
import {
  addContent,
  changeColumn,
  deleteCard
} from '../../store/ducks/kanban/actions'

export const CardContainer = (props) => {
  const { title = 'Null', content, cardIndex, handleDeleteLane } = props
  const dispatch = useDispatch()
  const [contentIndex, setContentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showLaneModal, setShowLaneModal] = useState(false)
  const [random, setRandom] = useState(Math.random())

  const transfer = (comingIndex, data) => {
    console.log('---------------------', comingIndex)
    dispatch(changeColumn(comingIndex, cardIndex, data.newLane))
  }

  const handleClickModal = () => {
    setShowModal(true)
  }

  const handleDeleteCard = (column, card) => {
    dispatch(deleteCard(column, card))
    setRandom(Math.random())
  }

  const handleClickLaneModal = (index) => {
    setContentIndex(index)
    setShowLaneModal(true)
  }

  const submitNewContent = (data) => {
    const { title, text, priority } = data
    dispatch(addContent(cardIndex, title, text, priority))
  }

  return (
    <>
      <ModalComponent
        active={showModal}
        hideModal={() => setShowModal(false)}
        submitContent={submitNewContent}
      />
      <ChangeLaneModalComponent
        contentIndex={contentIndex}
        comingIndex={cardIndex}
        active={showLaneModal}
        hideModal={() => setShowLaneModal(false)}
        submitContent={transfer}
      />
      <Wrapper key={random} className={'card-container'}>
        <WrappedSection>
          <Styled.Header>
            <CardContainerHeader className={'column-drag-handle'}>
              <ContainerContainerTitle>{title}</ContainerContainerTitle>
            </CardContainerHeader>
            <Styled.ButtonClose
              type="button"
              onClick={() => handleDeleteLane(cardIndex)}
            >
              <p style={{ color: 'blue' }}>X</p>
            </Styled.ButtonClose>
          </Styled.Header>

          <CardsContainer>
            {content.map((cont, index) => {
              return (
                <Card
                  cardIndex={index}
                  columnIndex={cardIndex}
                  deleteCard={handleDeleteCard}
                  handleClickModal={() => handleClickLaneModal(index)}
                  key={index + 1}
                  priority={cont?.priority}
                  text={cont?.text}
                  title={cont?.title}
                  priorityValue={priorityValues[cont?.priority]}
                />
              )
            })}
          </CardsContainer>
          <AddCardButtonDiv>
            <AddCardButtonSpan onClick={handleClickModal}>
              Adicionar Card
            </AddCardButtonSpan>
          </AddCardButtonDiv>
        </WrappedSection>
      </Wrapper>
    </>
  )
}
