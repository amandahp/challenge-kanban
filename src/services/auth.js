export const loginApi = (email, password) => {
  console.log('entrou', email, password)
  if (email === 'admin@admin.com' && password === 'admin') {
    console.log('retorno')
    return 'token'
  } else {
    return 'Unauthorized'
  }
}
