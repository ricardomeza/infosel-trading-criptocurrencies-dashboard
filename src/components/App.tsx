import React from 'react'
import { AppContextProvider } from '../state/appContext'

const App = () => (
  <React.StrictMode>
    <AppContextProvider>
      <h1>Infosel Trading Criptocurrencies Dashboard</h1>
    </AppContextProvider>
  </React.StrictMode>
)

export default App
