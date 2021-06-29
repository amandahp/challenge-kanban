import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from 'styled-components'

import App from './App'

import themeOne from './theme/themeOne'
import { store, persistor } from './store/initializeStore'

import GlobalStyles from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={themeOne}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
)
