import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer', 'kanbanReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
