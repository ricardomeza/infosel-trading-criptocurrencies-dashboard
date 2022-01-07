import AppRoutes from './AppRoutes/AppRoutes'
import React from 'react'
import { AppContextProvider } from '../state/appContext'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
)

export default App
