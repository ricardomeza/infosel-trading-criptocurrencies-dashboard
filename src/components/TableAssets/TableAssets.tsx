import { APP_MAIN_LOGO_URL } from '../../utils/constants'
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
  const { appState } = useContext(AppContext)

  return (
    <>
      <header>
        <section className="header__content">
          <h1 className="content__title">{appState.appMainTitle}</h1>
        </section>
        <img src={APP_MAIN_LOGO_URL} alt="" />
      </header>
      <section className="assets-wrapper">
        <Assets />
      </section>
    </>
  )
}

const Assets = () => {
  const { assetsGet, assetsGetReset } = useAssetsGet()
  const { appState, appApiState, changeOrAddValueToAppState, cryptoPrices } = useContext(AppContext)
  const [newTable, setTableData] = useCryptoCoinsData(cryptoPrices)

  useEffect(() => {
    assetsGet()
    return () => assetsGetReset()
  }, [])

  useEffect(() => {
    if (endpointResponseWasSuccessful(appApiState.assetsGet)) {
      const DATA: IAssetData[] = appApiState.assetsGet.data[0].data
      changeOrAddValueToAppState({ cryptoCoinsLogos: cryptoCoinsLogos(DATA) })
      setTableData(DATA)
    }
  }, [appApiState.assetsGet.data])

  return newTable.length && appState.cryptoCoinsLogos && !appApiState.assetsGet.isLoading ? (
    <ISTable headers={TABLE_HEADERS} data={newTable} logos={appState.cryptoCoinsLogos} endpoint={assetsHistoryGet} />
  ) : (
    <div className="assets__loading">
      <p>Loading data...</p>
    </div>
  )
}

export default TableAssets
