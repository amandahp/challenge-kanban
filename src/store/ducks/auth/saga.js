import { call, put, takeLatest } from 'redux-saga/effects'
import { loginApi } from '../../../services/auth'
import { loginSuccess, loginError } from './actions'

function* callLoginService({ email, password }) {
  try {
    console.log(email, password)
    const response = yield call(loginApi, email, password)
    console.log(response, 'resposta')

    if (response === 'Unauthorized') {
      throw new Error(response.message)
    }
    yield put(loginSuccess(response))
  } catch (e) {
    console.log(e)
    yield put(loginError(e))
  }
}

export function* watchAuth() {
  yield takeLatest('LOGIN', callLoginService)
}
