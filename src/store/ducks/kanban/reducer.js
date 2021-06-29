/* eslint-disable no-case-declarations */
export const initialState = {
  cards: []
}

export const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { title: action.title, content: [] }]
      }
    case 'DELETE_CARD':
      const updatedCards = state.cards
      updatedCards[action.columnIndex].content.splice(action.cardIndex, 1)
      return { ...state, cards: updatedCards }
    case 'DELETE_LANE':
      const updateLane = state.cards
      updateLane.splice(action.landeIndex, 1)
      return { ...state, cards: updateLane }
    case 'ADD_CONTENT':
      let newCards = state.cards.map((card, index) => {
        if (index === action.index) {
          card.content = [
            ...card.content,
            {
              title: action.title,
              text: action.content,
              priority: action.priority
            }
          ]
        }
        return card
      })
      return {
        ...state,
        cards: newCards
      }
    case 'CHANGE_COLUMN':
      let transferredValue =
        state.cards[action.comingIndex].content[action.contentIndex]
      let changeColumns = state.cards
      changeColumns = state.cards.map((card, index) => {
        if (card.title === action.receivingIndex) {
          card.content = [...card.content, transferredValue]
        }
        if (index === action.comingIndex) {
          card.content = card.content.filter(
            (content, index) => index !== action.contentIndex
          )
        }
        return card
      })
      return {
        ...state,
        cards: changeColumns
      }
    default:
      return state
  }
}
