import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { AppContext } from '../../state/appContext'
import { assetsHistoryGet } from '../../api/endpoints/assets'
import { cryptoCoinsLogos } from '../../utils/misc'
import { endpointResponseWasSuccessful } from '../../utils/api'
import { IAssetData } from '../TableAssets/interface'
import { ISTable } from '@ricardomeza/infosel-ui-component-library'
import { TABLE_HEADERS } from '../TableAssets/constants'
import { useAssetsGet } from '../../api/hooks/assets'
import { useContext, useEffect } from 'react'
import { useCryptoCoinsData } from '../../hooks/cryptoCoinData'

const TableAssetsFavs = () => {
  const { assetsGet, assetsGetReset } = useAssetsGet()
  const {
    appApiState,
    appState,
    changeOrAddValueToAppState,
    closeWebsocketConnection,
    cryptoPrices,
    initializeWebsocketConnection
  } = useContext(AppContext)
  const [newTable, setTableData] = useCryptoCoinsData(cryptoPrices)

  useEffect(() => {
    assetsGet()
    return () => assetsGetReset()
  }, [])

  useEffect(() => {
    if (endpointResponseWasSuccessful(appApiState.assetsGet)) {
      initializeWebsocketConnection(appState.assetsFavs)
      const DATA: IAssetData[] = appApiState.assetsGet.data[0].data.filter((item: any) =>
        appState.assetsFavs?.includes(item.id)
      )
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

export default TableAssetsFavs
