export const login = (email, password) => {
  return {
    type: 'LOGIN',
    email,
    password
  }
}

export const loginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    token
  }
}

export const loginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
