import React from 'react'

import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import * as Styled from '../Modal/modal.styles'

export const ChangeLaneModalComponent = ({
  active,
  hideModal,
  submitContent,
  contentIndex
}) => {
  const { handleSubmit, register } = useForm()

  const cards = useSelector((state) => state.kanbanReducer.cards)

  const onSubmit = (data) => {
    submitContent(contentIndex, data)
    hideModal()
  }

  return (
    <>
      {active && (
        <Styled.Root>
          <Styled.Modal>
            <Styled.Container>
              <Styled.Header>
                <h5>Mover Card para outra coluna</h5>
                <Styled.ButtonClose type="button" onClick={() => hideModal()}>
                  <p>X</p>
                </Styled.ButtonClose>
              </Styled.Header>
              <Styled.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Styled.Select {...register('newLane')}>
                    {cards.map((card, index) => {
                      return (
                        <Styled.Option key={index + 1} value={card.title}>
                          {card.title}
                        </Styled.Option>
                      )
                    })}
                  </Styled.Select>
                  <Styled.Footer>
                    <button type="submit">Mover</button>
                  </Styled.Footer>
                </form>
              </Styled.Body>
            </Styled.Container>
          </Styled.Modal>
        </Styled.Root>
      )}
    </>
  )
}
