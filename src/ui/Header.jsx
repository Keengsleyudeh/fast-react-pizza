
import { Link } from 'react-router-dom'
import SearchOrder from './SearchOrder'
import Username from '../features/user/Username'

function Header() {
  return (
    <header className='flex items-center justify-between font-pizza bg-yellow-400 uppercase font-semibold px-4 py-3 border-b border-stone-200 sm:px-6'>
        <Link to="/" className='tracking-widest'>
            Fast React Pizza Inc
        </Link>

        <SearchOrder />

        <Username />
    </header>
  )
}

export default Header