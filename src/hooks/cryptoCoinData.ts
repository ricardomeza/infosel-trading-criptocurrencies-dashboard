import { IAssetData } from '../components/TableAssets/interface'
import { useMemo, useState } from 'react'

export const useCryptoCoinsData = (cryptoPrices: any) => {
  const [tableData, setTableData] = useState<IAssetData[]>([])

  const changeTableData = (newTableData: IAssetData[]) => setTableData(newTableData)

  const getDataEval = (value: IAssetData[]) => {
    let newTable2: IAssetData[] = []

    value.forEach((item: IAssetData) => {
      const PRICE_FROM_WEBSOCKET = cryptoPrices[item.name.toLowerCase()]
      let priceUsd = Number(item.priceUsd)
      let priceClassName = ''

      if (PRICE_FROM_WEBSOCKET) {
        if (PRICE_FROM_WEBSOCKET !== item.priceUsd) {
          priceUsd = Number(PRICE_FROM_WEBSOCKET)
          if (priceUsd < Number(item.priceUsd)) {
            priceClassName = 'low'
          } else if (priceUsd > Number(item.priceUsd)) {
            priceClassName = 'high'
          }
        }
      }
      newTable2.push({ ...item, priceUsd: priceUsd.toString(), priceClassName })
    })

    changeTableData(newTable2)
    return newTable2
  }

  const newTable = useMemo(() => getDataEval(tableData ?? []), [cryptoPrices])

  return [newTable, changeTableData] as const
}
