import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import buildRoutes from './routes/Routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>{buildRoutes()}</Switch>
    </BrowserRouter>
  )
}

export default App
