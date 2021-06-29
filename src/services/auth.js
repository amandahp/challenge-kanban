export const loginApi = (email, password) => {
  console.log('entrou', email, password)
  if (
    email === `${process.env.REACT_APP_USER_EMAIL}` &&
    password === `${process.env.REACT_APP_USER_PASSWORD}`
  ) {
    return 'token'
  } else {
    return 'Unauthorized'
  }
}
