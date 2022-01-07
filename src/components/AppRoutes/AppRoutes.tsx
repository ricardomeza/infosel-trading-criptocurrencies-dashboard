import LayoutMain from '../Layout/LayoutMain/LayoutMain'
import TableAssets from '../TableAssets/TableAssets'
import TableAssetsFavs from '../TableAssetsFavs/TableAssetsFavs'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <LayoutMain>
      <Routes>
        <Route path="/" element={<TableAssets />} />
        <Route path={'/only-favs'} element={<TableAssetsFavs />} />
      </Routes>
    </LayoutMain>
  )
}

export default AppRoutes
