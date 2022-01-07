import BookmarksIcon from '@mui/icons-material/Bookmarks'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import './MainToolbar.scss'

const MainToolbar = () => (
  <nav className="main-toolbar">
    <Link to="/">
      <HomeIcon />
      Home
    </Link>
    <Link to="/only-favs">
      <BookmarksIcon />
      Bookmarks
    </Link>
  </nav>
)

export default MainToolbar
