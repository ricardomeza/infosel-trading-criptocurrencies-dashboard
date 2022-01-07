import { CRYPTO_VENDOR_ASSETS_BASE_URL } from './constants'
import { IAssetData } from '../components/TableAssets/interface'

export const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max))

export const cryptoCoinsLogos = (data: IAssetData[]) =>
  data.reduce((object: Record<string, string>, item: any) => {
    object[item.symbol.toLowerCase()] = `${CRYPTO_VENDOR_ASSETS_BASE_URL}/${item.symbol.toLowerCase()}@2x.png`
    return object
  }, {})
