export const addCard = (title) => {
  return {
    type: 'ADD_CARD',
    title
  }
}

export const addContent = (index, title, content, priority) => {
  return {
    type: 'ADD_CONTENT',
    index,
    title,
    content,
    priority
  }
}

export const changeColumn = (contentIndex, comingIndex, receivingIndex) => {
  return {
    type: 'CHANGE_COLUMN',
    contentIndex,
    comingIndex,
    receivingIndex
  }
}

export const deleteCard = (columnIndex, cardIndex) => {
  return {
    type: 'DELETE_CARD',
    columnIndex,
    cardIndex
  }
}

export const deleteLane = (landeIndex) => {
  return {
    type: 'DELETE_LANE',
    landeIndex
  }
}
