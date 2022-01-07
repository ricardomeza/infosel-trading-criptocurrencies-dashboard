import MainToolbar from '../../MainToolbar/MainToolbar'
import { APP_MAIN_LOGO_URL } from '../../../utils/constants'
import { AppContext } from '../../../state/appContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './LayoutMain.scss'

const LayoutMain = ({ children }: any) => {
  const { appState } = useContext(AppContext)
  return (
    <section className="layout-main">
      <header className="layout-main__header">
        <section className="header__content">
          <Link to="/" className="content__title">
            <h1 className="">{appState.appMainTitle}</h1>
          </Link>
        </section>
        <img src={APP_MAIN_LOGO_URL} alt="" />
      </header>
      <MainToolbar />
      <div>{children}</div>
    </section>
  )
}

export default LayoutMain
