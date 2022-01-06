import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import React, { useContext, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { AppContext, AppContextProvider } from '../state/appContext'
import { Button as ButtonRM } from '@ricardomeza/infosel-ui-component-library'
import { endpointResponseWasSuccessful } from '../utils/api'
import { useAssetsGet, useAssetsHistoryGet } from '../api/hooks/assets'

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
      <Assets />
    </AppContextProvider>
  </React.StrictMode>
)

const Assets = () => {
  const { appApiState } = useContext(AppContext)
  const { assetsGet, assetsGetReset } = useAssetsGet()
  const { assetsHistoryGet, assetsHistoryGetReset } = useAssetsHistoryGet()

  useEffect(() => {
    assetsGet()
    assetsHistoryGet('bitcoin', 'm5')

    return () => {
      assetsGetReset()
      assetsHistoryGetReset()
    }
  }, [])

  return endpointResponseWasSuccessful(appApiState.assetsGet) ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {appApiState.assetsGet.data[0].data.map((row: any) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
                <br />
                {row.symbol}
              </TableCell>
              <TableCell align="right">
                <p>Price</p>
                <p>{row.priceUsd}</p>
              </TableCell>
              <TableCell align="right">
                <p>(24H)</p>
                <p>{row.changePercent24Hr}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <></>
  )
}

export default App
