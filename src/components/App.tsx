import { Button as ButtonRM } from '@ricardomeza/infosel-ui-component-library'
import React from 'react'
import { AppContextProvider } from '../state/appContext'
import Button from '@mui/material/Button'

const App = () => (
  <React.StrictMode>
    <AppContextProvider>
      <h1>Infosel Trading Criptocurrencies Dashboard</h1>
      <p>
        <ButtonRM label="UI Component Library Works!" />
      </p>
      <p>
        <ButtonRM label="Small Button" size="small" />
      </p>
      <p>Material UI Button</p>
      <p>
        <Button variant="contained">Hello World</Button>
      </p>
    </AppContextProvider>
  </React.StrictMode>
)

export default App
