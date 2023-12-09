import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-4 pt-4'>
      <Link to={'/'}>
      <img style={{width:'150px', height:'60px'}} src="/logo.png" alt="Logo" />
      </Link>
    </header>
  )
}

export default Header
