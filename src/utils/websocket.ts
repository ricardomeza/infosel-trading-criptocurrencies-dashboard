export const websocketConnections = {
  coincap: (assetsFilter: string = 'ALL') => `wss://ws.coincap.io/prices?assets=${assetsFilter}`
}
