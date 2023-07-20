import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../sass/main.scss'

function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <div className="nav__links">
        <Link to="/" className="nav__links__link">
          Accueil
        </Link>
        <Link to="/apropos" className="nav__links__link">
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
