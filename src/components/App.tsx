import React from 'react'
import TableAssets from './TableAssets/TableAssets'
import { AppContextProvider } from '../state/appContext'

const App = () => (
  <React.StrictMode>
    <AppContextProvider>
      <TableAssets />
    </AppContextProvider>
  </React.StrictMode>
)

export default App
