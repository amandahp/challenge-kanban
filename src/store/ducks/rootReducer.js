import { combineReducers } from 'redux'
import { authReducer } from './auth/reducer'
import { kanbanReducer } from './kanban/reducer'

const rootReducer = combineReducers({ authReducer, kanbanReducer })

export default rootReducer
