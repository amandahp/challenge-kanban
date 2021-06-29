import { all, fork } from 'redux-saga/effects'
import { watchAuth } from './auth/saga'

export default function* IndexSagas() {
  return yield all([fork(watchAuth)])
}
