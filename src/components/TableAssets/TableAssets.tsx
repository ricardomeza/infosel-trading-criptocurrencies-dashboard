import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { AppContext } from '../../state/appContext'
import { assetsHistoryGet } from '../../api/endpoints/assets'
import { cryptoCoinsLogos } from '../../utils/misc'
import { endpointResponseWasSuccessful } from '../../utils/api'
import { IAssetData } from './interface'
import { ISTable } from '@ricardomeza/infosel-ui-component-library'
import { TABLE_HEADERS } from './constants'
import { useAssetsGet } from '../../api/hooks/assets'
import { useContext, useEffect } from 'react'
import { useCryptoCoinsData } from '../../hooks/cryptoCoinData'
import './TableAssets.scss'

const TableAssets = () => {
  const { assetsGet, assetsGetReset } = useAssetsGet()
  const {
    appState,
    appApiState,
    changeOrAddValueToAppState,
    cryptoPrices,
    closeWebsocketConnection,
    initializeWebsocketConnection
  } = useContext(AppContext)
  const [newTable, setTableData] = useCryptoCoinsData(cryptoPrices)

  useEffect(() => {
    assetsGet()
    return () => assetsGetReset()
  }, [])

  useEffect(() => {
    if (endpointResponseWasSuccessful(appApiState.assetsGet)) {
      initializeWebsocketConnection()
      const DATA: IAssetData[] = appApiState.assetsGet.data[0].data
      changeOrAddValueToAppState({ cryptoCoinsLogos: cryptoCoinsLogos(DATA) })
      setTableData(DATA)
    }
    return () => closeWebsocketConnection()
  }, [appApiState.assetsGet.data])

  return newTable.length && appState.cryptoCoinsLogos && !appApiState.assetsGet.isLoading ? (
    <section className="assets-wrapper">
      <ISTable headers={TABLE_HEADERS} data={newTable} logos={appState.cryptoCoinsLogos} endpoint={assetsHistoryGet} />
    </section>
  ) : (
    <div className="assets__loading">
      <AccessTimeIcon className="" sx={{ fontSize: 60 }} />
    </div>
  )
}

export default TableAssets
