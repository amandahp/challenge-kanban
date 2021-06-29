export const initialState = {
  token: '',
  error: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.token, error: '' }
    case 'LOGIN_ERROR':
      return { ...state, error: action.error }
    case 'LOGOUT':
      return { ...state, token: '' }
    default:
      return state
  }
}
