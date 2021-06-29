import React from 'react'

import { useForm } from 'react-hook-form'

import * as Styled from './modal.styles'

export const ModalComponent = ({ active, hideModal, submitContent }) => {
  const { handleSubmit, register, watch, reset } = useForm({
    defaultValues: {
      title: '',
      text: ''
    }
  })

  const onSubmit = (data) => {
    submitContent(data)
    reset({ title: '', text: '' })
    hideModal()
  }

  const watchTitle = watch('title')
  const watchText = watch('text')

  return (
    <>
      {active && (
        <Styled.Root>
          <Styled.Modal>
            <Styled.Container>
              <Styled.Header>
                <h5>Adicionar Tarefa</h5>
                <Styled.ButtonClose type="button" onClick={() => hideModal()}>
                  <p>X</p>
                </Styled.ButtonClose>
              </Styled.Header>
              <Styled.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Styled.Input
                    type="text"
                    placeholder="Resumo"
                    primary
                    {...register('title')}
                  />
                  <Styled.Textarea
                    placeholder="Descrição"
                    {...register('text')}
                  />
                  <Styled.Select {...register('priority')}>
                    <Styled.Option value="prioridadeTask">
                      Prioridade Task
                    </Styled.Option>
                    <Styled.Option value="low" style={{ color: 'green' }}>
                      Baixo
                    </Styled.Option>
                    <Styled.Option value="medium" style={{ color: 'orange' }}>
                      Médio
                    </Styled.Option>
                    <Styled.Option value="high" style={{ color: 'red' }}>
                      Alto
                    </Styled.Option>
                  </Styled.Select>
                  <Styled.Footer>
                    <button disabled={!watchTitle || !watchText} type="submit">
                      Adicionar
                    </button>
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
