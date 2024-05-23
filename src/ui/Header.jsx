
import { Link } from 'react-router-dom'
import SearchOrder from './SearchOrder'

function Header() {
  return (
    <header>
        <Link to="/">
            Fast React Pizza Inc
        </Link>

        <SearchOrder />

        <p>
            Kingsley
        </p>
    </header>
  )
}

export default Header